// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// utils
import classNames from 'classnames';
import PropTypes from 'prop-types';

const StyledTabButton = styled.button`
  border-radius: 0;
  position: relative;
  background: ${theme('theme', {
    light: 'var(--body)',
    dark: 'var(--border)'
  })};

  &.active, &[aria-selected='true'], &:hover, &:focus {
    background: ${theme('theme', {
      light: 'var(--widget) !important',
      dark: 'var(--accent) !important'
    })};
    box-shadow: ${theme('theme', {
      light: '0 1px 8px rgba(110, 110, 110, 0.1);',
      dark: 'none'
    })};
  }

  .title {
    position: relative;
    z-index: 2;
  }

  .color {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 4px;
    top: 0;
    transition: width var(--transition);
  }

  &:first-of-type .color {
    &.ltr {
      left: 0;
    }

    &.rtl {
      right: 0;
    }
  }

  &:last-of-type .color {
    transform: scaleX(-1);

    &.ltr {
      right: 0;
    }

    &.rtl {
      left: 0;
    }
  }

  &[data-colored='true'] {
    &.active, &[aria-selected='true'], &:hover, &:focus {
      background: var(--widget) !important;
      box-shadow: none;

      .color {
        width: 100%;
      }

      &.dark-bg {
        color: #fff;
      }
    }
  }
`;

const TabButton = ({title, active, onClick, type = 'basic', color, value}) => {
    const {direction} = useThemeProvider();
    const darkColors = ['blue', 'purple'];

    return (
        <StyledTabButton
            className={classNames('btn text-overflow', {'active': active, 'dark-bg': darkColors.includes(color)})}
            data-colored={type === 'color'}
            value={value}
            onClick={onClick}>
            {
                type === 'color' && (
                    <span className={`color ${direction}`} style={{backgroundColor: `var(--${color})`}}/>
                )
            }
            <span className="title">
                {title}
            </span>
        </StyledTabButton>
    )
}

TabButton.propTypes = {
    title: PropTypes.string.isRequired,
    active: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['basic', 'color']),
    color: PropTypes.string
}

export default TabButton