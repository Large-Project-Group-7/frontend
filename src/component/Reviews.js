import style from '../styles/Reviews.module.css';
import ReviewBanner from '../component/ReviewBanner';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Reviews(props) {
    const [reviewsData,setReviewData] = useState([]);

    const LinkStyle = {
        textDecoration: 'none',
        color: 'black'
    }

    useEffect(() => {
        async function getReviewsData() {
            // eslint-disable-next-line array-callback-return
            const reviewPromises = props.reviews.map((reviewID) => {
                return fetch(`http://localhost:3001/reviews/${reviewID}`)
                .then(response => response.json())
            });
            const reviewsData = await Promise.all(reviewPromises);
            console.log('Im after promieses.all')
            console.log(`This is the reviews data: ${reviewsData}`)
            setReviewData(reviewsData);
        }
        getReviewsData();
    }, [props.reviews])

    const reviews = reviewsData.slice(
        4 * (props.currentPage - 1),
        4 * props.currentPage + props.count
    );

    return (
        <div className={style.container}>
            {reviews.map((review, i) => {
                return(
                    <div className={style.review} key={i}> 
                        <ReviewBanner userID={review.userID}/>
                        <Link to="/Review" style={LinkStyle}>
                            <div className={style.description}>
                            <p className={style.text}>{review.review}</p>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}