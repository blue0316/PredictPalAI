import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles.module.scss";

// components
import Spring from "@components/Spring";
import Switch from "@ui/Switch";
import PasswordInput from "@components/PasswordInput";

import {
  useDeleteUserProfileMutation,
  useUpdateUserProfileMutation,
} from "@api/UserProfle/userProfileApi";
import { toast } from "react-toastify";
import { profile } from "@features/users/userSlice";
import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { deleteUserWithEmail } from "../../firebase/auth";

const PrivacyPolicy = () => {
  const user = useSelector((state) => state.user?.user);

  const [loading, setLoading] = useState(false);
  const [blockDMs, setBlockDMs] = useState(false);
  const [privateAccount, setPrivateAccount] = useState(false);
  const [password, setPassword] = useState("");

  const userId = useSelector((state) => state.user?.user?.uid);
  const settings = useSelector((state) => state.user?.profile?.Setting || {});

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [updateUserProfile] = useUpdateUserProfileMutation();
  const [deleteUserProfile] = useDeleteUserProfileMutation();

  const handleBlockDMsChange = useCallback(async () => {
    try {
      const newValue = !blockDMs;
      setBlockDMs(newValue);
      const updatedProfile = await updateUserProfile({
        userId,
        profileData: {
          Setting: {
            ...settings,
            block_dms: newValue,
          },
        },
      }).unwrap();

      await dispatch(profile(updatedProfile.data));

      toast.success("Privacy policy settings updated successfully!");
    } catch (error) {
      console.error("Failed to update privacy policy settings:", error);
      toast.error("Failed to update privacy policy settings.");
    }
  }, [blockDMs, dispatch, settings, updateUserProfile, userId]);

  const handlePrivateAccountChange = useCallback(async () => {
    try {
      const newValue = !privateAccount;
      setPrivateAccount(newValue);
      const updatedProfile = await updateUserProfile({
        userId,
        profileData: {
          Setting: {
            ...settings,
            private_profile: newValue,
          },
        },
      }).unwrap();

      await dispatch(profile(updatedProfile.data));
      toast.success("Privacy policy settings updated successfully!");
    } catch (error) {
      console.error("Failed to update privacy policy settings:", error);
      toast.error("Failed to update privacy policy settings.");
    }
  }, [dispatch, privateAccount, settings, updateUserProfile, userId]);

  const handleDeleteAccount = useCallback(async () => {
    if (user) {
      // Start loading indicator
      setLoading(true);

      // Re-authenticate the user with the old password
      const credential = EmailAuthProvider.credential(user.email, password);
      try {
        // Re-authenticate the user
        await reauthenticateWithCredential(user, credential);

        // Delete the user
        await deleteUserWithEmail(user);
        await deleteUserProfile(userId);
        await toast.success("Account deleted successfully!");
        navigate("/login");
      } catch (error) {
        console.error("Failed to delete account:", error);
        toast.error(
          "Failed to delete account. Please check your password and try again."
        );
      } finally {
        // Stop loading indicator
        setLoading(false);
      }
    } else {
      toast.error("User is not authenticated");
    }
  }, [deleteUserProfile, navigate, password, user, userId]);

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
        <div className="d-flex flex-column g-16">
          <div className="d-flex flex-column g-6">
            <h4>Delete Account:</h4>
            <p>Permanently delete your account.</p>
          </div>
          <div className="d-flex flex-column g-16">
            <PasswordInput
              placeholder="Account password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn" onClick={handleDeleteAccount}>
              {loading ? "Deleting..." : "Delete Account"}
            </button>
          </div>
        </div>
      </div>
    </Spring>
  );
};

export default PrivacyPolicy;
