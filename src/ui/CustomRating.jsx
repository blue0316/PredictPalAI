// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';

// components
import Rating from '@mui/material/Rating';
import {ReactComponent as BarIcon} from '@assets/bar.svg';
import {ReactComponent as StarFilledIcon} from '@assets/icons/star-solid.svg';
import {ReactComponent as StarEmptyIcon} from '@assets/icons/star-regular.svg';

// utils
import PropTypes from 'prop-types';

const StyledRating = styled(Rating)`
  display: flex;
  gap: 4px;
  
  &[data-compact='true'] {
    gap: 2px;
  }

  .MuiRating-iconFilled,
  .MuiRating-iconEmpty {
    background: transparent;
    width: 12px;
    height: 12px;
  }

  .MuiRating-iconFilled,
  .MuiRating-iconEmpty {
    color: var(--accent);
  }

  &.bars {
    justify-content: space-between;
    gap: 0;

    .MuiRating-iconFilled {
      color: var(--azure);
      background: var(--azure);
    }

    .MuiRating-iconEmpty {
      color: ${theme('theme', {
        light: 'var(--body)',
        dark: 'var(--border)'
      })};
    }

    .MuiRating-iconFilled,
    .MuiRating-iconEmpty {
      background: transparent;
      width: 50px;
      height: 6px;
      border-radius: 2px;
    }
  }

  .MuiRating-iconActive {
    transform: scale(1) !important;
  }
`;

const CustomRating = ({value, max = 5, readOnly = true, type = 'stars', isCompact, onChange}) => {
    return (
        <StyledRating
            defaultValue={value}
            precision={0.5}
            max={max}
            readOnly={readOnly}
            onChange={onChange}
            data-compact={isCompact}
            icon={type === 'stars' ? <StarFilledIcon fontSize="inherit"/> : <BarIcon fontSize="inherit"/>}
            emptyIcon={type === 'stars' ? <StarEmptyIcon fontSize="inherit"/> : <BarIcon fontSize="inherit"/>}
            classes={{
                root: type
            }}
        />
    )
}

CustomRating.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    readOnly: PropTypes.bool,
    type: PropTypes.oneOf(['stars', 'bars']),
    isCompact: PropTypes.bool,
    onChange: PropTypes.func
}

export default CustomRating