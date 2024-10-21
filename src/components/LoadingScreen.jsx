// components
import Lottie from 'lottie-react';
import Spring from '@components/Spring';

// assets
import ball from '@assets/ball.json';

const LoadingScreen = () => {
    return (
        <Spring className="flex items-center justify-center flex-1 w-full h-full filter-gray">
            <Lottie animationData={ball} />
        </Spring>
    )
}

export default LoadingScreen