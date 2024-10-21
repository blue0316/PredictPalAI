// components
import GoalsStats from '@ui/GoalsStats';

// utils
import PropTypes from 'prop-types';

const PlayerBasicCard = ({number = 4, firstName = 'Romelu', lastName = 'Lukaku', goals = 12}) => {
    return (
        <div className="card height-w-1 flex flex-col gap-5 border-color-bottom" style={{borderColor: 'var(--purple)'}}>
            <div className="card_header flex flex-col gap-4 flex-1">
                <span className="player-number">{number}</span>
                <h3>{firstName} <span className="block">{lastName}</span></h3>
            </div>
            <div className="card_footer--sm">
                <GoalsStats goals={goals}/>
            </div>
        </div>
    )
}

PlayerBasicCard.propTypes = {
    number: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    goals: PropTypes.number
}

export default PlayerBasicCard