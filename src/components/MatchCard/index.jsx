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
            <div className={`${styles.footer} flex items-center gap-2.5 border-top text-12`}>
                <span className="font-semibold text-highlight">{latestEvent.minute}'</span>
                <span className="text-overflow">{latestEvent.event}</span>
            </div>
        </Spring>
    )
}

export default MatchCard