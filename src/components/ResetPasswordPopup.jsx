// components
import Popup from '@components/Popup';
import {toast} from 'react-toastify';

// hooks
import {useForm} from 'react-hook-form';

// utils
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ResetPasswordPopup = ({open, onClose}) => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const handleClose = () => {
        reset();
        onClose();
    }

    const onSubmit = data => {
        toast.info(`New password was sent to ${data.email}`);
        handleClose();
    }

    return (
        <Popup open={open} onClose={handleClose}>
            <div className="d-flex flex-column g-20">
                <div className="d-flex flex-column g-10">
                    <h2>Reset Password</h2>
                    <p>
                        Enter your email address below and we'll send you a link to reset your password.
                    </p>
                </div>
                <div className="d-flex flex-column g-16">
                    <form className="d-flex g-10" onSubmit={handleSubmit(onSubmit)}>
                        <input className={classNames('field', {'field--error': errors.email})}
                               type="text"
                               placeholder="example@domain.com"
                               {...register('email', {required: true, pattern: /^\S+@\S+$/i})}/>
                        <button className="btn">Send</button>
                    </form>
                    <p className="text-12">
                        If you don't receive an email within a few minutes, please check your spam folder.
                    </p>
                </div>
            </div>
        </Popup>
    )
}

ResetPasswordPopup.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default ResetPasswordPopup