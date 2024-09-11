// utils
import PropTypes from 'prop-types';

const ProgressInfo = ({progress, text}) => {
    return (
        <div className="progress-info">
            <i className={`icon icon-chevrons-${progress > 0 ? 'up positive' : 'down negative'}`}/>
            <span className="h6 label">
                {progress > 0 ? '+' : '-'}{Math.abs(progress)} {text}
            </span>
        </div>
    )
}

ProgressInfo.propTypes = {
    progress: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
}

export default ProgressInfo