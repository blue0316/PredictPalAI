// components
import Progress from '@ui/Progress';

// utils
import PropTypes from 'prop-types';

const ProgressItem = ({title, value, barColor, trackColor}) => {
    return (
        <div className="d-flex flex-column g-10">
            <h6 className="label lh-1">{title}</h6>
            <div className="progress-item__progress">
                <Progress
                    value={value}
                    barColor={barColor}
                    trackColor={trackColor}
                />
            </div>
        </div>
    )
}

ProgressItem.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    barColor: PropTypes.string,
    trackColor: PropTypes.string,
}

export default ProgressItem