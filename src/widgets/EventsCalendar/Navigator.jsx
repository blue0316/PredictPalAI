// styled components
import {Navigation} from './styles';

// components
import TabButton from '@ui/TabButton';

// utils
import PropTypes from 'prop-types';

const Navigator = ({date, handler}) => {
    const handlePrev = () => handler('PREV', date);
    const handleNext = () => handler('NEXT', date);

    return (
        <Navigation className="tab-nav">
            <TabButton title="Prev" onClick={handlePrev}/>
            <TabButton title="Today" onClick={handler}/>
            <TabButton title="Next" onClick={handleNext}/>
        </Navigation>
    )
}

Navigator.propTypes = {
    handler: PropTypes.func.isRequired
}

export default Navigator