// components
import CountUp from 'react-countup';

// utils
import {numFormatter} from '@utils/helpers';
import PropTypes from 'prop-types';

const AnimatedCount = ({className, count, separator, decimals, suffix, isFormatted, formattedDecimals}) => {
    return (
        <CountUp
            start={0}
            end={count}
            duration={2}
            separator={separator}
            decimals={decimals}
            suffix={suffix ? suffix : ''}
            formattingFn={isFormatted ? (val) => numFormatter(val, formattedDecimals) : null}
            enableScrollSpy
            scrollSpyOnce
        >
            {({countUpRef}) => (
                <span className={className ? className : ''} ref={countUpRef}/>
            )}
        </CountUp>
    )
}

AnimatedCount.propTypes = {
    className: PropTypes.string,
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    separator: PropTypes.string,
    decimals: PropTypes.number,
    suffix: PropTypes.string,
    isFormatted: PropTypes.bool,
    formattedDecimals: PropTypes.number
}

export default AnimatedCount