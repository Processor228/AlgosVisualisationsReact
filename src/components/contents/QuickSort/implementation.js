import style from "./implementation.module.css";
import processState from "./ProcessState";
import styleForButton from "./quicky.module.css";
import {gameStarter} from "./quicky";

const Number = (props) => {
    return (
        <div className={style.quantity} style={{
            backgroundColor: props.color,
            height: Math.floor(props.value / props.maxElement * 100) + "%"
        }} key={props.id}>{props.value}</div>
    );
}

const Pivot = (props) => {
    return (
        <div className={style.emphasisPivot} style={{
            backgroundColor: props.color,
            height: Math.floor(props.value / props.maxElement * 100) + "%"
        }} key={props.id}>{props.value}</div>
    );
}

const Compared = (props) => {
    return (
        <div className={style.emphasisCompared} style={{
            backgroundColor: props.color,
            height: Math.floor(props.value / props.maxElement * 100) + "%"
        }} key={props.id}>{props.value}</div>
    );
}

export default (props) => {
    let toDisplay = [];
    let arr = []
    for (let i = 0; i < props.array.length; i++) {
        arr.push(props.array[i].value);
    }
    let maxElement = Math.max.apply(Math, arr);
    let id=0;
    for (let element in props.array) {
        if(id === processState.action.idxP || id === processState.action.index1 || id === processState.action.index2) {
            switch (processState.action.type) {
                case "Chos":
                    toDisplay.push(<Pivot maxElement={maxElement} color={props.array[id].color} id={id} value={props.array[id].value}/>);
                    break;
                case "Swap":
                    if (id === processState.action.idxP) {
                        toDisplay.push(<Pivot maxElement={maxElement} color={props.array[id].color} id={id} value={props.array[id].value}/>);
                    } else
                    toDisplay.push(<Compared maxElement={maxElement} color={props.array[id].color} id={id} value={props.array[id].value}/>);
                    break;
                case "Comp":
                    if (id === processState.action.idxP) {
                        toDisplay.push(<Pivot maxElement={maxElement} color={props.array[id].color} id={id} value={props.array[id].value}/>);
                    } else
                    toDisplay.push(<Compared maxElement={maxElement} color={props.array[id].color} id={id} value={props.array[id].value}/>);
                    break;
            }
        } else {
            toDisplay.push(<Number maxElement={maxElement} color={props.array[id].color} id={id} value={props.array[id].value}/>);
        }
        id++;
    }
    return(
        <div style={{height: "100%", width: "100%"}}>
            <div className={style.container}>
                {toDisplay}
            </div>
            {/*{renderRestartButton()}*/}
        </div>


    );
}
