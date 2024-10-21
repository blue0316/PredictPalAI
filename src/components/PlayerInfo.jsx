// components
import LazyImage from '@components/LazyImage';

// utils
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PlayerInfo = ({avatar, number, title, subtitle, wrapperClass, style = {}}) => {
    return (
        <div className={classNames(wrapperClass, {'flex justify-between items-center': avatar})}
             style={{...style}}>
            <div className="flex items-center gap-3">
                {
                    avatar ?
                        <LazyImage className="square-avatar" src={avatar} alt={title}/>
                        :
                        <span className="player-number">{number}</span>
                }
                <div className="flex flex-col">
                    <h3>{title}</h3>
                    <span className="text-12">{subtitle}</span>
                </div>
            </div>
            {
                avatar && <span className="player-number">{number}</span>
            }
        </div>
    )
}

PlayerInfo.propTypes = {
    avatar: PropTypes.string,
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    wrapperClass: PropTypes.string
}

export default PlayerInfo