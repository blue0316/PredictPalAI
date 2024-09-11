// styling
import styled from 'styled-components/macro';

// utils
import PropTypes from 'prop-types';

const StyledColorCheckbox = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: ${({color1}) => `var(--${color1})`};
  }

  ${({isDuo, color2}) => isDuo && `
        &:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 50%;
            height: 100%;
            z-index: 2;
            background: var(--${color2});
        }
    `}
  input {
    display: none;

    &:checked + label {
      opacity: 1;
    }
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 10;
    opacity: 0;
    transition: opacity var(--transition);

    .icon {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      background: var(--widget);
      transform: translate(-50%, -50%);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: ${({color1}) => `var(--${color1})`};
    }
  }
`;

const ColorCheckbox = ({id, color1, color2, checked, onChange, isDuo = false, type = 'checkbox', name}) => {
    return (
        <StyledColorCheckbox color1={color1} color2={color2} isDuo={isDuo}>
            <input
                type={type}
                checked={checked}
                onChange={onChange}
                id={id}
                name={name}
            />
            <label htmlFor={id}>
                <i className="icon icon-xmark"/>
            </label>
        </StyledColorCheckbox>
    )
}

ColorCheckbox.propTypes = {
    id: PropTypes.string.isRequired,
    color1: PropTypes.string.isRequired,
    color2: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    isDuo: PropTypes.bool,
    type: PropTypes.oneOf(['checkbox', 'radio'])
}

export default ColorCheckbox
