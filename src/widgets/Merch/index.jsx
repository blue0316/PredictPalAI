// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import LazyImage from '@components/LazyImage';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// assets
import ball from '@assets/ball.webp';

const Merch = () => {
    const {direction} = useThemeProvider();

    return (
        <Spring className={`${styles.wrapper} card h-1`}>
            <div className={`${styles.main} ${styles[direction]}`}>
                <div className="d-flex flex-column g-8">
                    <span className="text-12">Official league ball</span>
                    <h3 className={styles.main_title}>Adidas Replique Ball</h3>
                </div>
                <button className="btn btn--sm">Details</button>
            </div>
            <LazyImage className={styles.media} src={ball} alt="Adidas ball" />
        </Spring>
    )
}

export default Merch