// components
import ElementTooltip from '@ui/ElementTooltip';

// styling
import styles from './styles.module.scss';

// assets
import field from '@assets/pitch.webp';

// data placeholder
import pitch from '@db/pitch.js';

const Lineups = ({data = pitch, wrapperClass, withField, isCompact}) => {
    return (
        <div className={`${styles.container} ${wrapperClass || ''}`}>
            {
                withField && <img className={styles.field} src={field} alt="media"/>
            }
            <div className={styles.overlay}>
                {
                    data.map((player, index) => {
                        return (
                            <ElementTooltip key={index} title={player.name}>
                                <div className={`${styles.player} ${isCompact ? styles.compact : ''}`} data-role={player.role}>
                                    <img className={styles.player_img} src={player.avatar} alt="avatar"/>
                                    <span className={`${styles.player_num} h6`}>{player.number}</span>
                                </div>
                            </ElementTooltip>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Lineups

