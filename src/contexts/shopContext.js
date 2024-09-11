import {useState, createContext, useContext, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import useScrollLock from '@hooks/useScrollLock';

const ShopContext = createContext(undefined);

export const ShopProvider = ({children}) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [filtersOpen, setFiltersOpen] = useState(false);
    const location = useLocation();
    const setIsLocked = useScrollLock();

    // close sidebar when route changes
    useEffect(() => {
        setFiltersOpen(false);
    }, [location]);

    useEffect(() => {
        if (filtersOpen) {
            setIsLocked(true);
        } else {
            setIsLocked(false);
        }

        return () => {
            setIsLocked(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filtersOpen]);

    return (
        <ShopContext.Provider value={{cartOpen, setCartOpen, filtersOpen, setFiltersOpen}}>
            {children}
        </ShopContext.Provider>
    )
}

export const useShopProvider = () => useContext(ShopContext);