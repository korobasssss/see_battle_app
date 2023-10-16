import React from "react";
import Header from "../Header/Header";
import game from "./Game.module.css"
import "../Table.css"
import {attackActionCreator, attackIIActionCreator, newGameActionCreator} from "../../redux/state";

const rowsAndColls = Array.from(Array(10).keys()).map((num) => num);


const Game = (props) => {

    let textComments = () => {
        if (props.statusGame === "FINISH") {
            return "ПОБЕДИЛ ИГРОК " + props.whoseWin
        } else {
            return "ХОД ИГРОКА " + props.nameWhoseTurn
        }
    }
    let attack_II = () => {
        if (props.getGameTypeOpponent === "II" && props.whoseTurnState === "SECOND_PLAYER" && props.statusGame === "GAME") {
            props.dispatch(attackIIActionCreator())
        }

    }
    const action = (e) => {
        props.dispatch(attackActionCreator(e))
    }

    attack_II()


    return (
        <section className={game.main}>
            <section className={game.header}>
                <Header/>
            </section>
            <section className={game.page}>
                <section className={game.fieldsAndMessages}>
                    <section className={game.fields}>
                        <section className={game.fieldDecs}>
                            КОЛИЧЕСТВО КОРАБЛЕЙ: {props.turnLiveShips}
                            <table>
                                {rowsAndColls.map((row) => (<tr> {
                                    rowsAndColls.map((col) => (<td className={props.getTurnField[row][col]}></td>) )
                                }</tr>))}
                            </table>
                            {props.nameWhoseTurn}
                        </section>
                        <section className={game.fieldDecs}>
                            КОЛИЧЕСТВО КОРАБЛЕЙ: {props.opponentLiveShips}
                            <table >
                                {rowsAndColls.map((row) => (<tr> {
                                    rowsAndColls.map((col) => (<td className={props.getNotTurnField[row][col]} onClick={action}></td>) )
                                }</tr>))}
                            </table>
                            {props.nameWhoseOpponent}
                        </section>
                    </section>
                    <p className={game.messages}>{textComments()}</p>
                </section>
            </section>

        </section>

    )
}

export default Game;