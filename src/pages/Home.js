import Banner from '../component/Banner';
import '../styles/background.css';
import style from '../styles/Home.module.css';
import add from '../public/add.svg';
import Recent from '../component/Recent';
import BooksList from '../component/BooksList';
import ForegroundBox from '../component/ForegroundBox';

import useCheckMobileScreen from '../component/CheckMobile';

export const Home = () => {
    const isMobile = useCheckMobileScreen();
    if(!isMobile) // instead of <MobileMedia> from reactive-package
    {
        return (
        <div>
            <Banner />
                <div>
                    <h1 className={style.title}>Books</h1>
                    <img className={style.add} src={add} alt='add button'/>
                </div>
                <div>
                    <Recent />
                    <BooksList count={7}/>
                </div>
            
        </div>
    )}
    return (
        <div> {/*rn everything on mobile is shoved in banner, will work on this tmrw*/ }
            <Banner />
                <div>
                    <ForegroundBox />
                </div>
                
        </div>
    )
}