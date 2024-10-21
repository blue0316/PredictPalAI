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
        <Spring className="card height-w-2 flex flex-col">
            <LazyImage className={styles.media} src={cover} alt="media"/>
            <div className={`${styles.main} flex flex-col flex-1`}>
                <div className="flex flex-col items-center gap-6">
                    <LazyImage className="avatar" src={avatar} alt="Tom Glover"/>
                    <div className="flex flex-col gap-1">
                        <h2>Tom Glover</h2>
                        <span className="text-12">Press officer</span>
                    </div>
                </div>
                <p className={`${styles.main_text} flex-1`}>
                    Is your capability prepared for wholesale proposition growth? Seamless visibilities proactively
                    enable senior synergies.
                </p>
                <div className="flex justify-center gap-5">
                    <button className="btn">Start chat</button>
                    <button className="btn btn--outlined">Call</button>
                </div>
            </div>
        </Spring>
    )
}

export default PRCard