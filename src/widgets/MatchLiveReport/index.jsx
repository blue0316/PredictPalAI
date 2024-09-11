// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';

// assets
import match from '@assets/match.mp4';

const MatchLiveReport = () => {
    return (
        <Spring className="card">
            <div className={styles.main}>
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <h2 className="h1">21:30</h2>
                        <span className="label h6">Today</span>
                    </div>
                    <span className="tag tag--accent animated h6">Hot</span>
                </div>
                <video className={`${styles.main_media} border-4`} autoPlay loop muted playsInline disablePictureInPicture>
                    <source src={match} type="video/mp4" />
                </video>
                <div className={styles.main_buttons}>
                    <button className="btn btn--icon">
                        <i className="icon icon-users-two"/> Lineups
                    </button>
                    <button className="btn">Broadcast</button>
                </div>
            </div>
            <div className="d-flex flex-column g-2 card-padded border-top">
                <h3>Real Madrid</h3>
                <h3>Deportivo la Coruna</h3>
            </div>
        </Spring>
    )
}

export default MatchLiveReport