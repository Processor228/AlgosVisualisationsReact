import style from "../CSSes/components.module.css"
import {Routes, Route} from "react-router-dom";
import Topos from "../components/contents/TopoSort/topoSort"
import Quicky from "../components/contents/QuickSort/quicky";


const Content = () => {
    return (
        <div className={style.container} id="content">
                <Routes>
                    <Route path="/content/quick" element={<Quicky/>}/>
                    <Route path="/content/topos" element={<Topos/>}/>
                </Routes>
        </div>
    );
}

export default Content;