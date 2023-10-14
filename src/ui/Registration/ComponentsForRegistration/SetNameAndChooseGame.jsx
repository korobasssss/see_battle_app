import React from "react";
import form from "./Form.module.css"
import reg from "../Registration.module.css";
import {NavLink} from "react-router-dom";
import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";

const SetNameAndChooseGame = (props) => {


    const setName = (event) => {
        console.log(props.getPlayerName())
        props.setPlayerName(event.target.value)
    }

    const setGameType = (event) => {
        if (event.target.selectedIndex === 0) {
            props.setGameType(event.target.value)
        } else if (event.target.selectedIndex === 1) {
            props.setGameType(event.target.value)
        }
    }

    let checkName = (e) => {
        if (props.getPlayerName() === "" || props.getPlayerName() === undefined) {
            e.preventDefault()
        }
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
                        <input type="text" onChange={setName} value={props.getPlayerName()}/>
                    </section>
                    <section>
                        <legend> ВЫБЕРИТЕ ТИП ИГРЫ </legend>
                        <select name="" id="" onChange={setGameType}>
                            <option value="QUEUE">СТРЕЛЬБА СТРОГО ПО ОЧЕРЕДИ</option>
                            <option value="MISS">СТРЕЛЬБА ДО ПРОМАХА</option>
                        </select>
                    </section>
                    <NavLink to={"/chooseOpponent"} onClick={checkName} className={reg.buttonNext} disabled={true}>ДАЛЕЕ</NavLink>
                </section>

                <nav>
                    <Navigation/>
                </nav>
            </section>
        </section>

    )
}

export default SetNameAndChooseGame;