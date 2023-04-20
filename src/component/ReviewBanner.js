import style from '../styles/ReviewBanner.module.css';
import Stars from '../component/Stars';

export default function ReviewBanner(props) {
    return (
        <div className={style.container}>
            <p className={style.text}>Bob Marley</p>
            <Stars rating={4}/>
            <p className={style.pub}>04/06/2023</p>
        </div>
    )
}