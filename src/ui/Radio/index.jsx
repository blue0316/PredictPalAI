// styling
import styles from './styles.module.scss';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// utils
import PropTypes from 'prop-types';

const Radio = ({className, name, id, ...props}) => {
    const {theme} = useThemeProvider();

    return (
        <div className={`${styles.radio} ${styles[theme]} ${className ? className : ''}`}>
            <input type="radio" id={id} name={name} {...props} />
            <label htmlFor={id}/>
        </div>
    )
}

Radio.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default Radio