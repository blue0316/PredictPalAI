// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import InfoTabsNav from '@components/InfoTabsNav';
import Lineups from '@components/Lineups';
import Score from '@ui/Score';

// hooks
import {useThemeProvider} from '@contexts/themeContext';
import {useWindowSize} from 'react-use';

// utils
import PropTypes from 'prop-types';
import {getClubInfo} from '@utils/helpers';

const MatchMonthCard = ({match, index, variant = 'basic'}) => {
    const {width} = useWindowSize();
    const {theme} = useThemeProvider();
    const team1 = getClubInfo(match.team1.id);
    const team2 = getClubInfo(match.team2.id);

    return (
        <Spring className={`${styles.container} ${styles[theme]} h-100`} type="slideUp" index={index}>
            <div className="card-padded d-flex flex-column g-20"
                 style={{paddingBottom: variant !== 'extended' ? 'var(--card-padding)' : 10}}>
                <div className="d-flex align-items-center justify-content-between p-relative">
                    <img className="club-logo" src={team1.logo} alt={team1.name}/>
                    <Score team1={match.team1.score} team2={match.team2.score} variant="alt"/>
                    <img className="club-logo" src={team2.logo} alt={team2.name}/>
                </div>
                {
                    width >= 414 && (
                        <div className="d-flex justify-content-between g-30">
                            <div style={{minWidth: 0}}>
                                <h3>{team1.shortName}</h3>
                                <p className="text-12 text-overflow">{team1.city}, {team1.country}</p>
                            </div>
                            <div className="text-right" style={{minWidth: 0}}>
                                <h3>{team2.shortName}</h3>
                                <p className="text-12 text-overflow">{team2.city}, {team2.country}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            {
                variant === 'extended' && (
                    <div className="border-top">
                        <Lineups wrapperClass={styles.field} isCompact/>
                    </div>
                )
            }
            <InfoTabsNav variant="alt"/>
        </Spring>
    )
}

MatchMonthCard.propTypes = {
    match: PropTypes.object.isRequired,
    index: PropTypes.number,
    variant: PropTypes.oneOf(['basic', 'extended'])
}

export default MatchMonthCard