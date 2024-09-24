import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

import facebookIcon from "../../assets/FaceBook.svg";
import instagramIcon from "../../assets/Instagram.svg";
import youtubeIcon from "../../assets/YouTube.svg";
import logo from "../../assets/logo/logo-light.png";
import ButtonWithHoverEffect from "@components/ButtonWithHoverEffect";

const SidebarTwo = () => {
  const location = useLocation();
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <nav className={styles.navLinks}>
        <Link
          className={`${styles.navLink} ${
            location.pathname === "/" ? styles.navLink_active : ""
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`${styles.navLink} ${
            location.pathname === "/about_us" ? styles.navLink_active : ""
          }`}
          to="/about_us"
        >
          About Us
        </Link>
        <Link
          className={`${styles.navLink} ${
            location.pathname === "/how_it_works" ? styles.navLink_active : ""
          }`}
          to="/how_it_works"
        >
          How It Works
        </Link>
        <Link
          className={`${styles.navLink} ${
            location.pathname === "/faq" ? styles.navLink_active : ""
          }`}
          to="/faq"
        >
          FAQ
        </Link>
        <Link
          className={`${styles.navLink} ${
            location.pathname === "/contact_us" ? styles.navLink_active : ""
          }`}
          to="/contact_us"
        >
          Contact Us
        </Link>
      </nav>
      <ButtonWithHoverEffect href="/login" text="Sign In" />
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

export default SidebarTwo;
