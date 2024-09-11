// utils
import PropTypes from 'prop-types';

const IconButton = ({icon = 'bag', onClick, color = 'grass', ariaLabel='Add to cart', isCartAction}) => {
    return (
        <button className={`icon-btn ${isCartAction ? 'icon-btn--cart' : ''}`}
                aria-label={ariaLabel}
                onClick={onClick}
                style={!isCartAction ? {background: `var(--${color})`} : {}}>
            <i className={`icon-${icon}`}></i>
        </button>
    )
}

IconButton.propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(['green', 'blue', 'blue-gradient']),
    ariaLabel: PropTypes.string,
    isCartAction: PropTypes.bool
}

export default IconButton