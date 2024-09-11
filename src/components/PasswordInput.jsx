// hooks
import {useState, useEffect} from 'react';

const PasswordInput = ({innerRef, ...props}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = e => {
        e.preventDefault();
        setIsPasswordVisible(!isPasswordVisible);
    }

    useEffect(() => {
        props.value === '' && setIsPasswordVisible(false);
    }, [props.value]);

    return (
        <div className="field-wrapper">
            <input className="field"
                   type={isPasswordVisible ? 'text' : 'password'}
                   ref={innerRef}
                   {...props}/>
            <button className="field-btn" onClick={togglePasswordVisibility} aria-label="Toggle password visibility">
                <i className={`icon icon-eye${isPasswordVisible ? '-slash' : '' }`}/>
            </button>
        </div>
    )
}

export default PasswordInput