// styling
import styles from './styles.module.scss';

// utils
import PropTypes from 'prop-types';

const ProductAdditionalInfo = ({property, value}) => {
    return (
        <li className={styles.row}>
            <span className="text-600">{property}</span>
            <span>{value}</span>
        </li>
    )
}

ProductAdditionalInfo.propTypes = {
    property: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default ProductAdditionalInfo