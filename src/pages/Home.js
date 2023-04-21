import { Banner } from '../component/Banner';
import style from '../styles/Home.module.css';
import add from '../public/add.svg';
import Recent from '../component/Recent';
import BooksList from '../component/BooksList';
import ForegroundBox from '../component/mobile_exclusives/ForegroundBox';
import PerBookBox from '../component/mobile_exclusives/PerBookBox';

import useCheckMobileScreen from '../component/mobile_exclusives/CheckMobile';

export const Home = (props) => {
    const isMobile = useCheckMobileScreen();
    if(!isMobile) // instead of <MobileMedia> from reactive-package
    {
        return (
        <div className={style.container}>
            <Banner/>
                <div>
                    <h1 className={style.title}>Books</h1>
                    <img className={style.add} src={add} alt='add button'/>
                </div>
                <div>
                    <BooksList count={7}/>
                    <Recent />
                </div>
            
        </div>
    )}
    return (
        <div>
            <Banner {...props}/>
            <ForegroundBox>
                <button id='recent'>Recent</button>
                <button id='my-books'>My Books</button>
                <button id='add'>+</button>
                <div id='start'></div>
                <div className={style['break']}></div>
                <PerBookBox />
                <div className={style['break']}></div>
                <PerBookBox />
                <div className={style['break']}></div>
                <PerBookBox />
                <div className={style['break']}></div>
                <PerBookBox />
                <div className={style['break']}></div>
                <PerBookBox />
            </ForegroundBox>
        </div>
    )
}