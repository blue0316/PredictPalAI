// styling
import styled from 'styled-components/macro';

// utils
import PropTypes from 'prop-types';

const StyledCheckbox = styled.div`
  input[type="checkbox"] {
    display: none;
  }
  
  label {
    color: #BBCDD9;
    font-size: 1rem;
    transition: color var(--transition);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
    input[type="checkbox"]:checked + label {
        color: var(--grass);
    }
`;

const MinimalCheckbox = ({checked, onChange, id}) => {
    return (
        <StyledCheckbox>
            <input type="checkbox" checked={checked} onChange={onChange} id={id}/>
            <label htmlFor={id}>
                <i className="icon icon-check-solid"/>
            </label>
        </StyledCheckbox>
    )
}

MinimalCheckbox.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    id: PropTypes.string.isRequired
}

export default MinimalCheckbox