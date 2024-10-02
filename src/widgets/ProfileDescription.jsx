import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

import Spring from "@components/Spring";
import { useUpdateUserProfileMutation } from "@api/UserProfle/userProfileApi";
import { profile } from "@features/users/userSlice";

const schema = yup.object().shape({
  Bio: yup.string(),
});

const ProfileDescription = () => {
  const userId = useSelector((state) => state.user?.user?.uid);
  const profileData = useSelector((state) => state.user?.profile);

  const dispatch = useDispatch();

  const [updateUserProfile] = useUpdateUserProfileMutation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      Bio: profileData?.Bio || "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Extract only the Bio field
      const bioData = { Bio: data.Bio };

      const updatedProfile = await updateUserProfile({
        userId,
        profileData: bioData,
      }).unwrap();

      reset({
        Bio: updatedProfile.data.Bio,
      });

      await dispatch(profile(updatedProfile.data));
      toast.success("User description updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
      toast.error("Failed to update user description!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spring className="card card-padded h-2 d-flex flex-column g-20">
      <h3>Description</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column flex-1 g-30"
      >
        <Controller
          name="Bio"
          control={control}
          render={({ field }) => (
            <>
              <textarea
                {...field}
                className={`field flex-1 ${errors.Bio ? "is-invalid" : ""}`}
                placeholder="Please type the description for you."
              />
              {errors.Bio && (
                <span className="error-message">{errors.Bio.message}</span>
              )}
            </>
          )}
        />
        <div className="d-flex flex-column g-16">
          <button type="submit" className="btn" disabled={!isDirty}>
            {loading ? "Updating..." : "Update"}
          </button>
          {/* <button className="btn btn--outlined">Cancel</button> */}
        </div>
      </form>
    </Spring>
  );
};

export default ProfileDescription;
