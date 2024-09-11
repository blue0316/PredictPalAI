// components
import ProgressInfo from '@ui/ProgressInfo';
import LazyImage from '@components/LazyImage';
import Like from '@ui/Like';
import AnimatedCount from '@components/AnimatedCount';

// utils
import PropTypes from 'prop-types';
import {getRandomInt} from '@utils/helpers';

// constants
import CLUBS from '@constants/clubs';

const ClubFans = ({id}) => {
    const club = CLUBS.find(club => club.id === id);

    return (
        <div className="card h-1 d-flex flex-column border-color-bottom" style={{borderColor: `var(--${club.color})`}}>
            <div className="d-flex flex-column g-16 flex-1 card-padded">
                <LazyImage className="club-logo club-logo--md" src={club.logo} alt={club.name}/>
                <div className="d-flex align-items-center g-14">
                    <Like isLiked readonly/>
                    <AnimatedCount className="h2" count={getRandomInt(1000, 13000)}/>
                </div>
            </div>
            <div className="card_footer--sm">
                <ProgressInfo progress={getRandomInt(-55, 55)} text="fans"/>
            </div>
        </div>
    )
}

ClubFans.propTypes = {
    id: PropTypes.string.isRequired
}

export default ClubFans