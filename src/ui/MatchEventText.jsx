// utils
import PropTypes from 'prop-types';

const MatchEventText = ({ minute, text }) => {
    return (
        <div className="d-flex align-items-center g-16 p-relative" style={{zIndex: 10}}>
            <span className="h3">{minute}'</span>
            <p className="text-12 text-overflow">{text}</p>
        </div>
    )
}

MatchEventText.propTypes = {
    minute: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
}

export default MatchEventText