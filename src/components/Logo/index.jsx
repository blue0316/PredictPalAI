// styling
import styles from "./styles.module.scss";

// components
import { NavLink } from "react-router-dom";

// utils
import PropTypes from "prop-types";

const Logo = ({ size = "md" }) => {
  return (
    <div className={`${styles.logo} ${styles[size]}`} >
      <span className={styles.logo_highlight}>
        <span>soccer</span>
      </span>
      AI
    </div>
  );
};

Logo.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "xl"]),
};

export default Logo;
