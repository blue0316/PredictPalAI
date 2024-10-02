// components
import Spring from '@components/Spring';
import SizeGuide from '@components/SizeGuide';
import SizeSelector from '@ui/SizeSelector';

// hooks
import {useState} from 'react';

// constants
import {SIZES} from '@constants/shop';

const StoreSizesSelector = ({standalone = true}) => {
    const Wrapper = standalone ? Spring : 'div';
    const wrapperProps = standalone ? {className: 'card'} : {};
    const [popupOpen, setPopupOpen] = useState(false);

    const headerStyles = {
        padding: standalone? '30px 30px 20px' : '0 0 20px',
        borderBottom: '1px solid var(--border)'
    }

    const mainStyles = {
        padding: standalone ? '20px 30px 30px' : '20px 0 0'
    }

    return (
        <Wrapper {...wrapperProps}>
            <div className="d-flex justify-content-between" style={headerStyles}>
                <h3>Select size</h3>
                <button className="text-button" onClick={() => setPopupOpen(true)}>
                    Size table
                </button>
            </div>
            <div className="d-flex flex-wrap g-16" style={mainStyles}>
                {
                    SIZES.map(size => (
                        <SizeSelector key={size} size={size}/>
                    ))
                }
            </div>
            <SizeGuide open={popupOpen} onClose={() => setPopupOpen(false)}/>
        </Wrapper>
    )
}

export default StoreSizesSelector