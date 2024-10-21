// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// assets
import support_light from '@assets/support_light.webp';
import support_dark from '@assets/support_dark.webp';

// utils
import classNames from 'classnames';

const GeneralSupport = () => {
    const {theme, direction} = useThemeProvider();

    return (
        <Spring className="card flex flex-col height-w-1 card-padded relative">
            <div className={classNames(`cover ${styles[direction]}`, { [styles.cover_dark]: theme === 'dark' })}>
                <img src={theme === 'light' ? support_light : support_dark } alt="media" height="100%"/>
            </div>
            <div className="flex flex-col justify-between items-start flex-1 relative z-2">
                <div>
                    <h3>Get support</h3>
                    <p className="text-12">We will call you back</p>
                </div>
                <a className="inline-flex items-center gap-2.5 h3" href="tel:+1234567890">
                    <i className="icon-phone-solid" />
                    8 800 325 44 86
                </a>
                <button className="btn btn--sm">Start chat</button>
            </div>
        </Spring>
    )
}

export default GeneralSupport