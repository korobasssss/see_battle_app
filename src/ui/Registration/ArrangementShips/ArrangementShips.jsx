import React from "react";
import arr from "./ArrangementShips.module.css"
import replay from "../../../images/replay.png"
import reg from "../Registration.module.css";
import Header from "../../Header/Header";
import {NavLink} from "react-router-dom";
import {
    changeTurnActionCreator, GAME_OPPONENT, pageArrange,
    repeatRandomPlacementActionCreator, startGameActionCreator
} from "../../../redux/constants";

const rowsAndColls = Array.from(Array(10).keys()).map((num) => num);
const headerLetters = ["A", "B", "C ","D ","E ","F ","G ","H ","I ","J",];

const ArrangementShips = (props) => {
    let showButtonChangeField = () => {
        return props.getGameTypeOpponent === GAME_OPPONENT.II;
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
            <section className={reg.main + " " + arr.changeRowGap}>
                <section className={reg.header}>
                    <Header/>
                </section>

                <section className={arr.main}>
                        <section className={arr.fieldAndDescr}>
                            РАССТАВЬТЕ КОРАБЛИ
                            <section className={arr.field}>
                                <table className={arr.table}>
                                    <thead>
                                    <tr>
                                        <th></th>
                                        {headerLetters.map((letter) => (<th>{letter}</th>))}
                                    </tr>
                                    </thead>
                                    {rowsAndColls.map((row) => (<tr> <th>{rowsAndColls[row] + 1}</th> {
                                        rowsAndColls.map((col) => ( <td className={props.getTurnField[row][col] + " " + arr.td}></td>))
                                    }</tr>))}
                                </table>
                                <section className={arr.forImg}>
                                    <img src={replay} onClick={repeat} className={arr.img_replay} alt={"repeat random arrangement"}/>
                                </section>
                                <section>
                                    <p>{props.nameWhoseTurn}</p>
                                </section>
                            </section>
                        </section>
                    <nav>
                        <button disabled={showButtonChangeField()} onClick={click} className={arr.buttonChangePlayer}> СМЕНИТЬ ИГРОКА </button>
                        <NavLink to={"/game"} className={reg.buttonNext} onClick={startGame}>ИГРАТЬ</NavLink>
                    </nav>

                </section>
            </section>
        </section>
    )
}

export default ArrangementShips;