import { Banner } from '../component/Banner';
import '../styles/background.css';
import ForegroundBox from '../component/mobile_exclusives/ForegroundBox';
import AdminContent from '../component/mobile_exclusives/AdminContent';

import useCheckMobileScreen from '../component/mobile_exclusives/CheckMobile';

export const AdminPanel = (props) => {
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
                <AdminContent/>
            </ForegroundBox>
            <style jsx='true'>{`

            `}
            </style>
        </div>
    )
}