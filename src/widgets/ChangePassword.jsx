// components
import Spring from "@components/Spring";
import PasswordInput from "@components/PasswordInput";
import ResetPasswordPopup from "@components/ResetPasswordPopup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useCallback, useState } from "react";
import classNames from "classnames";
import {
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Yup validation schema
const schema = yup.object().shape({
  passwordOld: yup.string().required("Old password is required"),
  passwordNew: yup
    .string()
    .required("New password is required")
    .min(6, "New password must be at least 6 characters long"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("passwordNew"), null], "Passwords must match")
    .required("Please confirm your new password"),
});

const ChangePassword = () => {
  const user = useSelector((state) => state.user?.user);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      passwordOld: "",
      passwordNew: "",
      passwordConfirm: "",
    },
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = useCallback(
    async (data) => {
      if (user) {
        // Start loading indicator
        setLoading(true);

        // Re-authenticate the user with the old password
        const credential = EmailAuthProvider.credential(
          user.email,
          data.passwordOld
        );

        try {
          // Re-authenticate the user
          await reauthenticateWithCredential(user, credential);

          // Change the password to the new one
          await updatePassword(user, data.passwordNew);

          toast.success("Password changed successfully");
          navigate("/dashboard");
        } catch (error) {
          console.error("Error updating password:", error);
          toast.error(`Failed to change password: ${error.message}`);
        } finally {
          // Stop loading indicator
          setLoading(false);
        }
      } else {
        toast.error("User is not authenticated");
      }
    },
    [navigate, user]
  );

  const handleResetPassword = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <Spring className="card d-flex flex-column h-2 justify-content-between g-24 card-padded">
      <div className="d-flex flex-column g-8">
        <h3>Change password</h3>
        <p className="text-overflow">Change or reset your account password</p>
      </div>
      <form
        className="d-flex flex-column g-40"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="d-flex flex-column g-20">
          <Controller
            control={control}
            name="passwordOld"
            render={({
              field: { ref, onChange, value },
              fieldState: { error },
            }) => (
              <PasswordInput
                className={classNames("field", { "field--error": error })}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Old password"
                innerRef={ref}
              />
            )}
          />
          {errors.passwordOld && (
            <p className="error">{errors.passwordOld.message}</p>
          )}

          <Controller
            control={control}
            name="passwordNew"
            render={({
              field: { ref, onChange, value },
              fieldState: { error },
            }) => (
              <PasswordInput
                className={classNames("field", { "field--error": error })}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="New password"
                innerRef={ref}
              />
            )}
          />
          {errors.passwordNew && (
            <p className="error">{errors.passwordNew.message}</p>
          )}

          <Controller
            control={control}
            name="passwordConfirm"
            render={({
              field: { ref, onChange, value },
              fieldState: { error },
            }) => (
              <PasswordInput
                className={classNames("field", { "field--error": error })}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Confirm new password"
                innerRef={ref}
              />
            )}
          />
          {errors.passwordConfirm && (
            <p className="error">{errors.passwordConfirm.message}</p>
          )}

          <button
            className="text-button text-button--sm"
            onClick={handleResetPassword}
            style={{ alignSelf: "flex-start" }}
          >
            Reset password?
          </button>
        </div>
        <div className="d-flex flex-column g-16">
          <button className="btn" type="submit" disabled={loading}>
            {loading ? "Changing..." : "Change password"}
          </button>
          <button
            className="btn btn--outlined"
            type="reset"
            onClick={() => reset()}
          >
            Cancel
          </button>
        </div>
      </form>
      <ResetPasswordPopup open={open} onClose={() => setOpen(false)} />
    </Spring>
  );
};

export default ChangePassword;
