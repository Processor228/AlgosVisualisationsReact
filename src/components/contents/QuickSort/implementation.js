import style from "./implementation.module.css"
import processState from "./ProcessState";
export default (props) => {

    let toDisplay = [];
    let arr = []
    for (let i = 0; i < props.array.length; i++) {
        arr.push(props.array[i].value);
    }
    let maxElement = Math.max.apply(Math, arr);
    let id=0;
    for (let element in props.array) {
        // if(processState.action.type === "Chos" && processState.action.index === id){
        //     toDisplay.push(<div className={style.emphasis} style={{
        //         backgroundColor: props.array[id].color,
        //         height: Math.floor(props.array[id].value / maxElement * 100) + "%"
        //     }} key={id}>{props.array[id].value}</div>)
        // }
        toDisplay.push(<div className={style.quantity} style={{
            backgroundColor: props.array[id].color,
            height: Math.floor(props.array[id].value / maxElement * 100) + "%"
        }} key={id}>{props.array[id].value}</div>)
        id++;
    }
    return(
      <div className={style.container}>
          {toDisplay}
      </div>
    );
}
