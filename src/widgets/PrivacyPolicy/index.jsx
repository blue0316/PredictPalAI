import React from 'react';

import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import Switch from '@ui/Switch';
import PasswordInput from '@components/PasswordInput';

// hooks
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useUpdateUserProfileMutation } from '@api/UserProfle/userProfileApi';

const PrivacyPolicy = () => {
  const [blockDMs, setBlockDMs] = React.useState(false);
  const [privateAccount, setPrivateAccount] = React.useState(false);
  
  const userId = useSelector((state) => state.user?.user?.uid);
  const profileData = useSelector((state) => state.profile || {});

  const [updateUser] = useUpdateUserProfileMutation();


  const handleBlockDMsChange = () => {
    const newValue = !blockDMs;
    setBlockDMs(newValue);
    updateUser({
      userId,
      profileData: {
        Setting: {
          ...profileData.Setting,
          block_dms: newValue,
        },
      },
    });
  };

  const handlePrivateAccountChange = () => {
    const newValue = !privateAccount;
    setPrivateAccount(newValue);
    updateUser({
      userId,
      profileData: {
        Setting: {
          ...profileData.Setting,
          private_profile: newValue,
        },
      },
    });
  };


  return (
    <Spring className="card card-padded d-flex flex-column g-20">
      <h3>Privacy Policy</h3>
      <div>
        <div className={`${styles.main} d-flex flex-column g-20`}>
          <div className="d-flex flex-column g-6">
            <div className="d-flex align-items-center justify-content-between g-20">
              <h4>Block DMs</h4>
              <Switch
                id="block-dms"
                checked={blockDMs}
                onChange={handleBlockDMsChange}
              />
            </div>
            <p className={styles.main_text}>
              Toggle this setting to block or allow direct messages.
            </p>
          </div>
          <div className="d-flex flex-column g-6">
            <div className="d-flex align-items-center justify-content-between g-20">
              <h4>Private Account</h4>
              <Switch
                id="private-account"
                checked={privateAccount}
                onChange={handlePrivateAccountChange}
              />
            </div>
            <p className={styles.main_text}>
              Toggle this setting to make your account private or public.
            </p>
          </div>
        </div>
      </div>
    </Spring>
  );
};

export default PrivacyPolicy;
