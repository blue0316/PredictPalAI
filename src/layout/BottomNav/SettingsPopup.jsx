// styling
import styles from './styles.module.scss';

// components
import Switch from '@ui/Switch';
import RangeSlider from '@ui/RangeSlider';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// utils
import loadable from '@loadable/component';
import PropTypes from 'prop-types';

// dynamic components
const Popup = loadable(() => import('components/Popup'));

const SettingsPopup = ({open, onClose}) => {
    const {theme, toggleTheme, direction, toggleDirection, fontScale, changeFontScale} = useThemeProvider();

    return (
        <Popup open={open} onClose={onClose}>
            <div className="d-flex flex-column g-20">
                <h3>Quick settings</h3>
                <div className="d-flex flex-column g-8">
                    <div className={styles.menu_item}>
                        <h4>Dark mode</h4>
                        <Switch checked={theme === 'dark'} onChange={toggleTheme} id="dark-mode"/>
                    </div>
                    <div className={styles.menu_item}>
                        <h4>RTL</h4>
                        <Switch checked={direction === 'rtl'} onChange={toggleDirection} id="rtl"/>
                    </div>
                    <div className={styles.menu_item}>
                        <h4>Font size</h4>
                        <RangeSlider value={fontScale}
                                     onChange={e => changeFontScale(e.target.value)}
                                     min={1}
                                     max={1.06}
                                     step={0.01}/>
                    </div>
                </div>
            </div>
        </Popup>
    )
}

SettingsPopup.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default SettingsPopup

