import useCheckMobileScreen from '../component/mobile_exclusives/CheckMobile';
import { Banner } from '../component/Banner';
import style from '../styles/ReviewPage.module.css'
import Cover from '../component/Cover';
import star from '../public/Star.svg';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const ReviewPage = (props) =>  {
    const isMobile = useCheckMobileScreen();
    const [reviewData, setReviewData] = useState([]);
    const [bookData, setBookData] = useState([]);
    const [userData, setUserData] = useState([]);
    const { reviewID } = useParams();

    const LinkStyle = {
        textDecoration: 'none',
    }

    useEffect(() => {
        async function getReviewData(reviewID) {
            const response = await fetch(`http://localhost:3001/reviews/${reviewID}`)
            const data = await response.json();
            setReviewData(data); 
        }

        async function getBookData(bookID) {
            const response = await fetch(`http://localhost:3001/books/${bookID}`)
            const data = await response.json();
            setBookData(data);
        }

        async function getUserData(userID) {
            const response = await fetch(`http://localhost:3001/users/${userID}`)
            const data = await response.json();
            setUserData(data);
        }

        getReviewData(reviewID)
        getBookData(reviewData.bookID)
        getUserData(reviewData.userID)
    }, [reviewData.bookID, reviewData.userID, reviewID])

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
                                    <Cover count={1} src={'https://drupal.nypl.org/sites-drupal/default/files/blogs/J5LVHEL.jpg'}/>
                                </div>
                                <h2>{bookData.title}</h2>
                                <h3>{bookData.author}</h3>
                                <h3>ISBN: {bookData.ISBN}</h3>
                            </div>
                            <div className={style.rateInfo}>
                                <div className={style.rating}>
                                    <img id={style.star} src={star} alt='rating star'/>
                                    <p className={style.number}>{reviewData.score}/5</p>
                                </div>
                                <p className={style.username}>By {userData.username}</p>
                            </div>
                        </div>
                        <Link to={`/AddReview/${bookData._id}`} style={LinkStyle}>
                            <div className={style.buttonCont}>
                                    <button className={style.button}>Edit</button>
                            </div>
                        </Link>
                    </div>
                    <div className={style.right}>
                        <textarea className={style.review} value={reviewData.review}></textarea>
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