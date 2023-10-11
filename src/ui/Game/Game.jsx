import React from "react";
import Header from "../Header/Header";
import game from "./Game.module.css"
import reg from "../Registration/Registration.module.css";

const Game = (params) => {
    const rowsAndColls = Array.from(Array(10).keys()).map((num) => num);

    return (
        <section className={game.main}>
            <section className={game.header}>
                <Header/>
            </section>
            <section className={game.fields}>
                <section className={game.fieldDecs}>
                    КОЛИЧЕСТВО КОРАБЛЕЙ: 10
                    <table>
                        {rowsAndColls.map(() => (<tr> {
                            rowsAndColls.map(() => (<td></td>) )
                        }</tr>))}
                    </table>
                    {params.state.player.name}
                </section>
                <section className={game.fieldDecs}>
                    КОЛИЧЕСТВО КОРАБЛЕЙ: 10
                    <table>
                        {rowsAndColls.map(() => (<tr> {
                            rowsAndColls.map(() => (<td></td>) )
                        }</tr>))}
                    </table>
                    {params.state.player.name}
                </section>
            </section>
            <nav>

            </nav>
        </section>
    )
}

export default Game;