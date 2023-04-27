import style from '../styles/BooksList.module.css';
import Cover from '../component/Cover';
import star from '../public/Star.svg';

export default function BooksList(props) {
    let containers = []
    for (let i = 0; i < props.books.length; i++){
        containers.push(
        <div className={style.booksContainer} key={i}>
            <div className={style.coverContainer}>
                <Cover count={1} src={props.books[i].cover}/>
            </div>
            <p id={style.title}>{props.books[i].title}</p>
            <p id={style.author}>Author: {props.books[i].author[0]}</p>
            <p id={style.publisher}>Publisher: {props.books[i].publisher}</p>
            <p id={style.pages}>{props.books[i].pages} Pages</p>
            <p id={style.pub}>Date Published: {props.books[i].date}</p>
            <img id={style.star} src={star} alt='rating star'/>
            <p id={style.rating}>4/5</p>
        </div>
        )
    }
    return <div className={style.container}>{containers}</div>
}