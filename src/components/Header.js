import style from "../CSSes/Header.module.css";
import {NavLink} from "react-router-dom";
import processState from "./contents/QuickSort/ProcessState";
import but from "./contents/QuickSort/quicky.module.css";
import st from "./contents/QuickSort/implementation.module.css";
import {gameStarter} from "./contents/QuickSort/quicky";

const Header = (props) => {

     let arrayOfEvents = [];
     for(let key in props.events) {
         arrayOfEvents.push(<div key={key}> {props.events[key]} </div>)
     }
    const renderRestartButton = () => {
        // console.log(processState)
        if(processState.gameIsOn === true) {
            return (
                <div>
                    <button className={but.Start + " " + st.restart} onClick={gameStarter}> Restart </button>
                </div>);
        }
    }
    console.log(processState)
    return(
        <div className={style.container}>
            {renderRestartButton()}
        </div>
    );
}

export default Header;
