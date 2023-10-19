import {NavLink} from "react-router-dom";
import rul from "./Rules.module.css"
import React from "react";
import reg from "../../Registration/Registration.module.css";
import anchor from "../../../images/anchor.png";
import head from "../../Header/Header.module.css"

const Rules = (props) => {

    let previousPage = () => {
        console.log(props.pageArrange)
        if (!props.pageSetName){
            return "/*"
        }
        if (!props.pageSetOpp){
            return "/chooseOpponent"
        }
        if (!props.pageArrange){
            return "/arrangement"
        }
        if (!props.pageGame){
            return "/game"
        }
        if (!props.pageStatistic){
            return "/statistics"
        }
    }

    let flagPage = previousPage()

    return (
        <section className={rul.main + " " + reg.information}>
                <NavLink to={flagPage} className={rul.cross} >✕</NavLink>
                <section className={rul.titleDesc}>
                    <section className={reg.header}>
                        <header className={head.header}>
                            <img src={anchor} alt="anchor"/>
                            ПРАВИЛА
                            <img src={anchor} alt="anchor"/>
                        </header>
                    </section>
                    <section>
                        <p>Игроки по очереди нажимают на клетки на поле противника (справа), в которую они стреляют. Например, "Б5" или "К9". Если выстрел попадает в корабль противника, клетка помечается крестом. Если выстрел промахивается, клетка просто затемняется.</p>

                        <p>Когда все клетки корабля противника попадают под огонь, корабль считается потопленным.</p>

                        <p>Игра продолжается до тех пор, пока один из игроков не потопит все корабли противника. Побеждает игрок, который первым потопит все корабли противника.</p>
                    </section>
                </section>
        </section>
    )
}

export default Rules