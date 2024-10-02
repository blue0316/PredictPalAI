// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import ClubFullInfo from '@components/ClubFullInfo';
import PlayerRow from '@components/PlayerRow';
import Lineups from '@components/Lineups';

// utils
import PropTypes from 'prop-types';

// constants
import CLUBS from '@constants/clubs';

// data placeholder
import {players_list} from '@db/players';

const TeamFullInfo = ({id}) => {

    const club = CLUBS.find((club) => club.id === id);

    const dataArr = players_list.sort((a, b) => {
        if (a.isCaptain) {
            return -1;
        }
        if (b.isCaptain) {
            return 1;
        }
        return 0;
    });

    return (
        <Spring className={`${styles.container} card`}>
            <div className="d-flex flex-column g-20">
                <ClubFullInfo club={club}/>
                <div className="d-flex flex-column g-1">
                    {
                        dataArr.map((player, index) => (
                            <PlayerRow key={index} player={player} index={index}/>
                        ))
                    }
                </div>
            </div>
            <div className="d-flex flex-column g-20">
                <h3>Lineups</h3>
                <Lineups wrapperClass={styles.field} withField/>
            </div>
        </Spring>
    )
}

TeamFullInfo.propTypes = {
    id: PropTypes.string.isRequired,
}

export default TeamFullInfo