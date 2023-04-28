import style from '../styles/ReviewList.module.css';
import Cover from '../component/Cover';
import Reviews from '../component/Reviews';
import { useState, useEffect } from 'react';

export const ReviewList = (props) => {

    const [reviewsData, setReviewsData] = useState([])
    const [booksData, setBooksData] = useState([]);

    // Transform the reviewsID array into array of review object
    useEffect(() => {
        async function getReviewsData() {
            const reviewPromises = props.reviewsID.map((reviewID) => {
                return fetch(`http://localhost:3001/reviews/${reviewID}`)
                        .then(response => response.json());
            })

            const reviews = await Promise.all(reviewPromises);
            setReviewsData(reviews);
        }

        
        getReviewsData();
    }, [props.reviewsID])
    
    useEffect(() => {
        async function getBooksData() {
            const bookPromises = reviewsData.map((reviewObject) => {
                return fetch(`http://localhost:3001/books/${reviewObject.bookID}`)
                        .then(response => response.json());
            })
            const books = await Promise.all(bookPromises);
            setBooksData(books);
        }
        getBooksData()
    }, [reviewsData])


    return (reviewsData.map((review) => {
        return (booksData.map((book, i ) => {
            return (
                <div className={style.container} key={i}>
                    <div className={style.book}>
                        <p className={style.title}>{book.title}</p>
                        <div className={style.cover}>
                            <Cover count={1} src='https://drupal.nypl.org/sites-drupal/default/files/blogs/J5LVHEL.jpg' _id={book._id}/>
                        </div>
                    </div>
                    <div className={style.review}>
                        <Reviews count={1} reviews={[review._id]} currentPage={1}/>
                    </div>
                </div>
            )
        })
        )
    })
    )
}