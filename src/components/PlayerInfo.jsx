// components
import LazyImage from '@components/LazyImage';

// utils
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PlayerInfo = ({avatar, number, title, subtitle, wrapperClass, style = {}}) => {
    return (
        <div className={classNames(wrapperClass, {'d-flex justify-content-between align-items-center': avatar})}
             style={{...style}}>
            <div className="d-flex align-items-center g-12">
                {
                    avatar ?
                        <LazyImage className="square-avatar" src={avatar} alt={title}/>
                        :
                        <span className="player-number">{number}</span>
                }
                <div className="d-flex flex-column">
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