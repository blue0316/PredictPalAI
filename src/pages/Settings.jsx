import React from 'react';
import { useSelector } from 'react-redux';
import { useGetUserProfileQuery } from '../api/UserProfle/userProfileApi';
import PageHeader from '@layout/PageHeader';
import AppGrid from '@layout/AppGrid';
import ProfileAvatar from '@widgets/ProfileAvatar';
import ProfileInfo from '@widgets/ProfileInfo';
import AccountSettings from '@widgets/AccountSettings';
import ChangePassword from '@widgets/ChangePassword';
import NotificationsSettings from '@widgets/NotificationsSettings';
import NotificationsSchedule from '@widgets/NotificationsSchedule';
import PaymentMethod from '@widgets/PaymentMethod';
import ProfileDescription from '@widgets/ProfileDescription';
import PrivacyPolicy from '@widgets/PrivacyPolicy';
import LoadingScreen from '@components/LoadingScreen';

const Settings = () => {
  const userId = useSelector((state) => state.user?.user?.uid);

  const { data: userProfile, isLoading, error } = useGetUserProfileQuery(userId);

  if (isLoading) return <LoadingScreen />
    
  if (error) return <div>Error loading user profile</div>;

  const widgets = {
    avatar: <ProfileAvatar userProfile={userProfile} />,
    info: <ProfileInfo userProfile={userProfile} />,
    settings: <AccountSettings userProfile={userProfile} />,
    description: <ProfileDescription userProfile={userProfile} />,
    notifications_settings: <NotificationsSettings userProfile={userProfile} />,
    notifications_schedule: <NotificationsSchedule userProfile={userProfile} />,
    payments: <PaymentMethod userProfile={userProfile} />,
    password: <ChangePassword userProfile={userProfile} />,
    privacy: <PrivacyPolicy userProfile={userProfile} />,
  };

  return (
    <>
      <PageHeader title="Settings" />
      <AppGrid id="settings" widgets={widgets} />
    </>
  );
};

export default Settings;
