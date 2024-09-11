// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';

// components
import Slider from '@mui/material/Slider';

// utils
import PropTypes from 'prop-types';

const StyledSlider = styled(Slider)`
  padding: 8px 0 !important;
  
  .MuiSlider-rail,
  .MuiSlider-track {
    height: 8px;
    border-radius: 4px;
    border: none !important;
  }

  .MuiSlider-rail {
    background-color: var(--border);
  }

  .MuiSlider-thumb {
    width: 20px;
    height: 20px;

    &:before, &:after {
      display: none;
    }
  }

  .MuiSlider-valueLabel {
    background: var(--tooltip-bg);
    box-shadow: 0 2px 16px rgba(75, 85, 110, 0.2);
    border-radius: 8px;
    font-family: var(--heading-font);
    color: var(--header);
    font-weight: 500;
    height: 30px;
    min-width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 0 8px !important;
    
    .MuiSlider-valueLabelLabel {
      font-size: 0.75rem;
      line-height: 1;
    }
  }

  .MuiSlider-track,
  .MuiSlider-thumb {
    background-color: ${theme('theme', {
    light: 'var(--grass)',
    dark: 'var(--accent)'
})};
    box-shadow: none !important;
  }
`;

const DoubleRangeSlider = ({min, max, value, onChange, valueLabelDisplay, valueText, ariaLabel, step = 1}) => {
    return (
        <StyledSlider
            getAriaLabel={() => ariaLabel}
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={onChange}
            valueLabelDisplay={valueLabelDisplay}
            getAriaValueText={valueText}
            valueLabelFormat={valueText}
        />
    )
}

DoubleRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    value: PropTypes.arrayOf(PropTypes.number).isRequired,
    onChange: PropTypes.func.isRequired,
    valueLabelDisplay: PropTypes.string.isRequired,
    valueText: PropTypes.func.isRequired,
    ariaLabel: PropTypes.string.isRequired,
    step: PropTypes.number
}

export default DoubleRangeSlider