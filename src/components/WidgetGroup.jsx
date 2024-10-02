// components
import Spring from '@components/Spring';

// hooks
import {useWindowSize} from 'react-use';

const WidgetGroup = ({children}) => {
    const {width} = useWindowSize();

    return (
        <Spring className={`d-grid ${width >= 414 ? 'col-2' : 'col-1'} g-24 h-100`}>
            {children}
        </Spring>
    );
}

export default WidgetGroup