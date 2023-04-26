import { Banner } from '../component/Banner';
import Cover from '../component/Cover';
import style from '../styles/AddReview.module.css';
import { useState } from 'react';
import Rating from '../component/Rating';

import useCheckMobileScreen from '../component/mobile_exclusives/CheckMobile';

export const AddReview = (props) => {
    const isMobile = useCheckMobileScreen();
    const [text, setText] = useState('')
    const [rating, setRating] = useState(0);
    const [flag, setFlag] = useState(false);

    const handleRatingChange = (newRating) => {
        if (newRating !== rating) {
            setRating(0);
            setFlag(false)
        } else {
            setFlag(true)
            setRating(newRating);
        }
    };

    if(!isMobile) 
    {
        return (
            <div className={style.whole}>
                <Banner />
                <div className={style.container}>
                    <div className={style.cover}>
                        <Cover count={1} src='https://m.media-amazon.com/images/I/51mtQ9IE+GL._SX331_BO1,204,203,200_.jpg'/>
                    </div>
                    <div className={style.text}>
                        <p>Title: Y / N</p>
                    </div>
                    <button className={style.button}>Back to Book</button>
                    <div>
                        <form className={style.form}>
                            <div className={style.ratingContainer}>
                                <p className={style.rating}>Rating:</p>
                                <Rating rating={rating} flag={flag} setRating={setRating} setFlag={setFlag}
                                  handleRatingChange={handleRatingChange}
                                />
                            </div>
                            <textarea name='review'
                                className={style.review}
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder='Review...'
                            ></textarea>
                            <div>
                                <button className={style.publish}>Publish</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Banner {...props}/>
            <div id={style.startmobile}></div>
            <div className={style.covermobile}>
                <Cover count={1} src='https://m.media-amazon.com/images/I/51mtQ9IE+GL._SX331_BO1,204,203,200_.jpg'/>
            <div className={style.titlemobile}>
                <p>Title:</p>
                <p>Y / N</p>
            </div>
            </div>
            <div className={style.summarymobile}>
                <p><b>Summary: </b> お前はもう死んでいる。何？キーーーーン</p>
            </div>
            <div id={style.startmobile} ></div>
            <div className={style.text}>
                <p><b>Review Text</b></p>
            </div>
            <div className={style.ratingContainerMobile}>
                <p className={style.ratingmobile}>Rating:</p>
                <Rating rating={rating} flag={flag} setRating={setRating} setFlag={setFlag}
                    handleRatingChange={handleRatingChange}
                />
            </div>
            <textarea name='review'
                className={style.reviewmobile}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Review...'
            ></textarea>
            <div>
                <button className={style.publishmobile}><b>Publish</b></button>
            </div>
            <div>
                <button className={style.backButtonMobile}>Back to Book</button>
            </div>
        </div>
    )
} 