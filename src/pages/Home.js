import { Banner } from '../component/Banner';
import style from '../styles/Home.module.css';
import add from '../public/add.svg';
import Recent from '../component/Recent';
import BooksList from '../component/BooksList';
import ForegroundBox from '../component/mobile_exclusives/ForegroundBox';
import PerBookBox from '../component/mobile_exclusives/PerBookBox';
import { useState } from 'react';
import close from '../public/close.png';
import '../styles/background.css';

import useCheckMobileScreen from '../component/mobile_exclusives/CheckMobile';

export const Home = (props) => {
    const isMobile = useCheckMobileScreen();
    const [books, setBooks ] = useState([]);
    const [ flag, setFlag ] = useState(false);
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(false);
    const baseUrl = 'http://localhost:5000/amazon/';
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

        function handleSubmit() {
            let url = text.replace('https://www.amazon.com/', '');
            url = baseUrl + url;
            console.log(url)
            setLoading(true);
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data.title);
                    console.log(data.author);
                    console.log(data.pages);
                    console.log(data.publisher);
                    console.log(data.date);
                    console.log(data.cover);
                    const book = {
                        title: data.title,
                        author: data.author,
                        pages: data.pages,
                        publisher: data.publisher,
                        date: data.date,
                        cover: data.cover,
                    }
                    addBook(book)
                    setLoading(false);
                    setFlag(false);
                })
        }

        function popUp() {
            setFlag(!flag)
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