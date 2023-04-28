import { Banner } from '../component/Banner';
import ForegroundBox from '../component/mobile_exclusives/ForegroundBox';
import PerUserBox from '../component/mobile_exclusives/PerUserBox';
import style from '../styles/Home.module.css';
import UserList from '../component/UserList';
//import { useState } from 'react';
import { Link } from 'react-router-dom';

import useCheckMobileScreen from '../component/mobile_exclusives/CheckMobile';

// Made it a seperate page because the non-paged component changing used onform which has been phased out in favor of <Link>
// Instead of solving the issue imma take the lazy route that saves me time because there is next to no difference

export const SearchUser = (props) => {
    const isMobile = useCheckMobileScreen();
    //const [loadingData, setLoadingData] = useState(true);
    const loadingData = true;
    //const [data, setData] = useState([]);
    const data = true;

    if(!isMobile)
    {
        return (
        <div className={style.test}>
            <Banner />
            <UserList count={7}/>
        </div>
    )}

    let containers = []
    for (let i = 0; i < 0; i++){ // change to constant (5?) when searching is implemented
        //console.log(loadingData1,loadingData2,loadingData3,loadingData4,loadingData5);
        const content = loadingData ? '...loading' : <PerUserBox book = {data[i]}/>;
        containers.push(
        <>
            <div className={style['break']}></div>
            {content}
        </>
        )
    }
    return (
        <div>
            <Banner  {...props}/>
            
            <ForegroundBox>
                <Link to='/Users'>
                    <button className='sort' > 
                        Sort
                    </button>
                </Link>
                <input className='search-bar' placeholder='Search by: Username'>
                </input>
                <div className={style.mobileContainer}>{containers}</div>
            </ForegroundBox>
            <style jsx='true'>{`
            .search-bar {
                margin-top: 21px;
                margin-bottom: -2px;
                width: 240px;
                height: 60px;
                margin-left: calc(50% - 92px);
                font-size: 18px;
            }

            .search-bar::placeholder {
                font-size: 18px;
            }

            .sort {
                position: absolute;
                width: 48px;
                height: 48px;
                top: 84px;
                left: 9%;
                z-index: 2;
            }
            `}
            </style>
        </div>
    )
}