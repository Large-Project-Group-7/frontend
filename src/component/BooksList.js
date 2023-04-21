import style from '../styles/BooksList.module.css';
import Cover from '../component/Cover';
import star from '../public/Star.svg';

export default function BooksList(props) {
    let containers = []
    for (let i = 0; i < props.count; i++){
        containers.push(
        <div className={style.booksContainer} key={i}>
            <div className={style.coverContainer}>
                <Cover count={1} src='https://m.media-amazon.com/images/I/51mtQ9IE+GL._SX331_BO1,204,203,200_.jpg'/>
            </div>
            <p id={style.title}>Y / N</p>
            <p id={style.author}>Author: Esther Yi</p>
            <p id={style.publisher}>Publisher: Astra House</p>
            <p id={style.pages}>244 Pages</p>
            <p id={style.pub}>Date Published: March 21, 2023</p>
            <img id={style.star} src={star} alt='rating star'/>
            <p id={style.rating}>4/5</p>
        </div>
        )
    }
    return <div className={style.container}>{containers}</div>
}