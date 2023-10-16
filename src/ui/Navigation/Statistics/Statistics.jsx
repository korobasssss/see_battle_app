import {NavLink} from "react-router-dom";
import stat from "./Statistics.module.css"
import React from "react";
import reg from "../../Registration/Registration.module.css";
import anchor from "../../../images/anchor.png";

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
                        <header className={stat.header}>
                            <img src={anchor} alt="anchor"/>
                            СТАТИСТИКА ИГР
                            <img src={anchor} alt="anchor"/>
                        </header>
                    </section>
                    <section>
                        <table>
                            <thead>
                            <tr>
                                <th>ВРЕМЯ</th>
                                <th>СТАТУС</th>
                            </tr>
                            </thead>
                            {props.statistic.map((row, index) =>
                                <tr key={index}>
                                    {row.map((cell, cellIndex) =>
                                        <td key={cellIndex}>{cell}</td>
                                    )}
                                </tr>
                            )}


                            {/*{props.statistic.map((row) => (<tr> {*/}
                            {/*    props.statistic.map((col) => (<td>{props.statistic[row][col]}</td>) )*/}
                            {/*}</tr>))}*/}
                        </table>
                    </section>
                </section>
        </section>
    )
}

export default Statistics