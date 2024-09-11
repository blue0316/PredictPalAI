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
            <div className={`${styles.main} d-flex flex-column g-16`}>
                <span>We will call you back</span>
                <div className="d-flex align-items-center g-14">
                    <IconButton color="blue-gradient" icon="phone-light" onClick={() => ref.current.click()}/>
                    <div className="d-flex flex-column g-4">
                        <a className="h2" href="tel:+88003254486" ref={ref}>8 800 3254486</a>
                        <h6 className="label text-highlight lh-1">24/7 Support</h6>
                    </div>
                </div>
            </div>
            <div className={`${styles.footer} d-grid col-2 g-24`}>
                <button className="btn">Start chat</button>
                <button className="btn btn--outlined">Voice call</button>
            </div>
        </Spring>
    )
}

export default StoreSupport