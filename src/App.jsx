import React from "react";
import Logo from "./assets/logo.svg";
import {getColor, getTextColor, getNumber} from "./function";
import Card from "./Card.jsx";
import Box from "./Box";


// const n = getNumber(100);
// console.log(n);
// console.log(getColor());
// console.log(invert(getColor()));
// console.log(getTextColor(getColor()));

export default () => {
    return <>
        <h1>
            Simple React App
            <img src={Logo} alt="React"/>
        </h1>
        <Box/>
    </>
}
