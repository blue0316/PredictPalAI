// styling
import styles from "./styles.module.scss";

// components
import { NavLink } from "react-router-dom";

// images
import lightLogo from "@assets/logo/logo-dark.png";
import darkLogo from "@assets/logo/logo-light.png";

// utils
import PropTypes from "prop-types";
import { useThemeProvider } from "@contexts/themeContext";

const Logo = ({ size = "md" }) => {
  const { theme } = useThemeProvider();
  return (
    <div className={`${styles.logo} ${styles[size]}`}>
      {/* PredictPal
      <span className={styles.logo_highlight}>
        <span>AI</span>
      </span> */}
      <img src={theme === "dark" ? darkLogo : lightLogo} alt="Site Logo" />
    </div>
  );
};

Logo.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "xl"]),
};

export default Logo;
