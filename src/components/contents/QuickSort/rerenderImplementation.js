import ReactDOM from "react-dom";
import App from "../../App";
import React from "react";
import Implementation from "./implementation";
import Quicky from "./quicky";
import gameState from "./ProcessState";


export default () => {
    ReactDOM.render(<Implementation array={gameState.numbers}/>, document.getElementById("content"));
}
