// styling
import styles from './styles.module.scss';

// components
import MatchEventIcon from '@ui/MatchEventIcon';

// hooks
import useMeasure from 'react-use-measure';
import useMatchProgress from '@hooks/useMatchProgress';

// utils
import PropTypes from 'prop-types';

const MatchTrack = ({events = [], withStartEndMarkers = true, currentMinute = 0}) => {
    const progress = useMatchProgress(currentMinute);
    const [ref, {width}] = useMeasure();
    const minuteWidth = width / 90;

    return (
        <div className={styles.wrapper} ref={ref}>
            <div className={styles.track}>
                <span className={`${styles.track_marker} ${styles.middle}`}/>
                {
                    withStartEndMarkers &&
                    <>
                        <span className={`${styles.track_marker} ${styles.start}`}/>
                        <span className={`${styles.track_marker} ${styles.end}`}/>
                    </>
                }
                {
                    events.map((event, index) => {
                        const {type, minute, count} = event;
                        const left = minuteWidth * minute;

                        return (
                            <MatchEventIcon type={type} count={count} position={left} key={index}/>
                        )
                    })
                }
                {
                    progress === 90 &&
                    <MatchEventIcon type="finish" position={width}/>
                }
            </div>
        </div>
    )
}

MatchTrack.propTypes = {
    events: PropTypes.array,
    withStartEndMarkers: PropTypes.bool,
    currentMinute: PropTypes.number
}

export default MatchTrack