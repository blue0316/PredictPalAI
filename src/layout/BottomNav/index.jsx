// styling
import styles from './styles.module.scss'

// components
import {NavLink} from 'react-router-dom';
import SearchPopup from './SearchPopup';
import SettingsPopup from './SettingsPopup';

// hooks
import {useState} from 'react';
import useStoreRoute from '@hooks/useStoreRoute';
import {useShopProvider} from '@contexts/shopContext';

const BottomNav = () => {
    const [searchPopupOpen, setSearchPopupOpen] = useState(false);
    const [settingsPopupOpen, setSettingsPopupOpen] = useState(false);
    const isStoreRoute = useStoreRoute();
    const {setCartOpen} = useShopProvider();

    return (
        <div className={styles.container}>
            <NavLink className={styles.button} to="/settings" aria-label="Account">
                <i className="icon-user"/>
            </NavLink>
            <NavLink className={styles.button} to="/" aria-label="Home">
                <i className="icon-house"/>
            </NavLink>
            {
                isStoreRoute && (
                    <button className={styles.button} aria-label="Shopping cart" onClick={() => setCartOpen(true)}>
                        <i className="icon-cart"/>
                    </button>
                )
            }
            <button className={styles.button}
                    aria-label="Search"
                    onClick={() => setSearchPopupOpen(true)}>
                <i className="icon-search"/>
            </button>
            <button className={styles.button}
                    aria-label="Settings"
                    onClick={() => setSettingsPopupOpen(true)}>
                <i className="icon-gear-regular"/>
            </button>
            <SearchPopup open={searchPopupOpen} onClose={setSearchPopupOpen}/>
            <SettingsPopup open={settingsPopupOpen} onClose={() => setSettingsPopupOpen(false)}/>
        </div>
    )
}

export default BottomNav