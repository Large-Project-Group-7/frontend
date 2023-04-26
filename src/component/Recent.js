import style from '../styles/Recent.module.css';
import Cover from '../component/Cover';

export default function Recent() {
    return(
        <div className={style.inline}>
            <h1 className={style.text}>Recent</h1>
            <div className={style.container}>
                <div className={style.cover}>
                        <Cover count={2} src='https://m.media-amazon.com/images/I/51mtQ9IE+GL._SX331_BO1,204,203,200_.jpg'/>
                </div>
            </div>
        </div>
    )
}