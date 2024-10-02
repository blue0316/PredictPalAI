// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import LazyImage from '@components/LazyImage';

// assets
import cover from '@assets/fans/grass.webp';
import avatar from '@assets/fans/press.webp';

const PRCard = () => {
    return (
        <Spring className="card h-2 d-flex flex-column">
            <LazyImage className={styles.media} src={cover} alt="media"/>
            <div className={`${styles.main} d-flex flex-column flex-1`}>
                <div className="d-flex flex-column align-items-center g-24">
                    <LazyImage className="avatar" src={avatar} alt="Tom Glover"/>
                    <div className="d-flex flex-column g-4">
                        <h2>Tom Glover</h2>
                        <span className="text-12">Press officer</span>
                    </div>
                </div>
                <p className={`${styles.main_text} flex-1`}>
                    Is your capability prepared for wholesale proposition growth? Seamless visibilities proactively
                    enable senior synergies.
                </p>
                <div className="d-flex justify-content-center g-20">
                    <button className="btn">Start chat</button>
                    <button className="btn btn--outlined">Call</button>
                </div>
            </div>
        </Spring>
    )
}

export default PRCard