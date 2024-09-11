// components
import LazyImage from '@components/LazyImage';
import Fade from '@mui/material/Fade';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// utils
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ThemedBackground = ({light, dark, className}) => {
    const {theme} = useThemeProvider();

    return (
        <div className={classNames('cover', className)}>
            <Fade in={theme === 'light'} timeout={300}>
                <div>
                    <img className="cover__image" src={light} alt="background"/>
                </div>
            </Fade>
            <Fade in={theme === 'dark'} timeout={300}>
                <div>
                    <img className="cover__image" src={dark} alt="background"/>
                </div>
            </Fade>
        </div>
    );
}

ThemedBackground.propTypes = {
    light: PropTypes.string.isRequired,
    dark: PropTypes.string.isRequired,
}

export default ThemedBackground