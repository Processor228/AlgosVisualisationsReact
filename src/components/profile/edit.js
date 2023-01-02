import style from "./edit.module.css"
import {createRef} from "react";
import rerender from "../../rerender"

export default (props) => {
    const textInput = createRef();

    return (
        <div className={style.container}>
            Edit <br/>
            <textarea defaultValue={props.user.username} ref={textInput} className={style.nameChanger}></textarea>
            <button onClick={()=>{
                props.user.username = textInput.current.value;
                rerender()}
            }>
                Set Profile Name
            </button>
        </div>)
}