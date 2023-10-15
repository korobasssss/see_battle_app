import React from "react";
import Header from "../Header/Header";
import game from "./Game.module.css"
import Navigation from "../Navigation/Navigation";
import GameNavigation from "../Navigation/GameNavigation";
import {attackActionCreator, attackIIActionCreator, newGameActionCreator} from "../../state";

const rowsAndColls = Array.from(Array(10).keys()).map((num) => num);


const Game = (props) => {

    let textComments = () => {
        if (props.statusGame() === "FINISH") {
            return "ПОБЕДИЛ ИГРОК " + props.whoseWin()
        } else {
            return "ХОД ИГРОКА " + props.nameWhoseTurn()
        }
    }
    let attack_II = () => {
        props.dispatch(attackIIActionCreator())
    }
    const action = (e) => {
        props.dispatch(attackActionCreator(e))
    }
    let newGame = () => {
        props.dispatch(newGameActionCreator());

    }



    attack_II()


    return (
        <section className={game.main}>
            <section className={game.header}>
                <Header/>
            </section>
            <section className={game.fieldsAndMessages}>
                <section className={game.fields}>
                    <section className={game.fieldDecs}>
                        КОЛИЧЕСТВО КОРАБЛЕЙ: {props.turnLiveShips()}
                        <table>
                            {rowsAndColls.map((row) => (<tr> {
                                rowsAndColls.map((col) => (<td>{props.getTurnField()[row][col].getStatus()}</td>) )
                            }</tr>))}
                        </table>
                        {props.nameWhoseTurn()}
                    </section>
                    <section className={game.fieldDecs}>
                        КОЛИЧЕСТВО КОРАБЛЕЙ: {props.opponentLiveShips()}
                        <table >
                            {rowsAndColls.map((row) => (<tr> {
                                rowsAndColls.map((col) => (<td onClick={action}>{props.getNotTurnField()[row][col].getStatus()}</td>) )
                            }</tr>))}
                        </table>
                        {props.nameWhoseOpponent()}
                    </section>
                </section>
                <p>{textComments()}</p>
            </section>
            <nav>
                <Navigation gameComp={<GameNavigation newGame={newGame}/>}/>
            </nav>
        </section>

    )
}

export default Game;