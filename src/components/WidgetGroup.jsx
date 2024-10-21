// components
import Spring from '@components/Spring';

// hooks
import {useWindowSize} from 'react-use';

const WidgetGroup = ({children}) => {
    const {width} = useWindowSize();

    return (
        <Spring className={`grid ${width >= 414 ? 'col-2' : 'col-1'} gap-6 h-full`}>
            {children}
        </Spring>
    );
}

export default WidgetGroup