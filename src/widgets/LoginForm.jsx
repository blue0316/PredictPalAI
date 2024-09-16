import { useForm, Controller } from "react-hook-form";
import { useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { signInWithGoogle, signInWithEmail } from "../firebase/auth";
import GoogleIcon from "../../src/assets/icons/google.svg";
import classNames from "classnames";
import PasswordInput from "@components/PasswordInput";
import BasicCheckbox from "@ui/BasicCheckbox";
import ResetPasswordPopup from "@components/ResetPasswordPopup";
import { login } from "../features/users/userSlice";

const LoginForm = () => {
  const [open, setOpen] = useState(false);
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
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const onSubmit = async (data) => {
    try {
      const userCredential = await signInWithEmail(data.email, data.password);
      const user = userCredential.user; 

      dispatch(login(user));

      toast.success("Signed in successfully!");
      navigate("/dashboard"); 
    } catch (error) {
      toast.error(`Failed to sign in with email: ${error.message}`);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault(); 
    try {
      const userCredential = await signInWithGoogle();
      const user = userCredential.user;

      dispatch(login(user));

      toast.success("Signed in with Google successfully!");
      navigate("/dashboard"); 
    } catch (error) {
      toast.error(`Failed to sign in with Google: ${error.message}`);
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <>
      <h1>Account login</h1>
      <form>
        <div
          className="d-flex flex-column g-10"
          style={{ margin: "20px 0 30px" }}
        >
          <div className="d-flex flex-column g-20">
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
          <div className="d-flex align-items-center g-10">
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

        <div className="d-flex justify-content-between align-items-center">
          <button
            className="btn btn--sm"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Sign In Now
          </button>
          <button
            onClick={handleGoogleSignIn} // Trigger Google Sign-In
            className="btn btn--sm btn--google"
          >
            <img src={GoogleIcon} alt="Google Icon" style={{ width: "20px" }} />
            Sign in with Google
          </button>
        </div>
      </form>

      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "10px" }}
      >
        <p>
          Don't have an account?{" "}
          <NavLink to="/sign-up" className="text-link">
            Create an account
          </NavLink>
        </p>
      </div>

      <ResetPasswordPopup open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default LoginForm;
