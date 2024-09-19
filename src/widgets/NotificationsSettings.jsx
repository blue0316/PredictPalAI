// components
import { useUpdateUserProfileMutation } from '@api/UserProfle/userProfileApi';
import Spring from '@components/Spring';
import BasicCheckbox from '@ui/BasicCheckbox';
import { useDispatch, useSelector } from 'react-redux';

const NotificationsSettings = () => {
    const userId = useSelector((state) => state.user?.user?.uid);
    const profileData = useSelector((state) => state.user?.profile);
  
    const dispatch = useDispatch();
  
    const [updateUserProfile] = useUpdateUserProfileMutation();

    return (
        <Spring className="card card-padded d-flex flex-column g-20">
            <h3>Notifications Settings</h3>
            <div className="d-flex flex-column g-14">
                <div className="d-flex align-items-center g-12">
                    <BasicCheckbox id="setting-1" color="grass" />
                    <label htmlFor="setting-1">Email Notifications</label>
                </div>
                <div className="d-flex align-items-center g-12">
                    <BasicCheckbox id="setting-2" color="grass" />
                    <label htmlFor="setting-2">Push Notifications</label>
                </div>
                <div className="d-flex align-items-center g-12">
                    <BasicCheckbox id="setting-3" color="grass" />
                    <label htmlFor="setting-3">New comment replies</label>
                </div>
                <div className="d-flex align-items-center g-12">
                    <BasicCheckbox id="setting-4" color="grass" />
                    <label htmlFor="setting-4">New messages</label>
                </div>
            </div>
        </Spring>
    )
}

export default NotificationsSettings