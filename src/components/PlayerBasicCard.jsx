// components
import GoalsStats from '@ui/GoalsStats';

// utils
import PropTypes from 'prop-types';

const PlayerBasicCard = ({number = 4, firstName = 'Romelu', lastName = 'Lukaku', goals = 12}) => {
    return (
        <div className="card h-1 d-flex flex-column g-20 border-color-bottom" style={{borderColor: 'var(--purple)'}}>
            <div className="card_header d-flex flex-column g-16 flex-1">
                <span className="player-number">{number}</span>
                <h3>{firstName} <span className="d-block">{lastName}</span></h3>
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