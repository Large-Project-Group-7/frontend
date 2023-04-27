import style from '../styles/ReviewList.module.css';
import Cover from '../component/Cover';
import Reviews from '../component/Reviews';

export const ReviewList = (props) => {
    let container = [];
    for(let i = 0; i < props.count; i++) {
        container.push(
            <div className={style.container} key='i'>
                <div className={style.book}>
                    <p className={style.title}>The Great Gatsby</p>
                    <div className={style.cover}>
                        <Cover count={1} src='https://m.media-amazon.com/images/I/41JFqILaXyL._SX326_BO1,204,203,200_.jpg'/>
                    </div>
                </div>
                <div className={style.review}>
                    <Reviews count={1}/>
                </div>
            </div>
        )
    }

    return (
        container
    )
}