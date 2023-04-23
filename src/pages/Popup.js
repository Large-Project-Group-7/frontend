import { Banner } from '../component/Banner';
import ForegroundBox from '../component/mobile_exclusives/ForegroundBox';

import useCheckMobileScreen from '../component/mobile_exclusives/CheckMobile';

export const Popup = (props) => {
    const isMobile = useCheckMobileScreen();
    if(!isMobile)
    {
        return (
        <div>
            <p>This page is not intended for desktop users! If you're seeing this, logout, and log back in.</p>
        </div>
    )}
    return (
        <div>
            <Banner  {...props}/>
            
            <ForegroundBox>
                <button className='nav-buttons'>
                    <b className='nav-text'>My Reviews</b>
                </button>
                <button className='nav-buttons'>
                    <b className='nav-text'>Books</b>
                </button>
                <button className='nav-buttons'>
                    <b className='nav-text'>Community</b>
                </button>
                <button className='nav-buttons'>
                    <b className='nav-text' onClick={() => props.onFormSwitch('login')}>Logout</b>
                </button>
            </ForegroundBox>
            <style jsx='true'>{`
            .nav-buttons {
                box-sizing: border-box;
                text-align: left;

                margin-top: -1px;
                margin-left: 0px;
                width: 100%;
                height: 54px;
                background: #FFFFFF;
                border: 1px solid #000000;
            }

            .nav-text {

                margin-left: 12px;

                font-style: normal;
                font-weight: 400;
                font-size: 21px;
                line-height: 54px;

                color: #000000;

            }
            `}
            </style>
        </div>
    )
}