// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import MatchScoreItem from '@components/MatchScoreItem';

const MatchCard = ({match, index}) => {
    const latestEvent = match.events[match.events.length - 1];

    return (
        <Spring className={styles.container} type="slideUp" index={index}>
            <div className={styles.main}>
                <MatchScoreItem match={match} withLogo/>
            </div>
            <div className={`${styles.footer} d-flex align-items-center g-10 border-top text-12`}>
                <span className="text-600 text-highlight">{latestEvent.minute}'</span>
                <span className="text-overflow">{latestEvent.event}</span>
            </div>
        </Spring>
    )
}

export default MatchCard