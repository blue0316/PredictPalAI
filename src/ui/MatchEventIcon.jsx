// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';

// components
import {ReactComponent as SubstitutionIcon} from '@assets/icons/substitution.svg';

// hooks
import {useThemeProvider} from '@contexts/themeContext';

// utils
import PropTypes from 'prop-types';

const Icon = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${theme('theme', {
    light: 'var(--widget)',
    dark: 'var(--body)',
  })};
  color: ${theme('theme', {
    light: 'var(--header)',
    dark: 'var(--accent)',
  })};
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 16px rgba(75, 85, 110, 0.2);
  top: 50%;
  transform: translateY(-50%);

  .count {
    position: absolute;
    width: 14px;
    height: 14px;
    right: -7px;
    top: -7px;
    background: var(--accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 7px;
    font-family: var(--heading-font);
    font-weight: 500;
    color: var(--header-light);
  }
`;

const MatchEventIcon = ({type, count = 0, position}) => {
    const {direction} = useThemeProvider();

    const ltr = {
        left: position
    }

    const rtl = {
        right: position
    }

    return (
        <Icon style={direction === 'ltr' ? ltr : rtl}>
            {type === 'goal' && <i className="icon-ball"/>}
            {type === 'substitution' && <SubstitutionIcon className="icon-substitution rotate-center"/>}
            {type === 'finish' && <i className="icon-finish"/>}
            {count > 1 && <span className="count">{count}</span>}
        </Icon>
    )
}

MatchEventIcon.propTypes = {
    type: PropTypes.string.isRequired,
    count: PropTypes.number,
    position: PropTypes.number.isRequired
}

export default MatchEventIcon