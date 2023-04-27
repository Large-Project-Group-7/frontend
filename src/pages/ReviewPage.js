import useCheckMobileScreen from '../component/mobile_exclusives/CheckMobile';
import { Banner } from '../component/Banner';
import style from '../styles/ReviewPage.module.css'
import Cover from '../component/Cover';
import star from '../public/Star.svg';
import { Link } from 'react-router-dom';

export const ReviewPage = (props) =>  {
    const isMobile = useCheckMobileScreen();
    const LinkStyle = {
        textDecoration: 'none',
    }
    if (!isMobile) 
    {
        return (
            <div>
                <Banner />
                <div className={style.container}>
                    <div className={style.left}>
                        <div className={style.info}>
                            <div className={style.bookInfo}>
                                <div className={style.cover}>
                                    <Cover count={1} src={'https://m.media-amazon.com/images/I/51Ro3ZnKkgL._SX327_BO1,204,203,200_.jpg'}/>
                                </div>
                                <h2>Book Title</h2>
                                <h3>Book author</h3>
                                <h3>ISBN</h3>
                            </div>
                            <div className={style.rateInfo}>
                                <div className={style.rating}>
                                    <img id={style.star} src={star} alt='rating star'/>
                                    <p className={style.number}>2/5</p>
                                </div>
                                <p className={style.username}>By USERNAME</p>
                            </div>
                        </div>
                        <Link to='/Book' style={LinkStyle}>
                        <div className={style.buttonCont}>
                                <button className={style.button}>Edit</button>
                        </div>
                        </Link>
                    </div>
                    <div className={style.right}>
                        <textarea className={style.review}></textarea>
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