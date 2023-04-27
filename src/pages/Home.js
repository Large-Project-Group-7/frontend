import { Banner } from '../component/Banner';
import style from '../styles/Home.module.css';
import add from '../public/add.svg';
import Recent from '../component/Recent';
import BooksList from '../component/BooksList';
import ForegroundBox from '../component/mobile_exclusives/ForegroundBox';
import PerBookBox from '../component/mobile_exclusives/PerBookBox';
import { useState, useEffect } from 'react';
import close from '../public/close.png';
import '../styles/background.css';

import useCheckMobileScreen from '../component/mobile_exclusives/CheckMobile';

export const Home = (props) => {
    const isMobile = useCheckMobileScreen();
    const [books, setBooks ] = useState([]);

    const [ flag, setFlag ] = useState(false);
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [duplicate, setDuplicate] = useState(false);
    const baseURL = 'https://www.googleapis.com/books/v1/volumes/';
    const regex = /\/dp\/([\dX]+)/i;

    // This if to get the all the books in the database
    useEffect(() => {
        fetch('http://localhost:3001/books', {
            method: 'GET',
    
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {
            if(response.status === 200) {
                return response.json();
           }
        }).then(data => {
            setBooks(data);
        })
    }, [])

    if(!isMobile) // instead of <MobileMedia> from reactive-package
    {

        function addBook(book) {
            setBooks([...books, book])
        }

        const handleKeyDown = (e) => {
            if (e.keyCode === 13) { // Check if Enter key was pressed
              handleSubmit();
            }
          };

        async function handleSubmit() {
            const match = text.match(regex);
            if (match === null) {
                setError(true);
                return 
            }
            let isbn = match[1];
            let searchURL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn.toString();

            console.log(isbn);
            console.log(searchURL);
            setLoading(true);

            const response = await fetch(searchURL)
            const data = await response.json();
            let id = data.items[0].id;

            console.log(id)
            let url = baseURL + id;
            console.log(url)

            // let coverFlag = true
            const bookResponse = await fetch(url)
            const bookData = await bookResponse.json();

            const book = {
                ISBN: isbn,
                title: bookData.volumeInfo.title,
                author: bookData.volumeInfo.authors[0],
                pageCount: bookData.volumeInfo.pageCount,
                publisher: bookData.volumeInfo.publisher,
                yearPublished: bookData.volumeInfo.publishedDate,
                summary: bookData.volumeInfo.description,
                reviewCount : 0,
                totalScore: 0,
                reviews: null,
            }

            const result = await fetch ('http://localhost:3001/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book),
            })

            if (result.status === 500) {
                setDuplicate(true)
                setLoading(false)
                return
            }
            setLoading(false)
            setFlag(!flag);
            setError(false)
            addBook(book)
            setDuplicate(false)
        }

        function popUp() {
            setError(false);
            setFlag(!flag);
            setDuplicate(false);
        }

        return (
        <div className={loading ? style.container : "" }>
            <Banner/>
                <div>
                    <h1 className={style.title}>Books</h1>
                    <img className={style.add} src={add} alt='add button' onClick={popUp}/>
                </div>
                <div>
                    <BooksList books={books} />
                    <Recent />
                </div>
                {flag && (
                <div className={style.linkContainer}> 
                    <img className={style.close} src={close} alt='close button' onClick={popUp}/>
                    {duplicate && (
                        <h3 className={style.error}>The book is in already in the website</h3>
                    )}
                    {error && (
                        <h3 className={style.error}>Please enter a proper Amazon book link or find another Amazon link</h3>
                    )}
                    <h2>Put an Amazon book link here:</h2>
                    <input className={style.input} name="link" onChange={(e) => setText(e.target.value)} onKeyDown={handleKeyDown}/>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
                )}
            
        </div>
    )}
    return (
        <div>
            <Banner {...props}/>
            <ForegroundBox>
                <button id='recent'>Recent</button>
                <button id='my-books'>My Books</button>
                <button id='add'>+</button>
                <div id='start'></div>
                <div className={style['break']}></div>
                <PerBookBox />
                <div className={style['break']}></div>
                <PerBookBox />
                <div className={style['break']}></div>
                <PerBookBox />
                <div className={style['break']}></div>
                <PerBookBox />
                <div className={style['break']}></div>
                <PerBookBox />
            </ForegroundBox>
        </div>
    )
}