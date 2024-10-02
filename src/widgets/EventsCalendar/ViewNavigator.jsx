// styled components
import {Navigation} from './styles';

// components
import TabButton from '@ui/TabButton';

// utils
import PropTypes from 'prop-types';

const ViewNavigator = ({current, handler}) => {
    return (
        <Navigation className="tab-nav">
            <TabButton title="Month" active={current === 'month'} onClick={() => handler('month')}/>
            <TabButton title="Week" active={current === 'week'} onClick={() => handler('week')}/>
            <TabButton title="Day" active={current === 'day'} onClick={() => handler('day')}/>
        </Navigation>
    )
}

ViewNavigator.propTypes = {
    current: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired
}

export default ViewNavigator