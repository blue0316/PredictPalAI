// styling
import styled from 'styled-components/macro';

// utils
import PropTypes from 'prop-types';

const StyledCheckbox = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--widget);
  flex-shrink: 0;

  input {
    display: none;

    & + label {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
      cursor: pointer;

      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        background: ${({color}) => color ? `var(--${color})` : 'var(--highlight)'};
        border-radius: 2px;
        transform: translate(-50%, -50%);
        transition: opacity var(--transition);
        opacity: 0;
      }
    }

    &:checked + label:after {
      opacity: 1;
    }
  }
`;

const BasicCheckbox = ({id, onChange, innerRef, color, ...props}) => {
    return (
        <StyledCheckbox className="d-flex align-items-center justify-content-center" color={color}>
            <input type="checkbox" id={id} onChange={onChange} ref={innerRef} {...props}/>
            <label htmlFor={id}/>
        </StyledCheckbox>
    )
}

BasicCheckbox.propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    innerRef: PropTypes.func,
    color: PropTypes.string
}

export default BasicCheckbox