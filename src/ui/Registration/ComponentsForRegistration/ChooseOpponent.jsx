import React from "react";
import form from "./Form.module.css"
import reg from "../Registration.module.css";
import {NavLink} from "react-router-dom";
import Header from "../../Header/Header";

let secondPlayerInput = true;


const ChooseOpponent = (props) => {

    const setOpponent = (event) => {
        {console.log(props)}
        if (event.target.selectedIndex === 0) {
            props.game.TYPE = "II"
        } else if (event.target.selectedIndex === 1) {
            props.game.TYPE = "SECOND_PLAYER"
            secondPlayerInput = false;
        }
        console.log(props.game)
        console.log(props.game.TYPE === "SECOND_PLAYER")
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
                            <option value="ii">Искусственный интеллект</option>
                            <option value="twoPlayers">Второй игрок</option>
                        </select>
                    </section>
                    <section className="twoPlayers">
                        <legend>ВВЕДИТЕ ИМЯ ВТОРОГО ИГРОКА</legend>
                        <input type="text" disabled={secondPlayerInput}/>
                    </section>
                    <NavLink to={"/arrangement"} className={reg.buttonNext}>ДАЛЕЕ</NavLink>
                </section>

            </section>
        </section>

    )
}

export default ChooseOpponent;