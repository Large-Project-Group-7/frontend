import pfp from '../public/pfp.svg';
import style from '../styles/Profile.module.css';
import { useState } from 'react';
import Popup from './Popup';
import '../styles/background.css'

export default function Profile() {
    const [clicked, setClicked] = useState(false);

    function popUp() {
        setClicked(!clicked);
    }

    return (
        <div className={style.container}>
            <img src={pfp} alt='profile pic' onClick={popUp}
               className={style.profile}/>
            {clicked && <Popup />}
        </div>
    )
}