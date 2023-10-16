import {NavLink} from "react-router-dom";
import React from "react";
import nav from "./Navigation.module.css"
import {newGameActionCreator, pageGame, pageSetName} from "../../redux/state";

const Navigation = (props) => {

    let checkGame = () => {
        if (props.gameStatus !== "GAME") {
            if (props.gameStatus !== "FINISH"){
                return true
            }
        }
        return false
    }

    let newGame = () => {
        props.dispatch(newGameActionCreator())
    }

    return (
        <section className={nav.nav}>
            <section className={nav.buttons} >
                <section className={nav.rulesAndStatistics}>
                    <NavLink to={"/rules"} className={nav.main}>ПРАВИЛА</NavLink>
                    <NavLink to={"/statistics"} className={nav.main}>СТАТИСТИКА ИГР</NavLink>
                </section>
                <section className={nav.startAndExit} >
                    <NavLink to={"/*"} className={nav.main + " " + nav.mainButton} hidden={checkGame()} onClick={newGame}>НОВАЯ ИГРА</NavLink>
                </section>
            </section>
        </section>
    )
}

export default Navigation