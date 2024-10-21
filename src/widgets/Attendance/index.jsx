// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import AnimatedCount from '@components/AnimatedCount';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

const Attendance = () => {
    const {theme} = useThemeProvider();

    return (
        <Spring className="card height-w-1 flex flex-col justify-between gap-3 relative">
            <div className="card_header flex flex-col relative z-2">
                <AnimatedCount className="h2 text-20" count={82754} separator="."/>
                <span className="text-12 text-overflow">Today attendance</span>
            </div>
            <div className={`${styles.media} ${styles[theme]}`}/>
            <div className="card_footer relative z-2">
                <h3>Santiago Bernabéu Stadium</h3>
                <span className="text-12">Mardid</span>
            </div>
        </Spring>
    )
}

export default Attendance