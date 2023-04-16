import style from '../styles/Banner.module.css';
import booksImage from '../public/books.png';
import menuImage from '../public/ListButton.png';
import searchImage from '../public/SearchIcon.svg';
import Profile from './Profile';

import useCheckMobileScreen from './CheckMobile';

//import MediaQuery from 'react-responsive' // npm install react-responsive

export default function Banner() {
    const isMobile = useCheckMobileScreen();
    if(!isMobile) // instead of <MobileMedia> from reactive-package
    {
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
    return (
        /*Mobile media */
            <div>
                <div className={style.color}>
                    <div id="inline">
                        <button className={style['menu-pop-in']}> 
                            <img src={menuImage}  alt='Menu'/>
                        </button>
                        <img src={booksImage} className={style['mobile-icon']} alt='Books'/>
                        <button className={style['search-icon']}> 
                            <img src={searchImage}  alt='Search'/>
                        </button>
                    </div>
                <style jsx='true'>{`
                    #inline {
                        display: flex;
                        justify-content: center;
                        height: 64px;
                        min-width: 315px;
                    }
                `}
                </style>    
                </div>
                
                    
                </div>
        )
}