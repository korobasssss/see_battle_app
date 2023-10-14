import React from "react";
import form from "./Form.module.css"
import reg from "../Registration.module.css";
import {NavLink} from "react-router-dom";
import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";

let secondPlayerInput = true;


const ChooseOpponent = (props) => {

    const setOpponent = (event) => {
        if (event.target.selectedIndex === 0) {
            props.setGameOpp(event.target.value)
            secondPlayerInput = true
        } else if (event.target.selectedIndex === 1) {
            props.setGameOpp(event.target.value)
            secondPlayerInput = false;
        }

        props.update()
    }

    const setName = (event) => {
        console.log(props.getOppName())
        props.setOppName(event.target.value)
    }

    let checkName = (e) => {
        if (props.getGameOpp() === "SECOND_PLAYER") {
            if (props.getGameOpp() === "" || props.getGameOpp() === undefined) {
                console.log("im here")
                e.preventDefault()
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
                    <section>
                        <legend>ВЫБЕРИТЕ ПРОТИВНИКА</legend>
                        <select onChange={setOpponent}>
                            <option value="II">Искусственный интеллект</option>
                            <option value="SECOND_PLAYER">Второй игрок</option>
                        </select>
                    </section>
                    <section className="twoPlayers">
                        <legend>ВВЕДИТЕ ИМЯ ВТОРОГО ИГРОКА</legend>
                        <input type="text" disabled={secondPlayerInput} onChange={setName} value={props.getOppName()}/>
                    </section>
                    <NavLink to={"/arrangement"} onClick={checkName} className={reg.buttonNext}>ДАЛЕЕ</NavLink>
                </section>

                <nav>
                    <Navigation/>
                </nav>
            </section>
        </section>

    )
}

export default ChooseOpponent;