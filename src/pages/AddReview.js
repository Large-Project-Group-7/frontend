import { Banner } from '../component/Banner';
import Cover from '../component/Cover';
import style from '../styles/AddReview.module.css';
import { useState } from 'react';
import Rating from '../component/Rating';

import useCheckMobileScreen from '../component/mobile_exclusives/CheckMobile';

export const AddReview = (props) => {
    const isMobile = useCheckMobileScreen();
    const [text, setText] = useState('')

    if(!isMobile) 
    {
        return (
            <div className={style.whole}>
                <Banner />
                <div className={style.container}>
                    <div className={style.cover}>
                        <Cover count={1}/>
                    </div>
                    <div className={style.text}>
                        <p>Title: Y/N</p>
                    </div>
                    <button className={style.button}>Back to Book</button>
                    <div>
                        <form className={style.form}>
                            <div>
                                <p className={style.rating}>Rating:</p>
                                <Rating />
                            </div>
                            <textarea name='review'
                                className={style.review}
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder='Review...'
                            ></textarea>
                            <button className={style.publish}>Publish</button>
                        </form>
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