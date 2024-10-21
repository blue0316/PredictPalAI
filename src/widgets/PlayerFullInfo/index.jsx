// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import LazyImage from '@components/LazyImage';
import InfoTabsNav from '@components/InfoTabsNav';
import {ReactComponent as Goal} from '@assets/goal.svg';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// assets
import kroos from '@assets/kroos.webp';

const PlayerFullInfo = () => {
    const {direction} = useThemeProvider();

    return (
        <Spring className="card height-w-2 flex flex-col">
            <div className="relative flex-1">
                <div className={`${styles.main} ${styles[direction]} flex flex-col gap-4`}>
                    <span className="player-number">8</span>
                    <div className="flex flex-col">
                        <h2 className="text-20">Toni Kroos</h2>
                        <span className="text-12">Central Midfielder</span>
                    </div>
                </div>
                <LazyImage className={`${styles.media} ${styles[direction]}`} src={kroos} alt="Toni Kroos" />
                <Goal className={styles.goal}/>
            </div>
            <InfoTabsNav/>
        </Spring>
    )
}

export default PlayerFullInfo