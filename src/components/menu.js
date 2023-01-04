import style from "../CSSes/menu.module.css";
import {NavLink} from "react-router-dom";

const Menu = () => {
    return(
        <div className={style.container}>
            {/*<Router>*/}
                <a href="/content/quick" className={style.link}>
                    QuickSort Algorithm
                </a>
                <br/>
                <a href="/content/topos" className={style.link}>
                    TopoSort
                </a>
            {/*</Router>*/}
        </div>
    )
}

export default Menu;