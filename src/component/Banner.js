import styles from '../styles/Banner.module.css'
import booksImage from '../public/books.png';
import Profile from './Profile';

export default function Banner() {
    return (
        <div className={styles.color}>
            <img src={booksImage} className={styles.icon} alt='books'/>
            <h2 className={styles.left} id='title'>Title BGP7</h2>
            <Profile />
            <h2 id="left" className={styles.right}>Books</h2>
            <h2 className={styles.right}>Community</h2>
            <input type='search'
             placeholder='Search Books' className={styles.search}/>
        <style jsx='true'>{`
                #title {
                    padding-left: 90px;
                }
                #left {
                    margin-left: 50%;
                }
        `}
        </style>    
        </div>
    )
}