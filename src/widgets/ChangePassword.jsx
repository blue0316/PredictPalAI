// components
import Spring from '@components/Spring';
import PasswordInput from '@components/PasswordInput';
import ResetPasswordPopup from '@components/ResetPasswordPopup';
import {Controller, useForm} from 'react-hook-form';
import {toast} from 'react-toastify';

// hooks
import {useState} from 'react';
import classNames from 'classnames';

const ChangePassword = () => {
    const [open, setOpen] = useState(false);
    const {handleSubmit, watch, reset, control} = useForm({
        defaultValues: {
            passwordOld: '',
            passwordNew: '',
            passwordConfirm: ''
        }
    });

    const onSubmit = data => {
        toast.success('Password changed successfully');
    }

    const handleResetPassword = e => {
        e.preventDefault();
        setOpen(true);
    }

    return (
        <Spring className="card d-flex flex-column justify-content-between g-24 card-padded">
            <div className="d-flex flex-column g-8">
                <h3>Change password</h3>
                <p className="text-overflow">Change or reset your account password</p>
            </div>
            <form className="d-flex flex-column g-40">
                <div className="d-flex flex-column g-20">
                    <Controller control={control}
                                name="passwordOld"
                                rules={{required: true}}
                                render={({field: {ref, onChange, value}, fieldState: {error}}) => (
                                    <PasswordInput
                                        className={classNames('field', {'field--error': error})}
                                        value={value}
                                        onChange={e => onChange(e.target.value)}
                                        placeholder="Old password"
                                        innerRef={ref}/>
                                )}
                    />
                    <Controller control={control}
                                name="passwordNew"
                                rules={{required: true}}
                                render={({field: {ref, onChange, value}, fieldState: {error}}) => (
                                    <PasswordInput
                                        className={classNames('field', {'field--error': error})}
                                        value={value}
                                        onChange={e => onChange(e.target.value)}
                                        placeholder="New password"
                                        innerRef={ref}/>
                                )}
                    />
                    <Controller control={control}
                                name="passwordConfirm"
                                rules={{
                                    required: true,
                                    validate: value => value === watch('passwordNew')
                                }}
                                render={({field: {ref, onChange, value}, fieldState: {error}}) => (
                                    <PasswordInput
                                        className={classNames('field', {'field--error': error})}
                                        value={value}
                                        onChange={e => onChange(e.target.value)}
                                        placeholder="Confirm new password"
                                        innerRef={ref}/>
                                )}
                    />
                    <button className="text-button text-button--sm"
                            onClick={handleResetPassword}
                            style={{alignSelf: 'flex-start'}}>
                        Reset password?
                    </button>
                </div>
                <div className="d-flex flex-column g-16">
                    <button className="btn" type="submit" onClick={handleSubmit(onSubmit)}>
                        Change password
                    </button>
                    <button className="btn btn--outlined" type="reset" onClick={reset}>
                        Cancel
                    </button>
                </div>
            </form>
            <ResetPasswordPopup open={open} onClose={() => setOpen(false)}/>
        </Spring>
    )
}

export default ChangePassword