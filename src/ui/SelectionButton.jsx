// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';

// utils
import PropTypes from 'prop-types';
import classNames from 'classnames';

const StyledButton = styled.button`
  height: 40px;
  border-radius: 8px;
  padding: 0 14px;
  transition: all var(--transition);
  line-height: 1;
  border: 1px solid var(--border);

  &.list {
    color: ${theme('theme', {
      light: 'var(--highlight)',
      dark: 'var(--text)',
    })};
    background-color: ${theme('theme', {
      light: 'var(--widget)',
      dark: 'var(--border)',
    })};
    
    &:hover, &:focus,
    &.active {
        ${theme('theme', {
          light: `
            filter: drop-shadow(0px 1px 8px rgba(110, 110, 110, 0.1));
            border-color: var(--widget);
        `,
          dark: `
            background-color: var(--widget);
            border-color: var(--widget);
            box-shadow: 0 1px 8px rgba(33, 33, 33, 0.1);
            color: var(--accent);
        `
        })};
    }
  }

  &.group {
    color: ${theme('theme', {
      light: 'var(--olive)',
      dark: 'var(--accent)',
    })};
    background-color: var(--widget);

    &:hover, &:focus,
    &.active {
      ${theme('theme', {
        light: `
            filter: drop-shadow(0px 1px 8px rgba(110, 110, 110, 0.1));
            border-color: var(--widget);
        `,
        dark: `
            background-color: var(--border);
        `
      })};
    }
  }
`;

const SelectionButton = ({text, onClick, active, type = 'list'}) => {
    return (
        <StyledButton className={classNames(`${type} h4`, {'active': active})} onClick={onClick}>
            {text}
        </StyledButton>
    )
}

SelectionButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    type: PropTypes.oneOf(['list', 'group'])
}

export default SelectionButton