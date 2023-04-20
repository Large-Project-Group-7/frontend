import style from '../styles/Cover.module.css'

export default function Cover(props) {
    let covers = [];
    for (let i = 0; i < props.count; i++) {
        covers.push(
            <img src={props.src}
            alt='books cover' key={i} className={style.cover}/>
        );
    }

    return covers

}