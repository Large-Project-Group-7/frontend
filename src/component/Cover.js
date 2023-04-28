import style from '../styles/Cover.module.css'
import { Link } from 'react-router-dom';

export default function Cover(props) {
    let covers = [];
    for (let i = 0; i < props.count; i++) {
        const path =`/Book/${props.userID}/${props._id}/`

        covers.push(
            <Link to={path} key={i}> 
                <img src={props.src}
                alt='books cover' className={style.cover}/>
            </Link>
        );
    }

    return covers

}