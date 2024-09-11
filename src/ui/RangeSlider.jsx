// styling
import styled from 'styled-components/macro';

// components
import Slider from '@mui/material/Slider';

// utils
import {memo} from 'react';

const StyledSlider = styled(Slider)`
  width: 76px !important;
  padding: 16px 0 !important;
  color: var(--highlight) !important;

  .MuiSlider-thumb {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    box-shadow: none !important;

    &:before, &:after {
      display: none;
    }
  }

  .MuiSlider-track,
  .MuiSlider-rail {
    height: 2px;
    border-radius: 1.5px;
  }

  .MuiSlider-rail {
    background-color: var(--border);
    opacity: 1;
  }
`;

const RangeSlider = ({value, onChange, step, min, max, ...props}) => {
    return (
        <StyledSlider
            value={value}
            onChange={onChange}
            step={step}
            min={min}
            max={max}
            {...props}
        />
    );
}

export default memo(RangeSlider);