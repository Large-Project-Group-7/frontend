import style from '../styles/Cover.module.css'
import { Link } from 'react-router-dom';

export default function Cover(props) {
    let covers = [];
    for (let i = 0; i < props.count; i++) {
        covers.push(
            <Link to='/Book' key={i}> 
                <img src={props.src}
                alt='books cover' className={style.cover}/>
            </Link>
        );
    }

    return covers

}