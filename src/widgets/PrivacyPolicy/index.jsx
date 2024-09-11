// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import Switch from '@ui/Switch';
import PasswordInput from '@components/PasswordInput';

// hooks
import {useState} from 'react';

const PrivacyPolicy = () => {
    const [twoFactor, setTwoFactor] = useState(false)
    const [desktopNotifications, setDesktopNotifications] = useState(false)

    return (
        <Spring className="card card-padded d-flex flex-column g-20">
            <h3>Privacy Policy</h3>
            <div>
                <div className={`${styles.main} d-flex flex-column g-20`}>
                    <div className="d-flex flex-column g-6">
                        <div className="d-flex align-items-center justify-content-between g-20">
                            <h4>Two-factor Authentication</h4>
                            <Switch id="two-factor"
                                    checked={twoFactor}
                                    onChange={() => setTwoFactor(!twoFactor)}/>
                        </div>
                        <p className={styles.main_text}>
                            Two-factor authentication is an enhanced security measure.
                        </p>
                    </div>
                    <div className="d-flex flex-column g-6">
                        <div className="d-flex align-items-center justify-content-between g-20">
                            <h4>Show desktop notifications</h4>
                            <Switch id="desktop-notifications"
                                    checked={desktopNotifications}
                                    onChange={() => setDesktopNotifications(!desktopNotifications)}/>
                        </div>
                        <p className={styles.main_text}>
                            Choose the option you want as your default setting.
                        </p>
                    </div>
                </div>
                <div className="d-flex flex-column g-16">
                    <div className="d-flex flex-column g-6">
                        <h4>Delete Account:</h4>
                        <p>Permanently delete your account.</p>
                    </div>
                    <div className="d-flex flex-column g-16">
                        <PasswordInput placeholder="Account password"/>
                        <button className="btn">Delete Account</button>
                    </div>
                </div>
            </div>
        </Spring>
    )
}

export default PrivacyPolicy