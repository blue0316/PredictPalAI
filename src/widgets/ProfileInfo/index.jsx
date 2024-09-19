// styling
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

// components
import Spring from "@components/Spring";

const ProfileInfo = () => {
  const profileData = useSelector((state) => state.user?.profile);
  
  return (
    <Spring className="card d-flex flex-column g-16 card-padded">
      <h3>Profile info</h3>
      <ul className="d-flex flex-column justify-content-between flex-1 g-14">
        <li className={styles.item}>
          <span className="text-600 text-header">Full Name</span>
          <span className={`${styles.value} text-overflow`}>
            {profileData?.Name || "Anonymous User"}
          </span>
        </li>
        <li className={styles.item}>
          <span className="text-600 text-header">Phone</span>
          <span className={`${styles.value} text-overflow`}>
            {profileData?.Phone || "Not registered"}
          </span>
        </li>
        <li className={styles.item}>
          <span className="text-600 text-header">Full Name</span>
          <span className={`${styles.value} text-overflow`}>
            {profileData?.Email}
          </span>
        </li>
        <li className={styles.item}>
          <span className="text-600 text-header">Location</span>
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
