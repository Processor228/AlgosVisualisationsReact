import style from "../CSSes/menu.module.css";
import {NavLink} from "react-router-dom";

const Menu = () => {
    return(
        <div className={style.container}>
            {/*<Router>*/}
                <NavLink to="/content/quick" className={style.link}>
                    QuickSort Algorithm
                </NavLink>
                <br/>
                <NavLink to="/content/topos" className={style.link}>
                    TopoSort
                </NavLink>
            {/*</Router>*/}
        </div>
    )
}

export default Menu;