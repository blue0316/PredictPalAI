// styling
import styles from './styles.module.scss';

// components
import {Helmet} from 'react-helmet';
import Spring from '@components/Spring';
import Lottie from 'lottie-react';
import Logo from '@components/Logo';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// assets
import auth_shapes from '@assets/auth_shapes.json';

const AuthLayout = ({title, children}) => {
    const {theme} = useThemeProvider();

    return (
        <>
            <Helmet>
                <title>{title} | Soccer AI Game</title>
            </Helmet>
            <div className={styles.container}>
                <Spring className={`${styles.form} card card-padded`} type="slideUp">
                    {children}
                </Spring>
                <div className={`${styles.cover} ${theme === 'light' ? styles.light : styles.dark}`}>
                    <div className={styles.cover_logo}>
                        <Logo size="xl" />
                    </div>
                    <Lottie className={styles.cover_lottie}
                            animationData={auth_shapes}
                            renderer="svg"
                            rendererSettings={{preserveAspectRatio: 'xMidYMid slice'}} />
                </div>
            </div>
        </>
    )
}

export default AuthLayout