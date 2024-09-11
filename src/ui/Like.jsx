// hooks
import {useState} from 'react';

// utils
import PropTypes from 'prop-types';

const Like = ({isLiked = false, withText, readonly, qty = 0, color = 'red', isCartAction}) => {
    const [liked, setLiked] = useState(isLiked);

    const handleClick = () => {
        if (!readonly) {
            setLiked(!liked);
        }
    }

    return (
        <button className={isCartAction ? 'like icon-btn icon-btn--cart' : 'like'}
                onClick={handleClick}
                disabled={readonly}
                aria-label={liked ? 'Unlike' : 'Like'}>
            <span className={`like_icon ${color}`}>
                <i className="icon-heart-regular"/>
                <i className="icon-heart-solid" style={{opacity: liked ? 1 : 0}}/>
            </span>
            {withText && <span className="like_text h6">{qty}</span>}
        </button>
    )
}

Like.propTypes = {
    isLiked: PropTypes.bool,
    withText: PropTypes.bool,
    readonly: PropTypes.bool,
    qty: PropTypes.number,
    color: PropTypes.oneOf(['red', 'light']),
    isCartAction: PropTypes.bool
}

export default Like