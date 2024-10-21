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
    const wrapperProps = standalone ? {className: 'card flex flex-col justify-between card-padded'} : {className: 'flex flex-col justify-between gap-6'};
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
            <div className="flex flex-col gap-6">
                <DoubleRangeSlider
                    ariaLabel="Price range"
                    value={value}
                    min={min}
                    max={max}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    valueText={valuetext}
                />
                <div className="flex justify-between">
                    <Price price={value} isRange/>
                    <button className="btn btn--sm">Apply</button>
                </div>
            </div>
        </Wrapper>
    )
}

export default StorePriceFilter