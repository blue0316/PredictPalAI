// styling
import styles from './styles.module.scss';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

const SwiperControls = ({swiper}) => {
    const {direction} = useThemeProvider();

    const handlePrev = () => swiper.slidePrev();
    const handleNext = () => swiper.slideNext();

    return (
        <>
            <div className={`${styles.control} ${styles[direction]} ${styles.left}`}>
                <button onClick={handlePrev} aria-label="Previous">
                    <i className="icon-chevron-left"/>
                </button>
            </div>
            <div className={`${styles.control} ${styles[direction]} ${styles.right}`}>
                <button onClick={handleNext} aria-label="Next">
                    <i className="icon-chevron-right"/>
                </button>
            </div>
        </>
    )
}

export default SwiperControls