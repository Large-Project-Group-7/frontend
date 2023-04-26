import style from '../styles/Banner.module.css';
import booksImage from '../public/books.png';
import menuImage from '../public/ListButton.png';
import searchImage from '../public/SearchIcon.svg';
import Profile from './Profile';
import { Link } from 'react-router-dom';

import useCheckMobileScreen from './mobile_exclusives/CheckMobile';

//import MediaQuery from 'react-responsive' // npm install react-responsive

export const Banner = (props) => {
    const isMobile = useCheckMobileScreen();
    const LinkStyle = {
        textDecoration: 'none',
    }
    if(!isMobile) // instead of <MobileMedia> from reactive-package
    {
        return (
                <div className={style.color}>
                    <div className={style.test}>
                        <Link to='/Home'>
                            <img src={booksImage} className={style.icon} alt='books'/>
                        </Link>
                        <Link to='/Home'>
                            <h2 className={style.left} id='title'>Book Raiders</h2>
                        </Link>
                        <Profile />
                    </div>
                    <div className={style.RContainer}>
                        <Link to='/Books' style={LinkStyle}>
                            <h2  id="left" className={style.right}>Books</h2>
                        </Link>
                        <Link  to='/Users' style={LinkStyle}>
                            <h2 className={style.right}>Community</h2>
                        </Link>
                        <input type='search'
                        placeholder='Search Books' className={style.search}/> 
                    </div>   
                </div>
        )
    }
    return (
        /*Mobile media */
            <div>
                <div id="color" className={style.color}>
                    <div id="inline">
                        <button className={style['menu-pop-in']} onClick={() => props.onFormSwitch('popup')}> 
                            <img src={menuImage}  alt='Menu'/>
                        </button>
                        <button className={style['home-page-button']}> 
                            <img src={booksImage} className={style['mobile-icon']} alt='Books' onClick={() => props.onFormSwitch('home')}/>
                        </button>
                        <button id="" className={style['search-icon']} onClick={() => props.onFormSwitch('searchBook')}> 
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

                    #color {
                        margin-bottom: 24px;
                    }
                `}
                </style>    
                </div>
                
                    
                </div>
        )
}