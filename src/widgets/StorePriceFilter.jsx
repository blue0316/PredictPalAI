// components
import Spring from '@components/Spring';
import Price from '@ui/Price';
import DoubleRangeSlider from '@ui/DoubleRangeSlider';

// hooks
import {useState} from 'react';

const valuetext = (value) => {
    return `${value}$`;
}

const StorePriceFilter = ({standalone = true}) => {
    const Wrapper = standalone ? Spring : 'div';
    const wrapperProps = standalone ? {className: 'card d-flex flex-column justify-content-between card-padded'} : {className: 'd-flex flex-column justify-content-between g-24'};
    const min = 5, max = 9999;
    const [value, setValue] = useState([min, max]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Wrapper {...wrapperProps}>
            <div>
                <h3>Price range</h3>
                <p className="text-12">Technical and tactical actions</p>
            </div>
            <div className="d-flex flex-column g-24">
                <DoubleRangeSlider
                    ariaLabel="Price range"
                    value={value}
                    min={min}
                    max={max}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    valueText={valuetext}
                />
                <div className="d-flex justify-content-between">
                    <Price price={value} isRange/>
                    <button className="btn btn--sm">Apply</button>
                </div>
            </div>
        </Wrapper>
    )
}

export default StorePriceFilter