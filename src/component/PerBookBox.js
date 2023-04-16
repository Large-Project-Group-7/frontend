import style from '../styles/Banner.module.css';

export default function PerBookBox() {
    return (
        <div className='per-book-box'>
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
            <style jsx='true'>{`
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

                .per-book-box {
                    display: block;
                    /*flex-wrap: wrap;*/
                    background-color: #FFFFFF;
                    margin:auto;
                    margin-top: 15px;
                    width: 309px;
                    height: 174px;
                }
                `}
            </style>

        </div>
    )
}