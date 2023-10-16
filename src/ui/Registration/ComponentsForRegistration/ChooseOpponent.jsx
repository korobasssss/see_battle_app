import React from "react";
import form from "./Form.module.css"
import reg from "../Registration.module.css";
import {NavLink} from "react-router-dom";
import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import {
    arrangementPlayerActionCreator, pageChooseOpp, pageSetName,
    setGameTypeOpponentActionCreator,
    setOpponentNameActionCreator
} from "../../../redux/state";

let secondPlayerInput = true;


const ChooseOpponent = (props) => {

    const setOpponent = (event) => {
        if (event.target.selectedIndex === 0) {
            secondPlayerInput = true
        } else if (event.target.selectedIndex === 1) {
            secondPlayerInput = false;
        }
        props.dispatch(setGameTypeOpponentActionCreator(event))
    }

    const setName = (event) => {
        props.dispatch(setOpponentNameActionCreator(event))
    }

    let checkName = (e) => {
        if (props.getGameTypeOpponent === "SECOND_PLAYER") {
            if (props.getOpponentName === "" || props.getOpponentName === undefined) {
                e.preventDefault()
            } else {
                props.dispatch(arrangementPlayerActionCreator())
            }
        } else {
            props.dispatch(arrangementPlayerActionCreator())
            props.dispatch(pageChooseOpp())
        }

    }

    return (
        <section className={form.registration + " " + reg.information}>
            <section className={reg.main}>
                <section className={reg.header}>
                    <Header/>
                </section>

                <section className={form.main}>
                    <section className={form.legendInput}>
                        <legend>ВЫБЕРИТЕ ПРОТИВНИКА</legend>
                        <select onChange={setOpponent}>
                            <option value="II">ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ</option>
                            <option value="SECOND_PLAYER">ВТОРОЙ ИГРОК</option>
                        </select>
                    </section>
                    <section className={"twoPlayers " + form.legendInput}>
                        <legend>ВВЕДИТЕ ИМЯ ВТОРОГО ИГРОКА</legend>
                        <input type="text" disabled={secondPlayerInput} onChange={setName} value={props.getOpponentName}/>
                    </section>
                    <NavLink to={"/arrangement"} onClick={checkName} className={reg.buttonNext}>ДАЛЕЕ</NavLink>
                </section>
            </section>
        </section>

    )
}

export default ChooseOpponent;