
import useCheckMobileScreen from '../component/mobile_exclusives/CheckMobile';
import { Banner } from '../component/Banner';
import { ProfilePicture } from '../component/ProfilePicture';
import style from '../styles/ProfilePage.module.css';
import { ReviewList } from '../component/ReviewList';

export const ProfilePage = (props) => {
    const isMobile = useCheckMobileScreen();
    if (!isMobile) {
        return (
            <div>
                <Banner />
                <div className={style.container}>
                    <div className={style.topContainer}>
                        <div className={style.user}>
                            <div className={style.picture}>
                                <ProfilePicture />
                            </div>
                            <div className={style.userInfo}>
                                <p className={style.userText}>Username</p>
                                <p className={style.userText}>Writte # reviews</p>
                            </div>
                        </div>
                        <div className={style.add}>
                            <input type='search'
                            placeholder='Search Reviews' className={style.search}/>
                        </div>
                    </div>
                    <div className={style.bottomContainer}>
                        <div className={style.reviewText}>
                            <p className={style.reviewStyle}>Reviews</p>
                        </div>
                        <div className={style.reviews}>
                            <ReviewList count={2}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>

        </div>
    )
}