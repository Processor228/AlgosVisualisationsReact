import style from "./quicky.module.css"
import Implementation from "./implementation";
import gameState from "./ProcessState";
import rerender from "../../../rerender";
import {typesOfActions} from "./ProcessState";
import rerenderImplementation from "./rerenderImplementation";

const colors = [
    "green",
    "yellow",
    "red",
    "white",
    "blue",
    "orange",
]

const quickSortImplementation = () => {

    const isSorted = (array) => {
        for(let i=1; i < array.length; i++) {
            if (array[i-1].value > array[i].value) {
                return false
            }
        }
        return true;
    }

    const showTheStep = async (action) => {
        await sleep(10);
        gameState.action = action;
        // debugger
        rerenderImplementation();
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const quickSortHelper = async (array, l, r) => {
        if (l >= r) return;


        let pivot = Math.floor((l + r) / 2);
        await showTheStep(typesOfActions.ChooseOfPivot.create(pivot));
        // debugger

        let start = l;
        let end = r;

        while (l < r) {
            await showTheStep(typesOfActions.Comparison.create(l, r));
            // debugger
            if (array[l].value > array[pivot].value && array[pivot].value > array[r].value) {
                [array[r], array[l]] = [array[l], array[r]];
                await showTheStep(typesOfActions.Swapping.create(l, r));
            }
            if (array[r].value >= array[pivot].value) r -= 1;
            if (array[l].value <= array[pivot].value) l += 1;
        }
        [array[pivot], array[r]] = [array[r], array[pivot]];
        await showTheStep(typesOfActions.Swapping.create(r, pivot));

        await quickSortHelper(array, start, r);
        await quickSortHelper(array, r + 1, end);
    }

    const gamer = (state) => {
        quickSortHelper(state.numbers, 0, state.numbers.length-1);
        gameState.gameIsOn = false;
        // debugger
    }

    const game = () => {
        if(gameState.gameIsOn) {
            return (<Implementation array={gameState.numbers}/>)
        } else {
            return (<button className={style.Start} onClick={gameStarter}> Start </button>);
        }
    }

    const gameStarter = () => {
        let state = gameState;
        state.gameIsOn = true;
        for(let i=0; i<20; i++) {
            let colorChoose = Math.floor(Math.random() * (colors.length));
            gameState.numbers.push({value: Math.ceil(Math.random() * 100), color: colors[colorChoose]});
        }
        rerender();
        gamer(gameState)
    }

    return(
    <div className={style.container}>
        {game()}
    </div>);
}

export default quickSortImplementation;
