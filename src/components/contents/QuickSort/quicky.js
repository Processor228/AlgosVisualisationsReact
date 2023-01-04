import style from "./quicky.module.css"
import Implementation from "./implementation";
import gameState from "./ProcessState";
import rerender from "../../../rerender";
import {typesOfActions} from "./ProcessState";
import rerenderImplementation from "./rerenderImplementation";
import {createRef} from "react";

const colors = [
    "green",
    "yellow",
    "red",
    "white",
    "blue",
    "orange",
]

export const gameStarter = () => {
    gameState.gameIsOn = true;
    gameState.numbers = [];
    for(let i=0; i<20; i++) {
        let colorChoose = Math.floor(Math.random() * (colors.length));
        gameState.numbers.push({value: Math.ceil(Math.random() * 100), color: colors[colorChoose]});
    }
    rerender();
    gamer(gameState)
}
const quickSortHelper = async (array, l, r) => {
    if (l >= r) return;

    let pivot = Math.floor((l + r) / 2);
    await showTheStep(typesOfActions.ChooseOfPivot.create(pivot));

    let start = l;
    let end = r;
    let pivotValue = array[pivot].value;

    while (l < r) {
        await showTheStep(typesOfActions.Comparison.create(l, r, pivot));
        if (array[l].value >= pivotValue && pivotValue >= array[r].value) {
            if(l === pivot) {
                pivot = r;
            }
            else {
                if(r === pivot) {
                    pivot = l;
                }
            }
            [array[r], array[l]] = [array[l], array[r]];
            r--;
            l++;
            await showTheStep(typesOfActions.Swapping.create(l, r, pivot));
        }
        if (array[r].value > pivotValue) r -= 1;
        if (array[l].value < pivotValue) l += 1;
    }
    while (array[r].value > pivotValue) {
        r--;
        await showTheStep(typesOfActions.Comparison.create(r, pivot, pivot));
    }

    await quickSortHelper(array, start, r);
    await quickSortHelper(array, r + 1, end);
}
const gamer = (state) => {
    quickSortHelper(state.numbers, 0, state.numbers.length-1);
    rerenderImplementation();
    // gameState.gameIsOn = false;
}
const showTheStep = async (action) => {
    await sleep(10);
    gameState.action = action;
    console.log(window.location.pathname === "/content/quick");
    if(window.location.pathname === "/content/quick") {
        // TODO rerender only if the route is corresponding
        rerenderImplementation();
    }

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const quickSortImplementation = () => {

    const game = () => {
        console.log(gameState)
        if(gameState.gameIsOn) {
            return (<Implementation array={gameState.numbers}/>)
        } else {
            return (<button className={style.Start} onClick={gameStarter}> Start </button>);
        }
    }

    let contref = createRef();

    return(
    <div className={style.container} ref={contref}>
        {game()}
    </div>);
}

export default quickSortImplementation;