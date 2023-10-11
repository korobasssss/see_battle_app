import React from "react";
import form from "./Form.module.css"
import reg from "../Registration.module.css";
import {NavLink} from "react-router-dom";
import Header from "../../Header/Header";

const SetNameAndChooseGame = (props) => {
    const setName = (event) => {
        props.setName(event.target.value)
        // props.player.name = event.target.value;
        console.log(props.player);
    }

    const setGameType = (event) => {
        console.log(props)
        // if (event.target.selectedIndex === 0) {
        //     props.game.TYPE = "QUEUE"
        // } else if (event.target.selectedIndex === 1) {
        //     props.game.TYPE = "FIRST_SHOT"
        // }
        // console.log(props.game)
    }

    return (
        <section className={form.registration + " " + reg.information}>
            <section className={reg.main }>
                <section className={reg.header}>
                    <Header/>
                </section>
                <section className={form.main}>
                    <section>
                        <legend> ВВЕДИТЕ ИМЯ </legend>
                        <input type="text" /*onChange={setName} value={props.name}*//>
                    </section>
                    <section>
                        <legend> ВЫБЕРИТЕ ТИП ИГРЫ </legend>
                        <select name="" id="" onChange={setGameType}>
                            <option value="queue">СТРЕЛЬБА СТРОГО ПО ОЧЕРЕДИ</option>
                            <option value="miss">СТРЕЛЬБА ДО ПРОМАХА</option>
                        </select>
                    </section>
                    <NavLink to={"/chooseOpponent"} className={reg.buttonNext}>ДАЛЕЕ</NavLink>
                </section>

            </section>
        </section>

    )
}

export default SetNameAndChooseGame;