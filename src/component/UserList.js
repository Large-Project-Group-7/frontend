import style from '../styles/UserList.module.css';
import { Link } from 'react-router-dom';

export default function UserList(props) {
    let containers = [];

    let styleLink = {
        background: "#D9D9D9",
        width: "90%",
        height: "100px",
        fontStyle: "italic",
        fontWeight: "200",
        fontSize: "40px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        cursor: "pointer",
        textDecoration: 'none',
        color: 'black',
    }
    for (let i = 0; i < props.count; i++) {
        containers.push(
            <div className={style.box} key={i}>
                <Link to={`/Profile/${props.users[i]._id}`} style={styleLink}>
                    <div className={style.innerBox}>
                        <img className={style.image} src="https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg"
                             alt="profile"/>
                        <p>{props.users[i].username}</p>
                        <p> {props.users[i].reviewCount} Reviews</p>
                    </div>
                </Link>
            </div>
        )
    }

    return(
        <div className={style.container}>
            {containers}
        </div>
    )
}