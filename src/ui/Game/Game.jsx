import React from "react";
import Header from "../Header/Header";
import game from "./Game.module.css"
import "../Table.css"
import {
    attackActionCreator,
    attackIIActionCreator,
    GAME_OPPONENT,
    GAME_STATUS, GAME_TYPE, GAME_WHOSE_TURN,
    newGameActionCreator
} from "../../redux/constants";

const rowsAndColls = Array.from(Array(10).keys()).map((num) => num);
const headerLetters = ["A", "B", "C ","D ","E ","F ","G ","H ","I ","J",];


const Game = (props) => {

    let textComments = () => {
        if (props.statusGame === GAME_STATUS.FINISH) {
            return "ПОБЕДИЛ ИГРОК " + props.whoseWin
        } else {
            return "ХОД ИГРОКА " + props.nameWhoseTurn
        }
    }
    let textGameType = () => {
        if (props.typeGame === GAME_TYPE.QUEUE) {
            return "ПО ОЧЕРЕДИ"
        } else {
            return ""
        }
    }

    let attack_II = () => {
        console.log("in jsx", props.whoseTurnState)
        if (props.statusGame === GAME_STATUS.GAME &&
            props.whoseTurnState === GAME_WHOSE_TURN.SECOND_PLAYER &&
            props.getGameTypeOpponent === GAME_OPPONENT.II ) {
                console.log("in if", props.whoseTurnState)
                props.dispatch(attackIIActionCreator())
        }
    }
    const action = (e) => {
        props.dispatch(attackActionCreator(e))
    }

    attack_II()

    return (
        <section className={game.main}>
            <header className={game.header}>
                <section className={game.headerStyle}>
                    <Header/>
                </section>
                <aside>
                    <p>ИМЯ: {props.playerName}</p>
                    <p>ТИП ИГРЫ: {props.typeGame}</p>
                    <p>СЧЁТ: {props.score}</p>
                </aside>
            </header>
            <section className={game.page}>
                <section className={game.fieldsAndMessages}>
                    <section className={game.fields}>
                        <section className={game.fieldDecs}>
                            КОЛИЧЕСТВО КОРАБЛЕЙ: {props.turnLiveShips}
                            <table>
                                <thead>
                                <tr>
                                    <th></th>
                                    {headerLetters.map((letter) => (<th>{letter}</th>))}
                                </tr>
                                </thead>
                                {rowsAndColls.map((row) => (<tr> <th>{rowsAndColls[row] + 1}</th>{
                                    rowsAndColls.map((col) => (<td className={props.getTurnField[row][col] + " " + game.td}></td>) )
                                }</tr>))}
                            </table>
                            {props.nameWhoseTurn}
                        </section>
                        <section className={game.fieldDecs}>
                            КОЛИЧЕСТВО КОРАБЛЕЙ: {props.opponentLiveShips}
                            <table >
                                <thead>
                                <tr>
                                    <th></th>
                                    {headerLetters.map((letter) => (<th>{letter}</th>))}
                                </tr>
                                </thead>
                                {rowsAndColls.map((row) => (<tr> <th>{rowsAndColls[row] + 1}</th>{
                                    rowsAndColls.map((col) => (<td className={props.getNotTurnField[row][col] + " " + game.td} onClick={action}></td>) )
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