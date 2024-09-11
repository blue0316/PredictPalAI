import PasswordInput from "@components/PasswordInput";
import Spring from "@components/Spring";
import { Fragment } from "react";
import { toast } from "react-toastify";
import { useForm, Controller } from "react-hook-form";
import classNames from "classnames";
import { signInWithGoogle, registerWithEmail } from "../firebase/auth";
import { Link, useNavigate } from "react-router-dom"; 
import GoogleIcon from "../../src/assets/icons/google.svg";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../features/users/userSlice";

const SignUpForm = ({ standalone = true }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

 
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 

  const Wrapper = standalone ? Fragment : Spring;
  const wrapperProps = standalone ? {} : { className: "card card-padded" };

  const onSubmit = async (data) => {
    try {
      const userCredential = await registerWithEmail(data.email, data.password);
      const user = userCredential.user; 

      dispatch(login(user));

      toast.success(
        `Account created! Please check your email ${data.email} to confirm your account.`
      );
      navigate("/Dashboard"); 
    } catch (error) {
      toast.error(`Error creating account: ${error.message}`);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault(); 
    try {
      const userCredential = await signInWithGoogle();
      const user = userCredential.user;

      dispatch(login(user));

      toast.success("Signed in with Google successfully!");
      navigate("/Dashboard"); 
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
              "field--error": errors.firstName,
            })}
            type="text"
            placeholder="First name"
            {...register("firstName", { required: true })}
          />
          <input
            className={classNames("field", { "field--error": errors.lastName })}
            type="text"
            placeholder="Last name"
            {...register("lastName", { required: true })}
          />
          <input
            className={classNames("field", { "field--error": errors.email })}
            type="text"
            placeholder="E-mail"
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
          <Controller
            control={control}
            name="passwordConfirm"
            rules={{
              required: true,
              validate: (value) => value === watch("password"),
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
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <button type="submit" className="btn btn--sm">
            Create account
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn--sm btn--google"
          >
            <img src={GoogleIcon} alt="Google Icon" style={{ width: "20px" }} />
            Sign in with Google
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
