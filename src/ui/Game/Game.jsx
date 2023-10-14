import React from "react";
import Header from "../Header/Header";
import game from "./Game.module.css"
import Navigation from "../Navigation/Navigation";

const rowsAndColls = Array.from(Array(10).keys()).map((num) => num);

const Game = (props) => {

    let textComments = () => {
        if (props.status() === "FINISH") {
            return "ПОБЕДИЛ ИГРОК " + props.whoseWin()
        } else {
            return "ХОД ИГРОКА " + props.textMessage.nameWhoseTurn()
        }
    }

    props.startGame()

    props.attackII()

    return (
        <section className={game.main}>
            <section className={game.header}>
                <Header/>
            </section>
            <section className={game.fieldsAndMessages}>
                <section className={game.fields}>
                    <section className={game.fieldDecs}>
                        КОЛИЧЕСТВО КОРАБЛЕЙ: {props.textMessage.turnLiveShips()}
                        <table>
                            {rowsAndColls.map((row) => (<tr> {
                                rowsAndColls.map((col) => (<td>{props.turnField()[row][col].getStatus()}</td>) )
                            }</tr>))}
                        </table>
                        {props.textMessage.nameWhoseTurn()}
                    </section>
                    <section className={game.fieldDecs}>
                        КОЛИЧЕСТВО КОРАБЛЕЙ: {props.textMessage.opponentLiveShips()}
                        <table >
                            {rowsAndColls.map((row) => (<tr> {
                                rowsAndColls.map((col) => (<td onClick={props.attack}>{props.opponentField()[row][col].getStatus()}</td>) )
                            }</tr>))}
                        </table>
                        {props.textMessage.nameWhoseOpponent()}
                    </section>
                </section>
                <p>{textComments()}</p>
            </section>

            <nav>
                <Navigation/>
            </nav>
        </section>
    )
}

export default Game;