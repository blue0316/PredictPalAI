// components
import { useUpdateUserProfileMutation } from "@api/UserProfle/userProfileApi";
import Spring from "@components/Spring";
import { profile } from "@features/users/userSlice";
import DoubleRangeSlider from "@ui/DoubleRangeSlider";

// hooks
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const NotificationsSchedule = () => {
  const userId = useSelector((state) => state.user?.user?.uid);
  const settings = useSelector((state) => state.user?.profile?.Setting);

  const dispatch = useDispatch();

  const [value, setValue] = useState(
    settings?.notifications_schedule || [8, 18]
  );

  const [updateUserProfile] = useUpdateUserProfileMutation();

  const formatValue = (val) => {
    const rounded = Math.round(val * 2) / 2;
    const hours = Math.floor(rounded);
    const minutes = (rounded - hours) * 60;
    const minutesString = minutes.toFixed().padStart(2, "0");
    return hours + ":" + minutesString;
  };

  const handleUpdateProfile = useCallback(async () => {
    try {
      const updatedProfile = await updateUserProfile({
        userId,
        profileData: {
          Setting: {
            ...settings,
            notifications_schedule: value,
          },
        },
      }).unwrap();

      await dispatch(profile(updatedProfile.data));

      toast.success("Notification schedule updated successfully!");
    } catch (error) {
      console.error("Failed to update notification schedule:", error);
      toast.error("Failed to update notification schedule.");
    }
  }, [dispatch, settings, updateUserProfile, userId, value]);

  return (
    <Spring className="card card-padded d-flex flex-column g-20">
      <div>
        <h3>Notifications Schedule</h3>
        <p className="text-12">Choose how often you want to receive alerts</p>
      </div>
      <div className="d-flex flex-column g-16">
        <DoubleRangeSlider
          value={value}
          min={0}
          max={24}
          step={0.5}
          ariaLabel="Notifications Schedule"
          valueText={(val) => formatValue(val)}
          onChange={(e, val) => setValue(val)}
          valueLabelDisplay="on"
        />
        <button className="btn" onClick={handleUpdateProfile}>
          Apply
        </button>
      </div>
    </Spring>
  );
};

export default NotificationsSchedule;
