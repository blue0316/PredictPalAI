// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import CustomRating from '@ui/CustomRating';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

const Testimonial = ({data, index}) => {
    const {theme} = useThemeProvider();

    return (
        <Spring className={`${styles.container} ${theme === 'light' ? styles.light : styles.dark}`}
                type="slideUp"
                index={index}>
            <span className="square">
                <i className="icon icon-quote"/>
            </span>
            <p className={styles.text}>{data.text}</p>
            <div className="d-flex justify-content-between">
                <CustomRating value={data.rating} />
                <span className="text-12">{data.author}</span>
            </div>
        </Spring>
    )
}

export default Testimonial