import { useState } from 'react';
import style from '../styles/Rating.module.css'

export default function Rating() {

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

    const stars = [];
    // This is kind of complicated and i'm sure there is maybe a better to do this
    // but this is basically how to make the stars filled up with yellow and representing the rating
    for(let i = 1; i <= 5; i++) {
        let starClass ='star';
        if (i <= rating) {
            starClass += ' filled';
        }
        if(flag) {
            if(starClass !== 'star') {
                stars.push(
                    <span
                        key={i}
                        className={style.test}
                        onClick={() => handleRatingChange(i)}
                    >   
                    ★
                    </span>
                );
            }
            else {
                stars.push(
                    <span
                      key={i}
                      className={style.star}
                      onClick={() => handleRatingChange(i)}
                    >
                       ★
                    </span>
                );
            }
        }
        else {
            if(starClass !== 'star') {
                    stars.push(
                    <span
                         key={i}
                         className={style.test}
                         onClick={() => handleRatingChange(i)}
                         onMouseEnter={() => setRating(i)}
                          onMouseLeave={() => setRating(0)}
                    >   
                       ★
                    </span>
                );
            }
            else {
                stars.push(
                    <span
                      key={i}
                      className={style.star}
                      onClick={() => handleRatingChange(i)}
                      onMouseEnter={() => setRating(i)}
                      onMouseLeave={() => setRating(0)}
                    >
                       ★
                    </span>
                );
            }
        }
    }

    return (
        <div className={style.stars}>
            {stars}
        </div>
    )
}