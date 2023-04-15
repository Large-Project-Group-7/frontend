import style from '../styles/Cover.module.css'

export default function Cover(props) {
    let covers = [];
    for (let i = 0; i < props.count; i++) {
        covers.push(
            <img src='https://m.media-amazon.com/images/I/51mtQ9IE+GL._SX331_BO1,204,203,200_.jpg'
            alt='books cover' key={i} className={style.cover}/>
        );
    }

    return covers

}