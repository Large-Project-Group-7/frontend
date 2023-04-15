import style from '../styles/Popup.module.css'

export default function Popup() {
    return(
        <div className={style.container}>
            <button className={style.review}>My Reviews</button>
            <br />
            <button className={style.logout}>Logout</button>
        </div>
    )
}