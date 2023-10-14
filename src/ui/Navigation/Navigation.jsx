import {NavLink} from "react-router-dom";
import React from "react";
import nav from "./Navigation.module.css"

const Navigation = () => {
    return (
        <section>
            <section>
                <section className={nav.rulesAndStatistics}>
                    <NavLink to={"/chooseOpponent"}>ПРАВИЛА</NavLink>
                    <NavLink to={"/chooseOpponent"}>СТАТИСТИКА ИГР</NavLink>
                </section>
                <section className={nav.startAndExit}>
                    <NavLink to={"/chooseOpponent"}>НАЧАТЬ СНАЧАЛА</NavLink>
                    <NavLink to={"/chooseOpponent"}>ВЫХОД</NavLink>
                </section>

            </section>
        </section>
    )
}

export default Navigation