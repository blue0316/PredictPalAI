// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import LazyImage from '@components/LazyImage';
import DraggableScrollContainer from '@components/DraggableScrollContainer';

// constants
import CLUBS from '@constants/clubs';

const ChampionsLeague = () => {
    return (
        <Spring className={`${styles.container} card card--side-shadow`}>
            <h3 className="card_header">Champions League</h3>
            <DraggableScrollContainer className={`${styles.list} card_footer flex`}>
                {
                    CLUBS.map((club, index) => (
                        <Spring className={`${styles.list_item} flex flex-col items-center gap-3.5`}
                                key={index}
                                index={index}
                                type="slideLeft">
                            <LazyImage className="club-logo club-logo--lg" src={club.logo} alt={club.name}/>
                            <span className="text-12">{club.name}</span>
                        </Spring>
                    ))
                }
            </DraggableScrollContainer>
        </Spring>
    )
}

export default ChampionsLeague