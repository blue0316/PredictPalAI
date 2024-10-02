// utils
import PropTypes from 'prop-types';

const Price = ({price, isRange = false}) => {
    const iconStyles = {
        color: 'var(--olive)',
        fontWeight: 700,
        fontSize: '0.8125rem',
        borderRadius: 8,
        width: 32,
        height: 32,
    }

    return (
        <div className="d-flex align-items-center g-10">
            <span className="square h4" style={iconStyles}>$</span>
            <h4 className="text-700">
                {
                    isRange ?
                        `${price[0].toFixed(2)} - ${price[1].toFixed(2)}`
                        :
                        price.toFixed(2)
                }
            </h4>
        </div>
    )
}

Price.propTypes = {
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.array]).isRequired,
}

export default Price