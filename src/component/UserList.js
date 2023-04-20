import style from '../styles/UserList.module.css';

export default function UserList(props) {
    let containers = [];
    for (let i = 0; i < props.count; i++) {
        containers.push(
            <div className={style.box}>
                <div className={style.innerBox}>
                    <p>PFP here</p>
                    <p>User Name</p>
                    <p> #Reviews</p>
                </div>
            </div>
        )
    }

    return(
        <div className={style.container}>
            {containers}
        </div>
    )
}