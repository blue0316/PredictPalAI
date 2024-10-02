// components
import {toast} from 'react-toastify';

const CompareButton = ({isCartAction}) => {
    const handleClick = () => {
        toast.info('Product added to compare list');
    }

    return (
        <button className={isCartAction ? 'icon-btn icon-btn--cart' : ''}
                onClick={handleClick}
                aria-label="Add to compare list" style={{color: 'var(--nav-arrow)'}}>
            <i className="icon icon-compress text-16"/>
        </button>
    )
}

export default CompareButton