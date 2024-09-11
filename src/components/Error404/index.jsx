// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import {NavLink} from 'react-router-dom';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// utils
import classNames from 'classnames';

// assets
import dark404 from '@assets/404dark.webp';
import light404 from '@assets/404light.webp';

const Error404 = () => {
    const {theme} = useThemeProvider();

    return (
        <Spring className={`${styles.container} card d-flex align-items-center flex-1`}>
            <div className={styles.media}>
                <img className={classNames(styles.media_img, {[styles.visible]: theme === 'light'})}
                     src={light404}
                     alt="404"/>
                <img className={classNames(`${styles.media_img} ${styles.dark}`, {[styles.visible]: theme === 'dark'})}
                     src={dark404}
                     alt="404"/>
            </div>
            <div className={styles.main}>
                <h2 className={styles.main_title}>
                    Oops! <span>Page you are looking for is not found.</span>
                </h2>
                <p className={styles.main_text}>
                    Please check the URL in the address bar and try again.
                </p>
                <NavLink className="btn" to="/">Go to Home</NavLink>
            </div>
        </Spring>
    )
}

export default Error404