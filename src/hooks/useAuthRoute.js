import {useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';

const useAuthRoute = () => {
    const authRoutes = ['/login', '/sign-up'];
    const location = useLocation();
    const [isAuthRoute, setIsAuthRoute] = useState(false);

    useEffect(() => {
        setIsAuthRoute(authRoutes.includes(location.pathname));

        return () => {
            setIsAuthRoute(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return isAuthRoute;
}

export default useAuthRoute