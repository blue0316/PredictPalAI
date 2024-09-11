// components
import Lottie from 'lottie-react';
import Spring from '@components/Spring';

// assets
import ball from '@assets/ball.json';

const LoadingScreen = () => {
    return (
        <Spring className="d-flex align-items-center justify-content-center flex-1 w-100 h-100">
            <Lottie animationData={ball} />
        </Spring>
    )
}

export default LoadingScreen