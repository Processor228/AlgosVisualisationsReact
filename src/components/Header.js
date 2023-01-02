import style from "../CSSes/Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {

     let arrayOfEvents = [];
     for(let key in props.events) {
         arrayOfEvents.push(<div key={key}> {props.events[key]} </div>)
     }

    return(
        <div className={style.container}>
            <div className={style.events}>
                {arrayOfEvents}
            </div>
            <div className={style.person}>
                <div className={style.userInfo}>
                    {props.person.username}
                    <br/>
                    Tokens : {props.person.tokens}
                </div>
                <div className={style.socialSection}>
                    <div className={style.edit}>
                        <NavLink to="/profile/" className={style.link}>
                            Profile
                        </NavLink>
                    </div>
                    <div className={style.profile}>
                        <NavLink to="/profile/edit" className={style.link}>
                            Edit
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
