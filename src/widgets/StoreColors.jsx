// components
import Spring from '@components/Spring';
import ColorCheckbox from '@ui/ColorCheckbox';

// constants
import {COLORS} from '@constants/shop';

const StoreColors = ({standalone = true}) => {
    const Wrapper = standalone ? Spring : 'div';
    const wrapperProps = standalone ? {className: 'card d-flex flex-column justify-content-between card-padded'} : {className: 'd-flex flex-column g-20'};

    return (
        <Wrapper {...wrapperProps}>
            <h3>Available colors</h3>
            <div className="d-flex flex-wrap" style={{gap: '13px 15px'}}>
                {
                    COLORS.map(color => (
                        <ColorCheckbox key={color.id} type="checkbox" {...color}/>
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default StoreColors