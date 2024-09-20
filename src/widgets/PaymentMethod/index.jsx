import React from 'react';
import styles from './styles.module.scss';
import RangeSlider from '@ui/RangeSlider';
import { useThemeProvider } from '@contexts/themeContext';
import Switch from '@ui/Switch';

const PaymentMethod = () => {
    const { theme, toggleTheme, fontScale, changeFontScale, direction, toggleDirection } = useThemeProvider();

    return (
        <div className={`card h-2 d-flex flex-column ${styles[theme]}`}>
            <h3 className="card_header" style={{ paddingBottom: 20 }}>
                Settings
            </h3>
            <div className={`${styles.list} settings`}>
                <div className={`${styles.item} setting-item`}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button className={`${styles.control} h5`} onClick={toggleTheme}>
                            <i className={`icon-${theme === 'light' ? 'moon' : 'sun'}`}/>
                            Theme
                        </button>
                    </div>
                </div>
                <div className={`${styles.item} setting-item`}>
                    <label>
                        <Switch
                            checked={direction === 'rtl'}
                            onChange={toggleDirection}
                        />
                        RTL
                    </label>
                </div>
                <div className={`${styles.item} setting-item`}>
                    <label>
                        Font Size
                        <RangeSlider
                            value={fontScale}
                            onChange={(e) => changeFontScale(e.target.value)}
                            min={1}
                            max={1.06}
                            step={0.01}
                        />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;
