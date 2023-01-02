import style from "./profile.module.css";
import Article from "./article";

export default (props) => {

    let renderedArticles = props.articles.map( (ele) => {return <Article article={ele}/>;})
    // debugger;
    return (
    <div className={style.container}>
        <div className={style.info}>
            User's name : {props.user.username} <br/>
            Balance : {props.user.tokens} tokens
        </div>
        <div className={style.articles}>
            {renderedArticles}
        </div>
    </div>)
}
