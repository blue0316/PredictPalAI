// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import AnimatedCount from '@components/AnimatedCount';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// utils
import PropTypes from 'prop-types';
import classNames from 'classnames';

// constants
import CLUBS from '@constants/clubs';

// assets
import map_light from '@assets/fans/map_red_light.svg';
import map_dark from '@assets/fans/map_red_dark.svg';

const Map = () => {
    const {theme} = useThemeProvider();

    return (
        <div className={styles.media}>
            <img className={classNames(styles.media_img, {[styles.visible]: theme === 'light'})}
                 src={map_light}
                 alt="Local fans map"/>
            <img className={classNames(styles.media_img, {[styles.visible]: theme === 'dark'})}
                 src={map_dark}
                 alt="Local fans map"/>
        </div>
    )
}

const ClubFansMap = ({id}) => {

    const club = CLUBS.find(club => club.id === id);

    return (
        <Spring className="card h-1 card-padded p-relative">
            <Map/>
            <div className={`${styles.content} d-flex flex-column justify-content-between p-relative h-100`}>
                <h3>{club.shortName} fans</h3>
                <div className="d-flex flex-column g-4">
                    <div className="d-flex align-items-center g-8">
                        <img className="club-logo club-logo--sm" src={club.logo} alt={club.name}/>
                        <AnimatedCount className="h2" count={102000} isFormatted/>
                    </div>
                    <p className="text-12">Active Fans in Europe</p>
                </div>
            </div>
        </Spring>
    )
}

ClubFansMap.propTypes = {
    id: PropTypes.string.isRequired
}

export default ClubFansMap