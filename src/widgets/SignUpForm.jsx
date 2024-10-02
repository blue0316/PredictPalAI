import { Fragment, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import classNames from "classnames";

import PasswordInput from "@components/PasswordInput";
import Spring from "@components/Spring";

import { signInWithGoogle, registerWithEmail, onAuthStateChanged } from "../firebase/auth";
import GoogleIcon from "../../src/assets/icons/google.svg";
import { login, profile } from "../features/users/userSlice";
import { useCreateUserProfileMutation } from "@api/UserProfle/userProfileApi";

const SignUpForm = ({ standalone = true }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
  } = useForm({
    mode: "onChange", // Validate on change
    defaultValues: {
      displayName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const [createUserProfile] = useCreateUserProfileMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Wrapper = standalone ? Fragment : Spring;
  const wrapperProps = standalone ? {} : { className: "card card-padded" };

  const handleCreate = async (newProfileData) => {
    try {
      const createdProfile = await createUserProfile(newProfileData).unwrap();
      return createdProfile.data;
    } catch (error) {
      console.error("Failed to create profile:", error);
    }
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
  }, [dispatch]);

  const onSubmit = async (data) => {
    try {
      const userCredential = await registerWithEmail(
        data.email,
        data.password,
        data.displayName
      );
      const user = userCredential.user;

      const createdProfile = await handleCreate({
        User_ID: user.uid,
        Email: user.email,
        Name: user.displayName,
      });

      dispatch(login(user));
      dispatch(profile(createdProfile));

      toast.success(
        `Account created! Please check your email ${data.email} to confirm your account.`
      );
      navigate("/dashboard");
    } catch (error) {
      toast.error(`Error creating account: ${error.message}`);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithGoogle();
      const user = userCredential.user;

      const createdProfile = await handleCreate({
        User_ID: user.uid,
        Email: user.email,
        Name: user.displayName,
      });

      dispatch(login(user));
      dispatch(profile(createdProfile));

      toast.success("Signed in with Google successfully!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(`Failed to sign in with Google: ${error.message}`);
    }
  };

  return (
    <Wrapper {...wrapperProps}>
      <div className="d-flex flex-column g-4">
        <h3>Create new account</h3>
        <p className="text-12">
          Fill out the form below to create a new account
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className="d-flex flex-column g-20"
          style={{ margin: "20px 0 30px" }}
        >
          <input
            className={classNames("field", {
              "field--error": errors.displayName,
            })}
            type="text"
            placeholder="Display Name"
            {...register("displayName", { required: "Display Name is required" })}
          />
          {errors.displayName && <p className="error">{errors.displayName.message}</p>}

          <input
            className={classNames("field", { "field--error": errors.email })}
            type="text"
            placeholder="E-mail"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <Controller
            control={control}
            name="password"
            rules={{ required: "Password is required" }}
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
          {errors.password && <p className="error">{errors.password.message}</p>}

          <Controller
            control={control}
            name="passwordConfirm"
            rules={{
              required: "Password confirmation is required",
              validate: (value) => value === watch("password") || "Passwords do not match",
            }}
            render={({
              field: { ref, onChange, value },
              fieldState: { error },
            }) => (
              <PasswordInput
                className={classNames("field", { "field--error": error })}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Confirm password"
                innerRef={ref}
              />
            )}
          />
          {errors.passwordConfirm && <p className="error">{errors.passwordConfirm.message}</p>}
        </div>

        <div className="d-flex justify-content-between align-items-center g-16">
          <button type="submit" className="btn flex-1" disabled={!isValid}>
            Create account
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn--google flex-1"
          >
            <img src={GoogleIcon} alt="Google Icon" style={{ width: "20px" }} />
            Sign up with Google
          </button>
        </div>
      </form>

      <div style={{ marginTop: "20px" }}>
        <p className="text-12">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </Wrapper>
  );
};

export default SignUpForm;
