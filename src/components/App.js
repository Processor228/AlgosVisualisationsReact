import style from "../CSSes/app.module.css"
import Header from "./Header";
import Menu from "./menu";
import Cont from "./content";
import Footer from "./footer";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Profile from "./profile/profile";
import Edit from "./profile/edit";
import State from "../state";

const App = () => {

    return (
        <div className={style.container}>
            <BrowserRouter>
                <Header events={State.globalEvents} person={State.user}/>
                <div className={style.columned + " " + style.item}>
                        <div className={style.menuHandler}>
                            <Menu/>
                        </div>
                        <div className={style.contenter}>
                            <Routes>
                                <Route path="*" element={<Cont/>}/>
                            </Routes>
                        </div>

                </div>
            </BrowserRouter>
            <div className={style.footer}>
                <Footer/>
            </div>

        </div>
    );
}

export default App;
