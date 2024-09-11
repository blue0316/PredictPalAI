// utils
import PropTypes from 'prop-types';

const LegendItem = ({ color, text }) => {
    return (
        <div className="legend">
            <span className="legend_color" style={{ backgroundColor: `var(--${color})` }} />
            <span className="legend_text label h6">{text}</span>
        </div>
    )
}

LegendItem.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default LegendItem