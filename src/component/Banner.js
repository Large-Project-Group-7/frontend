import style from '../styles/Banner.module.css'
import booksImage from '../public/books.png';
import Profile from './Profile';

export default function Banner() {
    return (
        <div className={style.color}>
            <div className={style.test}>
                <img src={booksImage} className={style.icon} alt='books'/>
                <h2 className={style.left} id='title'>Title BGP7</h2>
                <Profile />
            </div>
            <div className={style.RContainer}>
                <h2 id="left" className={style.right}>Books</h2>
                <h2 className={style.right}>Community</h2>
                <input type='search'
                placeholder='Search Books' className={style.search}/> 
            </div>   
        </div>
    )
}