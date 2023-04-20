import style from '../styles/InfoPopup.module.css';
import close from '../public/close.png';

export default function InfoPopup(props) {
    return (
        <div className={style.container}>
            <img className={style.close} src={close} alt='close button' onClick={props.handleClick}/>
            <p className={style.author}>Author: </p>
            <p className={style.text}>ISBN: </p>
            <p className={style.text}>Publisher: </p>
        </div>
    )
}