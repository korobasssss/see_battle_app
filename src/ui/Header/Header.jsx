import anchor from "../../../../see_battle_app/src/images/anchor.png"
import React from "react";
import h from "./Header.module.css"
const Header = () => {
    return (
        <header className={h.header}>
            <img src={anchor} alt="anchor"/>
            МОРСКОЙ БОЙ
            <img src={anchor} alt="anchor"/>
        </header>
    )
}

export default Header;