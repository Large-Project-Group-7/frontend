import useCheckMobileScreen from '../component/mobile_exclusives/CheckMobile';
import { Banner } from '../component/Banner';
import style from '../styles/BookPage.module.css';
import Cover from '../component/Cover';
import Pages from '../component/Pages';

export const BookPage = (props) => {
    const isMobile = useCheckMobileScreen();

    if(!isMobile)
    {
        return (
        <div className={style.container}>
            <Banner />
            <div className={style.rating}>
                <p className={style.userText}>User Reviews & Ratings</p>
                <p className={style.ratingNumber}>2.2 out of 5</p>
                <button className={style.reviewButton}>Write/Edit Review</button>
            </div>
            <div className={style.bookContainer}>
                <p className={style.title}>Harry Potter and the Sorceres Stone</p>
                <div className={style.cover}>
                    <Cover count={1} src='https://m.media-amazon.com/images/I/51HSkTKlauL._SY291_BO1,204,203,200_QL40_ML2_.jpg'/>
                    <button className={style.infoButton}>Book Information</button>
                </div>
                <p className={style.description}>Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are 
                    terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous 
                    school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, 
                    to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and 
                    closer to his own noble destiny.
                </p>
            </div>
            <div className={style.reviewsContainer}>
                <Pages totalPages={10}/>
            </div>
        </div>
    )}
    return (
        <div>

        </div>
    )
} 