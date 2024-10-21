// components
import LazyImage from '@components/LazyImage';

// utils
import {getClubInfo} from '@utils/helpers';

const TeamBasicCard = ({id}) => {
    const club = getClubInfo(id);

    return (
        <div className="card height-w-1 flex flex-col items-center gap-3 card-padded border-color-bottom"
             style={{borderColor: `var(--${club.color})`}}>
            <LazyImage className="club-logo club-logo--xl" src={club.logo} alt={club.name}/>
            <div className="flex flex-col items-center gap-1">
                <h3>{club.shortName}</h3>
                <span className="text-12 text-overflow">{club.city}, {club.country}</span>
            </div>
        </div>
    )
}

export default TeamBasicCard