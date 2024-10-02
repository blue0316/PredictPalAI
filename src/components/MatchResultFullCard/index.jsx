// styling
import styles from './styles.module.scss';

// components
import InfoTabsNav from '@components/InfoTabsNav';
import Lineups from '@components/Lineups';
import Score from '@ui/Score';

const MatchResultFullCard = ({match}) => {
    const {team1, team2} = match;

    return (
        <div className={`${styles.container} card d-flex flex-column`}
             style={{
                 borderLeftColor: `var(--${team1.color})`,
                 borderRightColor: `var(--${team2.color})`
             }}>
            <div className={`${styles.header} d-flex align-items-center justify-content-between p-relative`}>
                <div className="d-flex flex-column">
                    <h3>{team1.club}</h3>
                    <span className="text-12">{team1.country}</span>
                </div>
                <Score team1={team1.score} team2={team2.score} variant="alt"/>
                <div className="d-flex flex-column text-right">
                    <h3>{team2.club}</h3>
                    <span className="text-12">{team2.country}</span>
                </div>
            </div>
            <div className={styles.field}>
                <Lineups wrapperClass={styles.field_content} withField/>
            </div>
            <InfoTabsNav variant="alt"/>
        </div>
    )
}

export default MatchResultFullCard