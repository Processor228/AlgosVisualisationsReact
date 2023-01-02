import style from "./article.module.css"

export default (props) => {

    return(
        <div className={style.container}>
            <div className={style.title}>
                <p>
                    {props.article.Theme}, Date: {props.article.Date}
                </p>
            </div>
            <div className={style.content}>
                {props.article.Content}
            </div>

            <div className={style.comments}>
                {/*{props.article.Comments}*/}
            </div>

        </div>);
}

