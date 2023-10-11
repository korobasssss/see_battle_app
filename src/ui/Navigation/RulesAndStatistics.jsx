import {NavLink} from "react-router-dom";
import reg from "../Registration/Registration.module.css";
import React from "react";

const RulesAndStatistics = () => {
    return (
        <NavLink to={"/rules"} className={reg.buttonNext}>ДАЛЕЕ</NavLink>
    )
}