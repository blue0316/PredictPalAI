import { useState, useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import classNames from "classnames";
import { ClipLoader } from "react-spinners";

import PasswordInput from "@components/PasswordInput";
import ResetPasswordPopup from "@components/ResetPasswordPopup";
import BasicCheckbox from "@ui/BasicCheckbox";

import {
  signInWithGoogle,
  signInWithEmail,
  onAuthStateChanged,
} from "../firebase/auth";
import GoogleIcon from "../../src/assets/icons/google.svg";
import { login, profile } from "../features/users/userSlice";
import { useCreateUserProfileMutation } from "@api/UserProfle/userProfileApi";

const LoginForm = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const [createUserProfile] = useCreateUserProfileMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreate = useCallback(
    async (newProfileData) => {
      try {
        const createdProfile = await createUserProfile(newProfileData).unwrap();
        return createdProfile.data;
      } catch (error) {
        console.error("Failed to create profile:", error);
      }
    },
    [createUserProfile]
  );

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmail(data.email, data.password);

      const createdProfile = await handleCreate({
        User_ID: userCredential.uid,
        Email: userCredential.email,
        Name: userCredential.displayName,
      });

      dispatch(login(userCredential));
      dispatch(profile(createdProfile));

      toast.success("Signed in successfully!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(`Failed to sign in with email: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setGoogleLoading(true);
    try {
      const userCredential = await signInWithGoogle();

      const createdProfile = await handleCreate({
        User_ID: userCredential.uid,
        Email: userCredential.email,
        Name: userCredential.displayName,
      });

      dispatch(login(userCredential));
      dispatch(profile(createdProfile));

      toast.success("Signed in with Google successfully!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(`Failed to sign in with Google: ${error.message}`);
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const createdProfile = await handleCreate({
            User_ID: user.uid,
            Email: user.email,
            Name: user.displayName,
          });

          dispatch(login(user));
          dispatch(profile(createdProfile));
          navigate("/dashboard");
        } catch (error) {
          console.error("Failed to create profile:", error);
        }
      }
    });

    return () => unsubscribe();
  }, [dispatch, handleCreate, navigate]);

  return (
    <>
      <h1>Account login</h1>
      <form>
        <div
          className="flex flex-col gap-2.5"
          style={{ margin: "20px 0 30px" }}
        >
          <div className="flex flex-col gap-5">
            <input
              className={classNames("field", { "field--error": errors.email })}
              type="text"
              placeholder="Login"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            <Controller
              control={control}
              name="password"
              rules={{ required: true }}
              render={({
                field: { ref, onChange, value },
                fieldState: { error },
              }) => (
                <PasswordInput
                  className={classNames("field", { "field--error": error })}
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder="Password"
                  innerRef={ref}
                />
              )}
            />
          </div>
          <div className="flex items-center gap-2.5">
            <Controller
              control={control}
              name="rememberMe"
              render={({ field: { ref, onChange, value } }) => (
                <BasicCheckbox
                  id="rememberMe"
                  checked={value}
                  onChange={(e) => onChange(e.target.checked)}
                  innerRef={ref}
                />
              )}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
        </div>

        <div className="flex justify-between items-center gap-4">
          <button
            className="btn flex-1"
            type="submit"
            onClick={handleSubmit(onSubmit)}
            disabled={loading}
          >
            {loading ? (
              <ClipLoader size={20} color={"#ffffff"} />
            ) : (
              "Sign In Now"
            )}
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn--google flex-1"
            disabled={googleLoading}
          >
            {googleLoading ? (
              <ClipLoader size={20} color={"#ffffff"} />
            ) : (
              <>
                <img
                  src={GoogleIcon}
                  alt="Google Icon"
                  style={{ width: "20px" }}
                />
                Sign in with Google
              </>
            )}
          </button>
        </div>
      </form>

      <div className="flex justify-center" style={{ marginTop: "10px" }}>
        <p className="text-12">
          Don't have an account?{" "}
          <NavLink
            to="/sign-up"
            className="text-link text-decoration-underline"
          >
            Create an account
          </NavLink>
        </p>
      </div>

      <ResetPasswordPopup open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default LoginForm;
