import React from "react";
import arr from "./ArrangementShips.module.css"
import replay from "../../../images/replay.png"
import reg from "../Registration.module.css";
import Header from "../../Header/Header";
import {NavLink} from "react-router-dom";
import Navigation from "../../Navigation/Navigation";

const rowsAndColls = Array.from(Array(10).keys()).map((num) => num);
const ArrangementShips = (props) => {
    props.arrange()

    let showButtonChangeField = () => {
        return props.gameOpponent() !== "SECOND_PLAYER";
    }

    return (
        <section className={arr.arrangement + " " + reg.information}>
            <section className={reg.main}>
                <section className={reg.header}>
                    <Header/>
                </section>

                <section className={arr.main}>
                    <section className={arr.fieldAndRepeat}>
                        <section className={arr.fieldAndDescr}>
                            РАССТАВЬТЕ КОРАБЛИ
                            <section className={arr.field}>
                                <table>
                                    {rowsAndColls.map((row) => (<tr> {
                                        rowsAndColls.map((col) => (<td>{props.turnField()[row][col].getStatus()}</td>) )
                                    }</tr>))}
                                </table>
                            </section>
                            <section>
                                <p>{props.getTurnName()}</p>
                                <button disabled={showButtonChangeField()} onClick={props.checkTurn}> pass </button>
                            </section>

                        </section>
                        <section className={arr.forImg}>
                            <img src={replay} onClick={props.repeate} className={arr.img_replay} alt={"repeat random arrangement"}/>
                        </section>
                    </section>
                    <NavLink to={"/game"} className={reg.buttonNext}>ИГРАТЬ</NavLink>
                </section>

                <nav>
                    <Navigation/>
                </nav>
            </section>
        </section>


    )
}

export default ArrangementShips;