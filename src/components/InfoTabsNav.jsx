// hooks
import {useState} from 'react';

// utils
import PropTypes from 'prop-types';

const InfoTabsNav = ({variant = 'main'}) => {
    const [active, setActive] = useState('lineups');

    return (
        <div className="d-grid col-2">
            <button className={`btn--switch ${active === 'lineups' && 'active'} ${variant} `}
                    onClick={() => setActive('lineups')}>
                <span className="p-relative z-2">
                    Lineups
                </span>
            </button>
            <button className={`btn--switch ${active === 'goals' && 'active'} ${variant} `}
                    onClick={() => setActive('goals')}>
                <span className="p-relative z-2">
                    Goals
                </span>
            </button>
        </div>
    )
}

InfoTabsNav.propTypes = {
    variant: PropTypes.oneOf(['main', 'alt'])
}

export default InfoTabsNav