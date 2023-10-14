import {NavLink} from "react-router-dom";
import React from "react";

const GameNavigation = (props) => {
    return (
        <section>
            <NavLink to={"/*"} onClick={props.newGame}>НАЧАТЬ СНАЧАЛА</NavLink>
            <NavLink to={"/chooseOpponent"}>ВЫХОД</NavLink>
        </section>
    )
}

export default GameNavigation