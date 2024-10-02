// components
import MatchResultColorItem from '@components/MatchResultColorItem';

// data placeholder
import groups_matches from '@db/groups_matches';

const ActiveMatchCard = () => {
    const activeMatch = groups_matches.find(match => match.active);

    return (
        <MatchResultColorItem match={activeMatch} index={0} standalone={true} />
    )
}

export default ActiveMatchCard