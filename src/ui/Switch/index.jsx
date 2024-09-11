// styling
import styles from './style.module.scss'

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// utils
import PropTypes from 'prop-types';
import {memo} from 'react';

const Switch = ({checked, onChange, id}) => {
    const {theme} = useThemeProvider();

    return (
        <div className={`${styles.switch} ${styles[theme]}`}>
            <input id={id} type="checkbox" checked={checked} onChange={onChange} />
            <label className={styles.switch_slider} htmlFor={id} />
        </div>
    )
}

Switch.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
}

export default memo(Switch)