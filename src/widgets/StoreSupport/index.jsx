// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import IconButton from '@ui/IconButton';

// hooks
import {useRef} from 'react';

const StoreSupport = () => {
    const ref = useRef(null);

    return (
        <Spring className="card">
            <div className={`${styles.main} flex flex-col gap-4`}>
                <span>We will call you back</span>
                <div className="flex items-center gap-3.5">
                    <IconButton color="blue-gradient" icon="phone-light" onClick={() => ref.current.click()}/>
                    <div className="flex flex-col gap-1">
                        <a className="h2" href="tel:+88003254486" ref={ref}>8 800 3254486</a>
                        <h6 className="label text-highlight lheight-w-1">24/7 Support</h6>
                    </div>
                </div>
            </div>
            <div className={`${styles.footer} grid col-2 gap-6`}>
                <button className="btn">Start chat</button>
                <button className="btn btn--outlined">Voice call</button>
            </div>
        </Spring>
    )
}

export default StoreSupport