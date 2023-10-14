import {NavLink} from "react-router-dom";
import React from "react";
import nav from "./Navigation.module.css"

const Navigation = (props) => {
    return (
        <section>
            <section>
                <section className={nav.rulesAndStatistics}>
                    <NavLink to={"/chooseOpponent"}>ПРАВИЛА</NavLink>
                    <NavLink to={"/chooseOpponent"}>СТАТИСТИКА ИГР</NavLink>
                </section>
                <section className={nav.startAndExit}>
                    {props.gameComp}
                </section>

            </section>
        </section>
    )
}

export default Navigation