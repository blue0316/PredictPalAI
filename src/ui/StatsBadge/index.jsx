// styling
import styles from './styles.module.scss';

// utils
import PropTypes from 'prop-types';

const StatsBadge = ({label, value}) => {
    return (
        <div className={styles.wrapper}>
            <span className={`${styles.block} h6 label`}>{label}</span>
            <span className={`${styles.block} h6 label`}>{value}</span>
        </div>
    )
}

StatsBadge.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
}

export default StatsBadge