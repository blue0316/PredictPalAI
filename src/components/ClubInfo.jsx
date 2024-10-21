// utils
import PropTypes from 'prop-types';

// constants
import CLUBS from '@constants/clubs';

const ClubInfo = ({id, title, subtitle, wrapperClass}) => {
    const club = CLUBS.find(club => club.id === id);

    return (
        <div className={`${wrapperClass ? wrapperClass : ''} info flex items-center gap-5`}>
            <img className="club-logo" src={club.logo} alt={club.name}/>
            <div className="main flex flex-col">
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