// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import LazyImage from '@components/LazyImage';
import {ReactComponent as Goal} from '@assets/goal.svg';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// assets
import realmadrid from '@assets/clubs/realmadrid.webp';
import hazard from '@assets/hazard.webp';
import cover from '@assets/santiago.webp';

const PlayerHighlight = () => {
    const {theme, direction} = useThemeProvider();

    return (
        <Spring className={`${styles.container} card h-1 no-shadow card-padded`}>
            <LazyImage className={`${styles.bg} cover`} src={cover} alt="media" />
            <Goal className={styles.bg_text}/>
            <img className={`${styles.player} ${direction === 'rtl' ? styles.rtl : ''}`}
                       src={hazard}
                       alt="Eden Hazard" />
            <div className={`${styles.main} d-flex flex-column justify-content-between h-100`}>
                <div>
                    <LazyImage className="club-logo" src={realmadrid} alt="Real Madrid" />
                    <h2 className={`${styles.name} light`}>Eden Hazard</h2>
                    <span className="h3 light">68'</span>
                </div>
                <span className={`${styles.main_label} ${theme === 'light' ? styles.light : styles.dark} h6 label`}>
                    After a pass from the left
                </span>
            </div>
        </Spring>
    )
}

export default PlayerHighlight