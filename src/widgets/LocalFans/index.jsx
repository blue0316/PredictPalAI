// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import ClubInfo from '@components/ClubInfo';
import AnimatedCount from '@components/AnimatedCount';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// utils
import classNames from 'classnames';

// assets
import map_light from '@assets/fans/map_blue_light.svg';
import map_dark from '@assets/fans/map_blue_dark.svg';

const Map = () => {
    const {theme} = useThemeProvider();

    return (
        <div className={classNames(styles.media, {
            [styles.dark]: theme === 'dark',
            [styles.light]: theme === 'light'
        })}>
            <img className={classNames(styles.media_img, {[styles.visible]: theme === 'light'})}
                 src={map_light}
                 alt="Local fans map"/>
            <img className={classNames(styles.media_img, {[styles.visible]: theme === 'dark'})}
                 src={map_dark}
                 alt="Local fans map"/>
        </div>
    )
}

const LocalFans = () => {
    return (
        <Spring className="card h-2 p-relative">
            <Map/>
            <div className="d-flex flex-column justify-content-between h-100 p-relative z-2">
                <ClubInfo wrapperClass="card_header" id="bvb" title="Local fans" subtitle="Borussia Dortmund"/>
                <div className="card_footer d-flex flex-column g-8">
                    <AnimatedCount className="h1" count={70525} formattedDecimals={3} isFormatted/>
                    <p className="text-12">Fans Clubs in North and South America</p>
                </div>
            </div>
        </Spring>
    )
}

export default LocalFans