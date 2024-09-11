import {createContext, useContext, useEffect, useState} from 'react';
import {isRtlLang} from 'rtl-detect';

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({children}) => {
    const page = document.documentElement;
    const isRtl = isRtlLang(navigator.language);
    const browserTheme = window.matchMedia('(prefers-color-scheme: light)');
    const persisted = JSON.parse(localStorage.getItem('preferences') || '{}');

    const [theme, setTheme] = useState(persisted && persisted.theme ?  persisted.theme : (browserTheme.matches ? 'light' : 'dark'));
    const [fontScale, setFontScale] = useState(persisted.fontScale || 1);
    const [direction, setDirection] = useState(persisted.direction || (isRtl ? 'rtl' : 'ltr'));

    const stopTransition = () => {
        page.classList.add('no-transition');
        setTimeout(() => page.classList.remove('no-transition'), 100);
    }

    const savePreferences = () => {
        localStorage.setItem('preferences', JSON.stringify({
            theme,
            fontScale,
            direction
        }));
    }

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        stopTransition();
    }

    const changeFontScale = (scale) => {
        setFontScale(scale);
        stopTransition();
    }

    const toggleDirection = () => {
        setDirection(direction === 'ltr' ? 'rtl' : 'ltr');
        page.setAttribute('dir', direction);
    }

    useEffect(() => {
        page.style.setProperty('--font-scale', fontScale);
        page.style.setProperty('--widget-scale', fontScale === 1 ? '0px' : `${fontScale * 3}px`);
        page.setAttribute('dir', direction);
        savePreferences();

        window
            .matchMedia('(prefers-color-scheme: light)')
            .addEventListener('change', event => {
                event.matches ? setTheme('light') : setTheme('dark');
                stopTransition();
                savePreferences();
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme, fontScale, direction]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                fontScale,
                direction,
                toggleTheme,
                changeFontScale,
                toggleDirection
            }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useThemeProvider = () => useContext(ThemeContext);