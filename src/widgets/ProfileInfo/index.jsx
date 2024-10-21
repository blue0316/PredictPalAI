// styling
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

// components
import Spring from "@components/Spring";

const ProfileInfo = () => {
  const profileData = useSelector((state) => state.user?.profile);
  
  return (
    <Spring className="card flex flex-col gap-4 card-padded">
      <h3>Profile info</h3>
      <ul className="flex flex-col justify-between flex-1 gap-3.5">
        <li className={styles.item}>
          <span className="font-semibold text-header">Full Name</span>
          <span className={`${styles.value} text-overflow`}>
            {profileData?.Name || "Anonymous User"}
          </span>
        </li>
        <li className={styles.item}>
          <span className="font-semibold text-header">Phone</span>
          <span className={`${styles.value} text-overflow`}>
            {profileData?.Phone || "Not registered"}
          </span>
        </li>
        <li className={styles.item}>
          <span className="font-semibold text-header">Full Name</span>
          <span className={`${styles.value} text-overflow`}>
            {profileData?.Email}
          </span>
        </li>
        <li className={styles.item}>
          <span className="font-semibold text-header">Location</span>
          <span className={`${styles.value} text-overflow`}>
            {profileData?.Country
              ? `${profileData?.City ? `${profileData?.City.label}, ` : ""}${
                  profileData?.Country.label
                }`
              : "Not registered"}
          </span>
        </li>
      </ul>
    </Spring>
  );
};

export default ProfileInfo;
