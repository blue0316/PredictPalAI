// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import StatsBadge from '@ui/StatsBadge';

// hooks
import {useThemeProvider} from '@contexts/themeContext';
import {useWindowSize} from 'react-use';

// assets
import cover from '@assets/team_stats.webp';
import bvb from '@assets/clubs/bvb.webp';

const TeamStats = () => {
    const {theme} = useThemeProvider();
    const {width} = useWindowSize();

    const data = [
        {label: 'Wins', shortLabel: 'W', value: 17},
        {label: 'Draws', shortLabel: 'D', value: 29},
        {label: 'Losses', shortLabel: 'L', value: 74},
    ]

    return (
        <Spring
            className={`${styles.container} ${theme === 'light' ? styles.light : styles.dark} card no-shadow card-padded text-black`}>
            <img className={`${styles.cover} cover`} src={cover} alt="media"/>
            <div className={`${styles.content} d-flex flex-column align-items-start justify-content-between h-100`}>
                <img className="club-logo" src={bvb} alt="BVB"/>
                <div className={`${styles.content_header} d-flex flex-column g-4 flex-1`}>
                    <h2 className={`${styles.club} text-20 text-black text-overflow`}>Borussia Dortmund</h2>
                    <h4 className="text-black text-overflow">Dortmund, Germany</h4>
                </div>
                <div className="d-flex flex-wrap g-20">
                    {
                        data.map((item, index) => (
                            <StatsBadge key={index}
                                        label={width >= 1024 ? (width >= 1500 && width < 1920 ? item.shortLabel : item.label) : item.shortLabel}
                                        value={item.value}/>
                        ))
                    }
                </div>
            </div>
        </Spring>
    )
}

export default TeamStats