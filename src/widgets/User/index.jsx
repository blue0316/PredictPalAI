// styling
import styles from './styles.module.scss';

// components
import LazyImage from '@components/LazyImage';
import Spring from '@components/Spring';

// assets
import fcb from '@assets/tickets/fcb.webp';
import avatar from '@assets/tickets/avatar.webp';

const User = () => {
    return (
        <Spring className="card d-flex flex-column">
            <LazyImage className={styles.cover} src={fcb} alt="cover" />
            <div className={styles.main}>
                <LazyImage className={styles.main_avatar} src={avatar} alt="Bryan Christensen"/>
                <div>
                    <h3 className="lh-1">Bryan Christensen</h3>
                    <span className="text-12">Commentator</span>
                </div>
            </div>
        </Spring>
    )
}

export default User