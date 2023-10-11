import React from "react";
import arr from "./ArrangementShips.module.css"
import reg from "../Registration.module.css";
import Header from "../../Header/Header";
import {NavLink} from "react-router-dom";
//import {arrangePlayer} from "../../../state";

const ArrangementShips = (props) => {

    //arrangePlayer()

    const rowsAndColls = Array.from(Array(10).keys()).map((num) => num);

    return (
        <section className={arr.arrangement + " " + reg.information}>
            <section className={reg.main}>
                <section className={reg.header}>
                    <Header/>
                </section>
                <section className={arr.main}>
                    <section className={arr.fieldAndDescr}>
                        РАССТАВЬТЕ КОРАБЛИ
                        <section className={arr.field}>
                            <table>
                                {rowsAndColls.map((row) => (<tr> {
                                    rowsAndColls.map((col) => (<td></td>) )
                                }</tr>))}
                            </table>
                        </section>
                        {/*props.player.name*/}
                    </section>
                    <NavLink to={"/game"} className={reg.buttonNext}>ИГРАТЬ</NavLink>
                </section>
            </section>
        </section>


    )
}

export default ArrangementShips;