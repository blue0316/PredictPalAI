// styling
import styles from './styles.module.scss';

// components
import LazyImage from '@components/LazyImage';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// assets
import zidane from '@assets/zidane.webp';
import lacoruna from '@assets/clubs/lacoruna.webp';

const Coach = () => {
    const {direction} = useThemeProvider();

    return (
        <div className="card h-1 border-color-bottom card-padded p-relative" style={{borderColor: 'var(--accent)'}}>
            <div className={`${styles.media} ${styles[direction]}`}>
                <img src={zidane} alt="Zinedine Zidane"/>
            </div>
            <div className="d-flex flex-column justify-content-between h-100">
                <div className="d-flex flex-column g-4">
                    <span className="text-12">Head coach</span>
                    <h3>Zinedine <span className={styles.lastName}>Zidane</span></h3>
                </div>
                <LazyImage className="club-logo club-logo--md" src={lacoruna} alt="La Coruna"/>
            </div>
        </div>
    )
}

export default Coach