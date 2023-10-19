import {NavLink} from "react-router-dom";
import stat from "./Statistics.module.css"
import React from "react";
import reg from "../../Registration/Registration.module.css";
import anchor from "../../../images/anchor.png";
import head from "../../Header/Header.module.css"

const Statistics = (props) => {

    let previousPage = () => {
        if (!props.pageSetName){
            return "/*"
        }
        if (!props.pageSetOpp){
            return "/chooseOpponent"
        }
        if (!props.pageArrange){
            return "/arrangement"
        }
        if (!props.pageGame){
            return "/game"
        }
        if (!props.pageStatistic){
            return "/statistics"
        }
    }

    let flagPage = previousPage()
    console.log(props.statistic)
    return (
        <section className={stat.main + " " + reg.information}>
                <NavLink to={flagPage} className={stat.cross}>✕</NavLink>
                <section className={stat.titleDesc}>
                    <section className={reg.header}>
                        <header className={head.header}>
                            <img src={anchor} alt="anchor"/>
                            <section className={stat.title}>СТАТИСТИКА ИГР</section>
                            <img src={anchor} alt="anchor"/>
                        </header>
                    </section>
                    <section className={stat.sectionForTable}>
                        <table className={stat.tableHead}>
                            <thead>
                            <tr>
                                <th>ВРЕМЯ</th>
                                <th>СТАТУС</th>
                            </tr>
                            </thead>
                        </table>
                        <section className={stat.scrollTable}>
                            <table className={stat.tableStat}>
                                {props.statistic.map((row, index) =>
                                    <tr key={index}>
                                        {row.map((cell, cellIndex) =>
                                            <td key={cellIndex}>{cell}</td>
                                        )}
                                    </tr>
                                )}
                            </table>
                        </section>
                    </section>
                </section>
        </section>
    )
}

export default Statistics