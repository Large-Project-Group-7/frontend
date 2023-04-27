import useCheckMobileScreen from '../component/mobile_exclusives/CheckMobile';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Banner } from '../component/Banner';
import style from '../styles/BookPage.module.css';
import Cover from '../component/Cover';
import Pages from '../component/Pages';
import Reviews from '../component/Reviews';
import InfoPopup from '../component/InfoPopup';
import ForegroundBox from '../component/mobile_exclusives/ForegroundBox';
import PerBookBox from '../component/mobile_exclusives/PerBookBox';
import { Link } from 'react-router-dom';

export const BookPage = (props) => {
    const isMobile = useCheckMobileScreen();
    const { bookID } = useParams();
    const [book, setBook] = useState([]);
    const [pop, setPop] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:3001/books/${bookID}`, {
            method: 'GET',

            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => response.json())
        .then(data => {
            setBook(data)
        })
    }, [bookID])

    function popUp() {
        setPop(!pop);
    }

    if(!isMobile)
    {
        // Calculate the average score
        let score;
        if (book.reviewCount === 0) {
            score = 0;
        } else {
            score = (book.totalScore / book.reviewCount).toFixed(1);
        }
        
        //Calculate the total pages according to how many reviews are there
        let totalPage = Math.ceil(book.reviewCount / 4);

        // This is to make sure that we don't go pass the array bound
        let compare = book.reviewCount - 1
        let currentReviewNum;

        // Check if there are any reviews
        if (compare === -1) {
            currentReviewNum = 0;
        } else {
            // make sure we don't go pass the array, in other word, display 4 reviews if we haven't 
            // go pass the array of reviews
            if(currentPage * 4 - 1 <= compare) {
                currentReviewNum = 4;
            }
            //Else, this make sure we display an appropriate amount of review to not go pass array.
            else {
                currentReviewNum = compare - 4*(currentPage - 1) + 1;
            }
        }

        return (
        <div className={style.container}>
            <Banner />
            <div className={style.rating}>
                <p className={style.userText}>User Reviews & Ratings</p>
                <p className={style.ratingNumber}>{score} out of 5</p>
                <Link to='/AddReview' >
                    <button className={style.reviewButton}>Write/Edit Review</button>
                </Link>
            </div>
            <div className={style.bookContainer}>
                <p className={style.title}>{book.title}</p>
                <div className={style.cover}>
                    <Cover count={1} src='https://drupal.nypl.org/sites-drupal/default/files/blogs/J5LVHEL.jpg'/>
                    <button className={style.infoButton} onClick={popUp}>Book Information</button>
                    {pop && <InfoPopup book={book} handleClick={popUp}/>}
                </div>
                <p className={style.description}>{book.summary}</p>
            </div>
            <div className={style.reviewsContainer}>
                <Pages totalPages={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                <div className={style.collections}>
                    <Reviews count={currentReviewNum} reviews={book.reviews} currentPage={currentPage}/>
                </div>
            </div>
        </div>
    )}

    return (
        <div>
            <Banner {...props}/>
                <ForegroundBox>
                    <div id={style.startmobile}></div>
                    <div className={style['title']}>Harry Potter and the Sorceror's Stone</div>
                    <div className={style.covermobile}>
                    <Cover count={1} src='https://m.media-amazon.com/images/I/51HSkTKlauL._SY291_BO1,204,203,200_QL40_ML2_.jpg'/>
                    <button className={style.infoButtonMobile} onClick={popUp}>Book Information</button>
                    {pop && <InfoPopup handleClick={popUp}/>}
                    </div>
                    <p className={style.userTextMobile}>User Reviews & Ratings</p>
                    <p className={style.ratingNumberMobile}>2.2 out of 5</p>
                    <div id={style.pagebreakbookpagemobile}></div>
                    <p className={style.seeall}>See All</p>
                    <div className={style['break']} onClick={popUp} ></div>
                    <PerBookBox />
            </ForegroundBox>
        </div>
    )
} 