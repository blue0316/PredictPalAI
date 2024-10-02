import {useState, useEffect} from 'react';

const useMatchProgress = (currentMinute = 0) => {
    const [progress, setProgress] = useState(currentMinute);

    useEffect(() => {
        if (progress < 90) {
            setInterval(() => {
                setProgress((prevMinute) => prevMinute + 1);
            }, 60000);
        } else {
            setProgress(90);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return progress;
}

export default useMatchProgress