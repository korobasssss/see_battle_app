import React from "react";
import form from "./Form.module.css"
import reg from "../Registration.module.css";
import {NavLink} from "react-router-dom";
import Header from "../../Header/Header";
import navCss from "../../Navigation/Navigation.module.css"
import {
    pageArrange,
    pageChooseOpp, pageGame,
    pageSetName,
    setGameTypeActionCreator,
    setPlayerNameActionCreator
} from "../../../redux/state";

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
    //
    // let reset = () => {
    //     if (props.pageGame) {
    //         props.dispatch(pageSetName())
    //         props.dispatch(pageChooseOpp())
    //         props.dispatch(pageArrange())
    //         props.dispatch(pageGame())
    //     }
    // }
    //
    // reset()

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
                        <select name="" id="" onChange={setGameType}>
                            <option value="QUEUE">СТРЕЛЬБА СТРОГО ПО ОЧЕРЕДИ</option>
                            <option value="MISS">СТРЕЛЬБА ДО ПРОМАХА</option>
                        </select>
                    </section>
                    <NavLink to={"/chooseOpponent"} onClick={checkName} className={reg.buttonNext + " " + navCss.startAndExit} disabled={true}>ДАЛЕЕ</NavLink>
                </section>
            </section>
        </section>

    )
}

export default SetNameAndChooseGame;