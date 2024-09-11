// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import PlayerInfo from '@components/PlayerInfo';

// hooks
import useMeasure from 'react-use-measure';
import {useThemeProvider} from '@contexts/themeContext';

const PlayerMultiProgress = () => {
    const {direction} = useThemeProvider();
    const [ref, {width}] = useMeasure();
    const data = [
        {value: 80, color: 'azure'},
        {value: 34, color: 'purple'},
        {value: 40, color: 'grass'},
        {value: 10, color: 'accent'},
    ];
    const sortedBars = [...data].sort((a, b) => b.value - a.value);

    const getPercentage = (value) => {
        const total = data.reduce((acc, item) => acc + item.value, 0);
        const greatestNumber = data.reduce((acc, item) => acc > item.value ? acc : item.value, 0);
        return value === greatestNumber ? 100 : (value / (total / 100)).toFixed() * (width / 100)
    }

    return (
        <Spring className="card d-flex flex-column">
            <PlayerInfo wrapperClass="card-padded"
                        title="Gareth Bale"
                        subtitle="Technical and tactical actions"
                        number={11}/>
            <div className="card_footer d-flex flex-column justify-content-end flex-1 g-24 border-top card-padded"
                 style={{paddingTop: 20}}>
                <div className={`${styles.info} d-flex g-12 h2`}>
                    <span>457</span>
                    <span className={styles.info_separator}/>
                    <span className={`${styles.info_progress} d-flex align-items-center g-12`}>
                        6 <i className="icon-chevron-up"/>
                    </span>
                </div>
                <div className={styles.track} ref={ref}>
                    {
                        sortedBars.map((item, index) => (
                                <div className={`${styles.track_item} ${styles[direction]}`} key={index}
                                     style={{
                                         width: `${getPercentage(item.value)}%`,
                                         backgroundColor: `var(--${item.color})`,
                                         zIndex: index + 1
                                     }}/>
                            ))
                    }
                </div>
            </div>
        </Spring>
    )
}

export default PlayerMultiProgress