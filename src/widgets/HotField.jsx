// components
import Spring from '@components/Spring';
import LazyImage from '@components/LazyImage';
import PlayerInfo from '@components/PlayerInfo';

// assets
import field from '@assets/field.webp';
import avatar from '@assets/players/11.webp';

const HotField = () => {
    return (
        <Spring className="card flex flex-col justify-between card-padded gap-5">
            <PlayerInfo avatar={avatar}
                        title="Gareth Bale"
                        subtitle="Field presence areas"
                        number={11} />
            <LazyImage src={field} alt="field" style={{width: '100%', height: 'auto'}} />
        </Spring>
    )
}

export default HotField