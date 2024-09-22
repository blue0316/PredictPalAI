import React from "react";
import styles from "./Sidebar.module.scss";

import facebookIcon from "../../assets/FaceBook.svg";
import instagramIcon from "../../assets/Instagram.svg";
import youtubeIcon from "../../assets/YouTube.svg";
import logo from "../../assets/logo/logo-light.png";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <nav className={styles.navLinks}>
        <a href="#home">Home</a>
        <a href="#tournament">Tournament</a>
        <a href="#community">Community</a>
        <a href="#help">Help / FAQ</a>
        <button className={styles.signInButton}>Sign In</button>
      </nav>
      <div className={styles.socialLinks}>
        <a href="https://www.facebook.com" className={styles.facebook}>
          <img src={facebookIcon} alt="Facebook" className={styles.icon} />
        </a>
        <a href="https://www.instagram.com" className={styles.instagram}>
          <img src={instagramIcon} alt="Instagram" className={styles.icon} />
        </a>
        <a href="https://www.youtube.com" className={styles.youtube}>
          <img src={youtubeIcon} alt="YouTube" className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
