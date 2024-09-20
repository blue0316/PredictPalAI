import React, { useState, useEffect } from "react";
import { useUpdateUserProfileMutation } from "@api/UserProfle/userProfileApi";
import Spring from "@components/Spring";
import BasicCheckbox from "@ui/BasicCheckbox";
import { useSelector } from "react-redux";
import DoubleRangeSlider from "@ui/DoubleRangeSlider";
import { toast } from "react-toastify";

const NotificationsSettings = () => {
  const userId = useSelector((state) => state.user?.user?.uid);
  const profileData = useSelector((state) => state.user?.profile?.Setting);

  const [emailNotifications, setEmailNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [newCommentReplies, setNewCommentReplies] = useState(false);
  const [newMessages, setNewMessages] = useState(false);
  const [notificationsSchedule, setNotificationsSchedule] = useState([8, 18]);

  const [updateUserProfile] = useUpdateUserProfileMutation();

  useEffect(() => {
    if (profileData) {
      setEmailNotifications(profileData.email_notifications);
      setPushNotifications(profileData.push_notifications);
      setNewCommentReplies(profileData.new_comment_replies);
      setNewMessages(profileData.new_messages);

      const schedule = Array.isArray(profileData.notifications_schedule)
        ? profileData.notifications_schedule
        : [8, 18];
      setNotificationsSchedule(schedule);
    }
  }, [profileData]);

  const handleUpdateProfile = async () => {
    const updatedSettings = {
      email_notifications: emailNotifications,
      push_notifications: pushNotifications,
      new_comment_replies: newCommentReplies,
      new_messages: newMessages,
      notifications_schedule: notificationsSchedule,
    };

    try {
      const updatedProfile = await updateUserProfile({
        userId,
        profileData: { Setting: updatedSettings },
      }).unwrap();

      toast.success("Notification settings updated successfully!");
    } catch (error) {
      console.error("Failed to update notification settings:", error);
      toast.error("Failed to update notification settings.");
    }
  };

  return (
    <Spring className="card card-padded h-2 d-flex flex-column g-20">
      <h3>Notifications Settings</h3>
      <div className="d-flex flex-column g-14">
        <div className="d-flex align-items-center g-12">
          <BasicCheckbox
            id="email_notifications"
            color="grass"
            checked={emailNotifications}
            onChange={(e) => setEmailNotifications(e.target.checked)}
          />
          <label htmlFor="email_notifications">Email Notifications</label>
        </div>
        <div className="d-flex align-items-center g-12">
          <BasicCheckbox
            id="push_notifications"
            color="grass"
            checked={pushNotifications}
            onChange={(e) => setPushNotifications(e.target.checked)}
          />
          <label htmlFor="push_notifications">Push Notifications</label>
        </div>
        <div className="d-flex align-items-center g-12">
          <BasicCheckbox
            id="new_comment_replies"
            color="grass"
            checked={newCommentReplies}
            onChange={(e) => setNewCommentReplies(e.target.checked)}
          />
          <label htmlFor="new_comment_replies">New comment replies</label>
        </div>
        <div className="d-flex align-items-center g-12">
          <BasicCheckbox
            id="new_messages"
            color="grass"
            checked={newMessages}
            onChange={(e) => setNewMessages(e.target.checked)}
          />
          <label htmlFor="new_messages">New messages</label>
        </div>
      </div>
      <div>
        <h3>Notifications Schedule</h3>
        <p className="text-12">Choose how often you want to receive alerts</p>
      </div>
      <div className="d-flex flex-column g-16">
        <DoubleRangeSlider
          value={notificationsSchedule}
          min={0}
          max={24}
          step={0.5}
          ariaLabel="Notifications Schedule"
          valueText={(val) => `${val} hours`}
          onChange={(newValue) => {
            console.log("Slider newValue:", newValue);
            if (Array.isArray(newValue)) {
              setNotificationsSchedule(newValue);
            } else {
              console.error(
                "Expected an array for newValue, but got:",
                newValue
              );
            }
          }}
          valueLabelDisplay="on"
        />
      </div>
      <button onClick={handleUpdateProfile} className="btn btn-primary mt-3">
        Apply Notification Settings
      </button>
    </Spring>
  );
};

export default NotificationsSettings;
