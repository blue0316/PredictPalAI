// components
import LinearProgress from '@mui/material/LinearProgress';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// utils
import PropTypes from 'prop-types';

const Progress = ({barColor = 'azure', trackColor, value, style = {}}) => {
    const {theme} = useThemeProvider();
    const bgColor = `var(--${trackColor})` || (theme === 'light' ? 'var(--body)' : 'transparent');

    return <LinearProgress className="progressbar"
                           variant="determinate"
                           aria-label={value}
                           value={value}
                           sx={{
                               backgroundColor: bgColor,
                               height: 6,
                               borderRadius: 2,
                               ...style,

                               '& .MuiLinearProgress-bar': {
                                   backgroundColor: `var(--${barColor})`,
                                   borderRadius: 2,
                               }
                           }}/>
}

Progress.propTypes = {
    barColor: PropTypes.string,
    trackColor: PropTypes.string,
    value: PropTypes.number.isRequired,
    style: PropTypes.object,
}

export default Progress