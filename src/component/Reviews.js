import style from '../styles/Reviews.module.css';
import ReviewBanner from '../component/ReviewBanner';

export default function Reviews(props) {
    let container = [];
    for(let i = 0; i < props.count; i++) {
        container.push(
            <div className={style.review} key={i}>
                <ReviewBanner />
                <div className={style.description}>
                    <p className={style.text}>I was late to the Harry Potter game, but I loved it. In this book, Harry got a letter saying he is in fact a wizard.
                        So he is enrolled the Hogwarts School of Witchcraft and Wizardry. Him, along with his new friend the giant Hagrid,
                        go to Diagon Alley, a magical bazaar, and thus he is thrust into the magical universe so captured the imagination 
                        of millions. We soon learn Harry is world famous among wizards for conquering an evil Wizard named Vo - um - He 
                        Who Must Not Be Named. Sorry `bout that slip. =). The book also introduces the relationship dynamics that would 
                        continue throughout the entire series, from the interplay between the three main kids (Harry, Ron, and Hermione), 
                        to the ambiguous Severus Snape, the wise mentor figure of Albus Dumbledore, bumbling Hagrid with his love of nasty
                        creatures, prim and reserved Professor McGonagall, evil incarnate Voldemort, Draco Malfoy, etc.A
                    </p>
                </div>
            </div>
        )
    }
    return <div className={style.container}>{container}</div>
}