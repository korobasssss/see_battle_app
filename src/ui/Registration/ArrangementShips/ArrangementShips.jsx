import React from "react";
import arr from "./ArrangementShips.module.css"
import replay from "../../../images/replay.png"
import reg from "../Registration.module.css";
import Header from "../../Header/Header";
import {NavLink} from "react-router-dom";
import tbl from "../../Table.css"
import {
    changeTurnActionCreator, pageArrange, pageSetName,
    repeatRandomPlacementActionCreator, startGameActionCreator
} from "../../../redux/state";

const rowsAndColls = Array.from(Array(10).keys()).map((num) => num);

const ArrangementShips = (props) => {
    let showButtonChangeField = () => {
        return props.getGameTypeOpponent !== "SECOND_PLAYER";
    }

    let click = () => {
        props.dispatch(changeTurnActionCreator())
    }
    let repeat = () => {
        props.dispatch(repeatRandomPlacementActionCreator())
    }

    let startGame = () => {
        props.dispatch(startGameActionCreator())
        props.dispatch(pageArrange())
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
                                        rowsAndColls.map((col) => (<td className={props.getTurnField[row][col]}>{}</td>))
                                    }</tr>))}
                                </table>
                                <section className={arr.forImg}>
                                    <img src={replay} onClick={repeat} className={arr.img_replay} alt={"repeat random arrangement"}/>
                                </section>
                            </section>
                            <section className={arr.nameAndChange}>
                                <p>{props.nameWhoseTurn}</p>
                                <button disabled={showButtonChangeField()} onClick={click} className={arr.buttonChangePlayer}> СМЕНИТЬ ИГРОКА </button>
                            </section>
                        </section>

                    </section>
                    <NavLink to={"/game"} className={reg.buttonNext} onClick={startGame}>ИГРАТЬ</NavLink>
                </section>
            </section>
        </section>
    )
}

export default ArrangementShips;