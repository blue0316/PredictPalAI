// styling
import styles from './styles.module.scss'

// components
import LazyImage from '@components/LazyImage';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// utils
import {getClubInfo} from '@utils/helpers';
import PropTypes from 'prop-types';

const PlayerDiscipline = ({clubID = 'realmadrid', firstName = 'Manuel', lastName = 'Neuer', red = 1, yellow = 6}) => {
    const club = getClubInfo(clubID);
    const {direction} = useThemeProvider();

    const drawYellowCards = () => {
        return Array(yellow).fill(0).map((_, i) => <span key={i} className={`${styles.card} ${styles.yellow} ${styles[direction]}`}/>)
    }

    return (
        <div className="card h-1 d-flex flex-column g-20">
            <div className="card_header d-flex flex-column g-16 flex-1">
                <LazyImage className="club-logo club-logo--md" src={club.logo} alt={club.name} />
                <h3>
                    {firstName}
                    <span className="d-block">{lastName}</span>
                </h3>
            </div>
            <div className="card_footer--sm justify-content-between">
                <div className="d-flex align-items-center g-8">
                    <div className={styles.card_wrapper}>
                        {drawYellowCards()}
                    </div>
                    <span className="label h6">{yellow}</span>
                </div>
                <div className="d-flex align-items-center g-8">
                    <span className={`${styles.card} ${styles.red}`}/>
                    <span className="label h6">{red}</span>
                </div>
            </div>
        </div>
    )
}

PlayerDiscipline.propTypes = {
    clubID: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    red: PropTypes.number,
    yellow: PropTypes.number
}

export default PlayerDiscipline