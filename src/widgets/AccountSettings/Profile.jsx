import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import countryList from "react-select-country-list";
import { City } from "country-state-city";
import { PatternFormat } from "react-number-format";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// styling
import styles from "./styles.module.scss";

// components
import CustomSelect from "@ui/CustomSelect";
import { useUpdateUserProfileMutation } from "@api/UserProfle/userProfileApi";
import { profile } from "@features/users/userSlice";
import { DatePicker } from "@mui/x-date-pickers";

const schema = yup.object().shape({
  Name: yup.string().required("Name is required"),
  Email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  Phone: yup.string(),
  DOB: yup.date(),
  Country: yup.mixed(),
  City: yup.mixed(),
  Address: yup.string(),
  PostalCode: yup
    .string()
    .matches(/^\d{5}(?:[-\s]\d{4})?$/, "Invalid postal code format"),
});

const Profile = () => {
  const userId = useSelector((state) => state.user?.user?.uid);
  const profileData = useSelector((state) => state.user?.profile);

  const dispatch = useDispatch();

  const [updateUserProfile] = useUpdateUserProfileMutation();

  const [loading, setLoading] = useState(false);
  const [, setSelectedCountry] = useState();
  const [, setSelectedCity] = useState();
  const [cities, setCities] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
    control,
  } = useForm({
    defaultValues: {
      Name: profileData?.Name || "",
      Phone: profileData?.Phone || "",
      Email: profileData?.Email || "",
      DOB: profileData?.DOB ? new Date(profileData?.DOB) : new Date(),
      Country: profileData?.Country || "",
      City: profileData?.City || "",
      Address: profileData?.Address || "",
      PostalCode: profileData?.PostalCode || "",
    },
    resolver: yupResolver(schema),
    mode: "onChange", // Validate on change
  });

  useEffect(() => {
    if (userId) {
      // Fetch or update profile logic here
      console.log("User ID available:", userId);
    }
  }, [userId]);

  const getCountriesOptions = () => {
    let countries = countryList().getData();
    return countries;
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedCity(null);
    let options = [];
    const rawData = City.getCitiesOfCountry(country.value);
    rawData.map((item) => options.push({ value: item.name, label: item.name }));
    setCities(options);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const updatedProfile = await updateUserProfile({
        userId,
        profileData: data,
      }).unwrap();
      reset({
        Name: updatedProfile.data?.Name || "",
        Phone: updatedProfile.data?.Phone || "",
        Email: updatedProfile.data?.Email || "",
        DOB: updatedProfile.data?.DOB
          ? new Date(updatedProfile.data?.DOB)
          : new Date(),
        Country: updatedProfile.data?.Country || "",
        City: updatedProfile.data?.City || "",
        Address: updatedProfile.data?.Address || "",
        PostalCode: updatedProfile.data?.PostalCode || "",
      });
      await dispatch(profile(updatedProfile.data));
      toast.success("Your changes have been successfully saved!");
    } catch (error) {
      console.error("Failed to update profile:", error);
      toast.error("Failed to update your profile!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="d-flex flex-column g-20" onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.row}>
        <input
          className={classNames("field", { "field--error": errors.Name })}
          type="text"
          placeholder="Name"
          {...register("Name", { required: true })}
        />
        <Controller
          name="Phone"
          control={control}
          render={({ field }) => (
            <PatternFormat
              className={classNames("field", { "field--error": errors.Phone })}
              placeholder="Phone"
              format="+1 (###) ###-####"
              mask="_"
              getInputRef={field.ref}
              {...field}
            />
          )}
        />
      </div>
      <div className={styles.row}>
        <input
          className={classNames("field", { "field--error": errors.Email })}
          type="text"
          placeholder="Email"
          {...register("Email", { pattern: /^\S+@\S+$/i })}
          disabled={true}
        />
        <Controller
          name="DOB"
          control={control}
          render={({ field }) => (
            <DatePicker
              className={classNames(styles.field, {
                "field--error": errors.DOB,
              })}
              label="Birth date"
              slotProps={{
                textField: {
                  size: "small",
                  color: "primary",
                  InputProps: {
                    style: { color: "var(--text)" },
                  },
                  InputLabelProps: {
                    style: { color: "var(--text)" },
                  },
                },
              }}
              {...field}
            />
          )}
        />
      </div>
      <div className={styles.row}>
        <Controller
          name="Country"
          control={control}
          render={({ field }) => {
            return (
              <CustomSelect
                options={getCountriesOptions()}
                value={field.value}
                onChange={(value) => {
                  field.onChange(value);
                  handleCountryChange(value);
                }}
                placeholder="Country"
                isSearchable={true}
                variant="basic"
                innerRef={field.ref}
              />
            );
          }}
        />
        <Controller
          name="City"
          control={control}
          render={({ field }) => {
            return (
              <CustomSelect
                options={cities}
                value={field.value}
                onChange={(value) => {
                  field.onChange(value);
                  setSelectedCity(value);
                }}
                placeholder="City"
                isSearchable={true}
                variant="basic"
                innerRef={field.ref}
              />
            );
          }}
        />
      </div>
      <div className={styles.row}>
        <input
          className={classNames("field", { "field--error": errors.address })}
          type="text"
          placeholder="Address"
          {...register("Address")}
        />
        <input
          className={classNames("field", { "field--error": errors.zip })}
          type="text"
          placeholder="Postal code"
          {...register("PostalCode", { pattern: /^\d{5}(?:[-\s]\d{4})?$/i })}
        />
      </div>
      <div className={styles.footer}>
        <button className="btn" type="submit" disabled={!isDirty || !isValid}>
          {loading ? "Updating..." : "Update Profile"}
        </button>
        <button className="btn btn--outlined" type="reset" onClick={() => reset()}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Profile;
