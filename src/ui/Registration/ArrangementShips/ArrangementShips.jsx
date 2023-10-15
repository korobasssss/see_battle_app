import React from "react";
import arr from "./ArrangementShips.module.css"
import replay from "../../../images/replay.png"
import reg from "../Registration.module.css";
import Header from "../../Header/Header";
import {NavLink} from "react-router-dom";
import Navigation from "../../Navigation/Navigation";
import {
    arrangementPlayerActionCreator,
    changeTurnActionCreator,
    repeatRandomPlacementActionCreator, startGameActionCreator
} from "../../../state";

const rowsAndColls = Array.from(Array(10).keys()).map((num) => num);


const ArrangementShips = (props) => {
    props.dispatch(arrangementPlayerActionCreator())

    let showButtonChangeField = () => {
        return props.getGameTypeOpponent() !== "SECOND_PLAYER";
    }

    let click = () => {
        props.dispatch(changeTurnActionCreator())
    }
    let repeat = () => {
        props.dispatch(repeatRandomPlacementActionCreator())
    }

    let startGame = () => {
        props.dispatch(startGameActionCreator())
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
                                        rowsAndColls.map((col) => (<td>{props.getTurnField()[row][col].getStatus()}</td>) )
                                    }</tr>))}
                                </table>
                            </section>
                            <section>
                                <p>{props.nameWhoseTurn()}</p>
                                <button disabled={showButtonChangeField()} onClick={click}> pass </button>
                            </section>

                        </section>
                        <section className={arr.forImg}>
                            <img src={replay} onClick={repeat} className={arr.img_replay} alt={"repeat random arrangement"}/>
                        </section>
                    </section>
                    <NavLink to={"/game"} className={reg.buttonNext} onClick={startGame}>ИГРАТЬ</NavLink>
                </section>
                <nav>
                    <Navigation/>
                </nav>
            </section>
        </section>


    )
}

export default ArrangementShips;