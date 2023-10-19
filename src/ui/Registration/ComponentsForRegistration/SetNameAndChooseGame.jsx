import React from "react";
import form from "./Form.module.css"
import reg from "../Registration.module.css";
import {NavLink} from "react-router-dom";
import Header from "../../Header/Header";
import navCss from "../../Navigation/Navigation.module.css"
import {
    GAME_TYPE,
    pageSetName,
    setGameTypeActionCreator,
    setPlayerNameActionCreator
} from "../../../redux/constants";

const SetNameAndChooseGame = (props) => {


    let setName = (event) => {
        props.dispatch(setPlayerNameActionCreator(event))
    }

    const setGameType = (event) => {
        props.dispatch(setGameTypeActionCreator(event))
    }

    let checkName = (e) => {
        if (props.getPlayerName === "" || props.getPlayerName === undefined) {
            e.preventDefault()
        } else {
            props.dispatch(pageSetName())
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
                        <legend> ВВЕДИТЕ ИМЯ </legend>
                        <input type="text" onChange={setName} value={props.getPlayerName}/>
                    </section>
                    <section className={form.legendInput}>
                        <legend> ВЫБЕРИТЕ ТИП ИГРЫ </legend>
                        <select value={props.getGameType} onChange={setGameType}>
                            <option value={GAME_TYPE.QUEUE} selected={props.getGameType === GAME_TYPE.QUEUE}>СТРЕЛЬБА СТРОГО ПО ОЧЕРЕДИ</option>
                            <option value={GAME_TYPE.MISS} selected={props.getGameType === GAME_TYPE.MISS}>СТРЕЛЬБА ДО ПРОМАХА</option>
                        </select>
                    </section>
                    <NavLink to={"/chooseOpponent"} onClick={checkName} className={reg.buttonNext + " " + navCss.startAndExit} disabled={true}>ДАЛЕЕ</NavLink>
                </section>
            </section>
        </section>

    )
}

export default SetNameAndChooseGame;