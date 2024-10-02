import {useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';

const useStoreRoute = () => {
    const storeRoutes = ['/football-store', '/brand-store', '/product'];
    const location = useLocation();
    const [isStoreRoute, setIsStoreRoute] = useState(false);

    useEffect(() => {
        setIsStoreRoute(storeRoutes.includes(location.pathname));

        return () => {
            setIsStoreRoute(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return isStoreRoute;
}

export default useStoreRoute