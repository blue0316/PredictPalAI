import React, { useState, useCallback } from "react";
import { useUpdateUserProfileMutation } from "@api/UserProfle/userProfileApi";
import Spring from "@components/Spring";
import BasicCheckbox from "@ui/BasicCheckbox";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { profile } from "@features/users/userSlice";

const NotificationsSettings = () => {
  const userId = useSelector((state) => state.user?.user?.uid);
  const settings = useSelector((state) => state.user?.profile?.Setting);

  const dispatch = useDispatch();

  const [emailNotifications, setEmailNotifications] = useState(
    settings?.email_notifications || false
  );
  const [pushNotifications, setPushNotifications] = useState(
    settings?.push_notifications || false
  );
  const [newCommentReplies, setNewCommentReplies] = useState(
    settings?.new_comment_replies || false
  );
  const [newMessages, setNewMessages] = useState(
    settings?.new_messages || false
  );

  const [updateUserProfile] = useUpdateUserProfileMutation();

  const handleUpdateProfile = useCallback(
    async (updatedSettings) => {
      try {
        const updatedProfile = await updateUserProfile({
          userId,
          profileData: {
            Setting: {
              ...settings,
              ...updatedSettings,
            },
          },
        }).unwrap();

        await dispatch(profile(updatedProfile.data));

        toast.success("Notification settings updated successfully!");
      } catch (error) {
        console.error("Failed to update notification settings:", error);
        toast.error("Failed to update notification settings.");
      }
    },
    [dispatch, settings, updateUserProfile, userId]
  );

  return (
    <Spring className="card card-padded d-flex flex-column g-20">
      <h3>Notifications Settings</h3>
      <div className="d-flex flex-column g-14">
        <div className="d-flex align-items-center g-12">
          <BasicCheckbox
            id="email_notifications"
            color="grass"
            checked={emailNotifications}
            onChange={(e) => {
              setEmailNotifications(e.target.checked);
              handleUpdateProfile({
                email_notifications: e.target.checked,
                push_notifications: pushNotifications,
                new_comment_replies: newCommentReplies,
                new_messages: newMessages,
              });
            }}
          />
          <label htmlFor="email_notifications">Email Notifications</label>
        </div>
        <div className="d-flex align-items-center g-12">
          <BasicCheckbox
            id="push_notifications"
            color="grass"
            checked={pushNotifications}
            onChange={(e) => {
              setPushNotifications(e.target.checked);
              handleUpdateProfile({
                email_notifications: emailNotifications,
                push_notifications: e.target.checked,
                new_comment_replies: newCommentReplies,
                new_messages: newMessages,
              });
            }}
          />
          <label htmlFor="push_notifications">Push Notifications</label>
        </div>
        <div className="d-flex align-items-center g-12">
          <BasicCheckbox
            id="new_comment_replies"
            color="grass"
            checked={newCommentReplies}
            onChange={(e) => {
              setNewCommentReplies(e.target.checked);
              handleUpdateProfile({
                email_notifications: emailNotifications,
                push_notifications: pushNotifications,
                new_comment_replies: e.target.checked,
                new_messages: newMessages,
              });
            }}
          />
          <label htmlFor="new_comment_replies">New comment replies</label>
        </div>
        <div className="d-flex align-items-center g-12">
          <BasicCheckbox
            id="new_messages"
            color="grass"
            checked={newMessages}
            onChange={(e) => {
              setNewMessages(e.target.checked);
              handleUpdateProfile({
                email_notifications: emailNotifications,
                push_notifications: pushNotifications,
                new_comment_replies: newCommentReplies,
                new_messages: e.target.checked,
              });
            }}
          />
          <label htmlFor="new_messages">New messages</label>
        </div>
      </div>
    </Spring>
  );
};

export default NotificationsSettings;
