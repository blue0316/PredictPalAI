// components
import LazyImage from '@components/LazyImage';

// utils
import {getClubInfo} from '@utils/helpers';

const TeamBasicCard = ({id}) => {
    const club = getClubInfo(id);

    return (
        <div className="card h-1 d-flex flex-column align-items-center g-12 card-padded border-color-bottom"
             style={{borderColor: `var(--${club.color})`}}>
            <LazyImage className="club-logo club-logo--xl" src={club.logo} alt={club.name}/>
            <div className="d-flex flex-column align-items-center g-4">
                <h3>{club.shortName}</h3>
                <span className="text-12 text-overflow">{club.city}, {club.country}</span>
            </div>
        </div>
    )
}

export default TeamBasicCard