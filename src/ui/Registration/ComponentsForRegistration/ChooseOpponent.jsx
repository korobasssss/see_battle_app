import React from "react";
import form from "./Form.module.css"
import reg from "../Registration.module.css";
import {NavLink} from "react-router-dom";
import Header from "../../Header/Header";
import {
    arrangementPlayerActionCreator, GAME_OPPONENT, pageChooseOpp,
    setGameTypeOpponentActionCreator,
    setOpponentNameActionCreator
} from "../../../redux/constants";

const ChooseOpponent = (props) => {
    const setOpponent = (event) => {
        props.dispatch(setGameTypeOpponentActionCreator(event))
    }

    const checkDisabled = () => {
        if (props.getGameTypeOpponent === GAME_OPPONENT.NONE || props.getGameTypeOpponent === GAME_OPPONENT.II) {
            return true
        } else if (props.getGameTypeOpponent === GAME_OPPONENT.SECOND_PLAYER) {
            return  false;
        }
    }

    const setName = (event) => {
        props.dispatch(setOpponentNameActionCreator(event))
    }

    let checkNameAndOption = (e) => {
        if (props.getGameTypeOpponent === GAME_OPPONENT.NONE) {
            e.preventDefault()
        } else {
            if (props.getGameTypeOpponent === GAME_OPPONENT.SECOND_PLAYER) {
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
                        <select value={props.getGameTypeOpponent} onChange={setOpponent}>
                            <option value={GAME_OPPONENT.II} selected={props.getGameTypeOpponent === GAME_OPPONENT.II}>ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ</option>
                            <option value={GAME_OPPONENT.SECOND_PLAYER} selected={props.getGameTypeOpponent === GAME_OPPONENT.SECOND_PLAYER}>ВТОРОЙ ИГРОК</option>
                        </select>
                    </section>
                    <section className={"twoPlayers " + form.legendInput}>
                        <legend>ВВЕДИТЕ ИМЯ ВТОРОГО ИГРОКА</legend>
                        <input type="text" disabled={checkDisabled()} onChange={setName} value={props.getOpponentName}/>
                    </section>
                    <NavLink to={"/arrangement"} onClick={checkNameAndOption} className={reg.buttonNext}>ДАЛЕЕ</NavLink>
                </section>
            </section>
        </section>

    )
}

export default ChooseOpponent;