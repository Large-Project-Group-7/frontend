import { Banner } from '../component/Banner';
import '../styles/background.css';
import ForegroundBox from '../component/mobile_exclusives/ForegroundBox';
import PerBookBox from '../component/mobile_exclusives/PerBookBox';
import PerUserBox from '../component/mobile_exclusives/PerUserBox';
import style from '../styles/Home.module.css';

import useCheckMobileScreen from '../component/mobile_exclusives/CheckMobile';

export const Search = (props) => {
    const isMobile = useCheckMobileScreen();
    if(!isMobile)
    {
        return (
        <div>
        </div>
    )}
    return (
        <div>
            <Banner  {...props}/>
            <ForegroundBox>
                <input className='search-bar' placeholder='Search by: Username/Book Name'>
                </input>
                <div className={style['break']}></div>
                <PerBookBox />
                <div className={style['break']}></div>
                <PerBookBox />
                <div className={style['break']}></div>
                <PerUserBox />
            </ForegroundBox>
            <style jsx='true'>{`
            .search-bar {
                margin-top: 10px;
                margin-bottom: -2px;
                width: 320px;
                height: 60px;
                margin-left: calc(50% - 162px);
                font-size: 18px;
            }

            .search-bar::placeholder {
                font-size: 18px;
            }
            `}
            </style>
        </div>
    )
}