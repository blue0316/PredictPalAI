// utils
import PropTypes from 'prop-types';

// constants
import CLUBS from '@constants/clubs';

const ClubInfo = ({id, title, subtitle, wrapperClass}) => {
    const club = CLUBS.find(club => club.id === id);

    return (
        <div className={`${wrapperClass ? wrapperClass : ''} info d-flex align-items-center g-20`}>
            <img className="club-logo" src={club.logo} alt={club.name}/>
            <div className="main d-flex flex-column">
                <h3>{title || club.name}</h3>
                <span className="text-12">{subtitle || `${club.city}, ${club.country}`}</span>
            </div>
        </div>
    )
}

ClubInfo.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    wrapperClass: PropTypes.string,
}

export default ClubInfo