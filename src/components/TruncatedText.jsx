// components
import Truncate from 'react-truncate';

// hooks
import {useState, useEffect} from 'react';
import {useThemeProvider} from '@contexts/themeContext';

// utils
import PropTypes from 'prop-types';

const TruncatedText = ({text, lines = 2, width, className}) => {
    const {fontScale} = useThemeProvider();
    const [truncated, setTruncated] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        return () => setMounted(false);
    }, []);

    useEffect(() => {
        setTruncated(true);
    }, [fontScale, width]);

    return (
        <span className={className ? className : ''}>
            {
                mounted && (
                    <Truncate lines={lines}
                              ellipsis={(<span>...</span>)}
                              width={width}
                              onTruncate={() => setTruncated(!truncated)}>
                        {text}
                    </Truncate>
                )
            }
        </span>
    )
}

TruncatedText.propTypes = {
    text: PropTypes.string.isRequired,
    lines: PropTypes.number,
    width: PropTypes.number.isRequired,
    className: PropTypes.string,
}

export default TruncatedText