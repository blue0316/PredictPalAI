// components/Settings.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useGetUserProfileQuery, useUpdateUserProfileMutation, useCreateUserProfileMutation, useDeleteUserProfileMutation } from '../api/UserProfle/userProfileApi';
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

const widgets = {
    avatar: <ProfileAvatar />,
    info: <ProfileInfo />,
    description: <ProfileDescription />,
    settings: <AccountSettings />,
    payments: <PaymentMethod />,
    privacy: <PrivacyPolicy />,
    notifications_settings: <NotificationsSettings />,
    notifications_schedule: <NotificationsSchedule />,
    password: <ChangePassword />
}

const Settings = () => {
  const userId = useSelector(state => state.user?.user?.uid);

  const { data: userProfile, error, isLoading } = useGetUserProfileQuery(userId, { skip: !userId });
  const [updateUserProfile] = useUpdateUserProfileMutation();
  const [createUserProfile] = useCreateUserProfileMutation();
  const [deleteUserProfile] = useDeleteUserProfileMutation();

  const handleCreate = async (newProfileData) => {
    try {
      await createUserProfile(newProfileData).unwrap();
      alert('Profile created successfully!');
    } catch (error) {
      console.error('Failed to create profile:', error);
      alert('Failed to create profile');
    }
  };

  const handleUpdate = async (newProfileData) => {
    try {
      await updateUserProfile({ userId, profileData: newProfileData }).unwrap();
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Failed to update profile:', error);
      alert('Failed to update profile');
    }
  };

  const handleDelete = async () => {
    try {
      await deleteUserProfile(userId).unwrap();
      alert('Profile deleted successfully!');
    } catch (error) {
      console.error('Failed to delete profile:', error);
      alert('Failed to delete profile');
    }
  };

  if (!userId) return <div>Please log in to view your settings.</div>;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;

  return (
    <>
      <PageHeader title="Settings" />
      <AppGrid id="settings" widgets={widgets} />
      <button onClick={() => handleCreate({ name: 'New User' })}>Create Profile</button>
      <button onClick={() => handleUpdate({ name: 'Updated Name' })}>Update Profile</button>
      <button onClick={handleDelete}>Delete Profile</button>
    </>
  );
};

export default Settings;
