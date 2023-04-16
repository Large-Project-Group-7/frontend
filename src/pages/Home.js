import Banner from '../component/Banner';
import '../styles/background.css';
import style from '../styles/Home.module.css';
import add from '../public/add.svg';
import Recent from '../component/Recent';
import BooksList from '../component/BooksList';

//import MediaQuery from 'react-responsive'

export const Home = () => {
    return (
        <div>
            <Banner />
            {/*<MediaQuery minWidth={930}>*/}
                <div>
                    <h1 className={style.title}>Books</h1>
                    <img className={style.add} src={add} alt='add button'/>
                </div>
                <div>
                    <Recent />
                    <BooksList count={7}/>
                </div>
            {/*</MediaQuery>*/}
            {/*<MediaQuery maxWidth={930}>*/} {/* will merge the non-banner part inno this tommorrow */}
            {/*</MediaQuery>*/}
        </div>

    )
}