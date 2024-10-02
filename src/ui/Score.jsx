// utils
import PropTypes from 'prop-types';

const Score = ({team1 = 0, team2 = 0, variant = 'main'}) => {
    return (
        <div className={`score ${variant === 'alt' ? 'score--alt' : ''}`}>
            <span>{team1}</span>
            <span>:</span>
            <span>{team2}</span>
        </div>
    )
}

Score.propTypes = {
    team1: PropTypes.number,
    team2: PropTypes.number,
    variant: PropTypes.oneOf(['main', 'alt']),
}

export default Score