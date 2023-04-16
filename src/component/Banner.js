import style from '../styles/Banner.module.css'
import booksImage from '../public/books.png';
import menuImage from '../public/ListButton.png';
import searchImage from '../public/SearchIcon.svg';
import Profile from './Profile';

import MediaQuery from 'react-responsive'

export default function Banner() {
    return (
        <>
        <MediaQuery minWidth={930}>
            <div className={style.color}>
                <div className={style.test}>
                    <img src={booksImage} className={style.icon} alt='books'/>
                    <h2 className={style.left} id='title'>Title BGP7</h2>
                    <Profile />
                </div>
                <div className={style.RContainer}>
                    <h2 id="left" className={style.right}>Books</h2>
                    <h2 className={style.right}>Community</h2>
                    <input type='search'
                    placeholder='Search Books' className={style.search}/> 
                </div>   
            </div>
        </MediaQuery>
        {/*Mobile media*/}
        <MediaQuery maxWidth={930}>
            <div className={style['totality']}>
                <div className={style.color}>
                    <div id="inline">
                        <button className={style['menu-pop-in']}> 
                            <img src={menuImage}  alt='Menu'/>
                        </button>
                        <img src={booksImage} className={style['mobile-icon']} alt='Books'/>
                        <button className={style['search-icon']}> 
                            <img src={searchImage}  alt='Search'/>
                        </button>
                        {/*<input type='search'
                        placeholder='Search Books' className={style.search}/>*/}
                    </div>
                <style jsx='true'>{`
                    #inline {
                        display: flex;
                        justify-content: center;
                        height: 64px;
                    }
                `}
                </style>    
                </div>
                <div className={style['center-info-box']}>
                    <button id='recent'>Recent</button>
                    <button id='my-books'>My Books</button>
                    <button id='add'>+</button>
                    <div id='start'></div>
                    <div className={style['per-book-box']}>
                        <div className='bookCoverPlaceholder'>

                        </div>
                        <div className={style['break']}></div>
                        <b className='book-title'>
                            Book Title
                        </b>
                        <div className={style['break']}></div>
                        <b className='book-author'>
                            Book Author
                        </b>
                        <div className={style['break']}></div>
                        <b className='book-rating'>
                            * 4/5
                        </b>
                        <div className={style['break']}></div>
                        <b className='book-tags'>
                            Genres/Tags
                        </b>
                    </div>
                    <div className={style['break']}></div>
                    <div className={style['per-book-box']}>
                        <div className='bookCoverPlaceholder'>

                        </div>
                        <div className={style['break']}></div>
                        <b className='book-title'>
                            Book Title
                        </b>
                        <div className={style['break']}></div>
                        <b className='book-author'>
                            Book Author
                        </b>
                        <div className={style['break']}></div>
                        <b className='book-rating'>
                            * 4/5
                        </b>
                        <div className={style['break']}></div>
                        <b className='book-tags'>
                            Genres/Tags
                        </b>
                    </div>
                    <div className={style['break']}></div>
                    <div className={style['per-book-box']}>
                        <div className='bookCoverPlaceholder'>

                        </div>
                        <div className={style['break']}></div>
                        <b className='book-title'>
                            Book Title
                        </b>
                        <div className={style['break']}></div>
                        <b className='book-author'>
                            Book Author
                        </b>
                        <div className={style['break']}></div>
                        <b className='book-rating'>
                            * 4/5
                        </b>
                        <div className={style['break']}></div>
                        <b className='book-tags'>
                            Genres/Tags
                        </b>
                    </div>
                    <div className={style['break']}></div>
                    <div className={style['per-book-box']}>
                        <div className='bookCoverPlaceholder'>

                        </div>
                        <div className={style['break']}></div>
                        <b className='book-title'>
                            Book Title
                        </b>
                        <div className={style['break']}></div>
                        <b className='book-author'>
                            Book Author
                        </b>
                        <div className={style['break']}></div>
                        <b className='book-rating'>
                            * 4/5
                        </b>
                        <div className={style['break']}></div>
                        <b className='book-tags'>
                            Genres/Tags
                        </b>
                    </div>
                    <style jsx='true'>{`
                    #recent {
                        position: absolute;
                        width: 94px;
                        height: 30px;
                        left: 48px;
                        top: 9.81%;
                        background-color: white;
                        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
                        border-width: 0px;
                        border-radius: 20px;
                        z-index: 5;
                    }
                    #my-books {
                        position: absolute;
                        width: 94px;
                        height: 30px;
                        left: 165px;
                        top: 9.81%;
                        background-color: white;
                        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
                        border-width: 0px;
                        border-radius: 20px;
                        font-weight: 200;
                        z-index: 5;
                    }
                    #add {
                        position: absolute;
                        left: 85.9%;
                        right: 6.41%;
                        top: 9.81%;
                        bottom: 86.64%;
                        width: 30px;
                        height: 30px;
                        background-color: #4F7FDE;;
                        background-image: url("../public/AddButtonImage.png");
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: contain;
                        border-radius: 5px;
                        border-width: 1px;
                        font-size: 24px;
                        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
                        z-index: 5;
                    }
                    #start {
                        margin-top: 20%;
                    }

                    .bookCoverPlaceholder {
                        display: inline-block;
                        margin-top: 23px;
                        margin-left: 16px;
                        margin-right: 8px;
                        width: 93px;
                        height: 128px;
                        background: #D9D9D9;
                        border-radius: 10px;
                    }

                    .book-title {
                        position: relative;
                        display: inline-block;
                        top: calc(-113px - 20px);
                        left: 117px;
                        /*font-family: 'Inter';*/
                        font-style: italic;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 18px;
                    }
                    .book-author {
                        position: relative;
                        display: inline-block;
                        top: calc(-113px - 20px);
                        left: 117px;
                        /*font-family: 'Inter';*/
                        font-style: italic;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 18px;
                    }
                    .book-rating {
                        position: relative;
                        display: inline-block;
                        top: calc(-93px - 20px);
                        left: 117px;
                        /*font-family: 'Inter';*/
                        font-style: italic;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 18px;
                    }
                    .book-tags {
                        position: relative;
                        display: inline-block;
                        top: calc(-83px - 20px);
                        left: 117px;
                        font-family: 'Inter';
                        font-style: italic;
                        font-weight: 200;
                        font-size: 11px;
                        line-height: 10px;
                        align-items: center;
                    }
                `}
                </style>  
                </div>
                
            </div>
        </MediaQuery>
        </>
    )
}