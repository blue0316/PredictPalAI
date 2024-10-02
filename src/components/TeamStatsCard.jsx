// components
import TruncatedText from '@components/TruncatedText';
import GoalsStats from '@ui/GoalsStats';

// hooks
import useMeasure from 'react-use-measure';

// utils
import PropTypes from 'prop-types';
import {getClubInfo} from '@utils/helpers';

const TeamStatsCard = ({id, value}) => {
    const [ref, {width}] = useMeasure();
    const club = getClubInfo(id);

    return (
        <div className="card h-1 d-flex flex-column border-color-bottom" style={{borderColor: `var(--${club.color})`}}>
            <div className="d-flex flex-column align-items-start flex-1 g-14"
                 ref={ref}
                 style={{padding: '30px 30px 22px'}}>
                <img className="club-logo club-logo--md" src={club.logo} alt={club.name}/>
                <h3>
                    <TruncatedText text={club.shortName} width={width}/>
                </h3>
            </div>
            <div className="card_footer--sm">
                <GoalsStats goals={value}/>
            </div>
        </div>
    )
}

TeamStatsCard.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
}

export default TeamStatsCard