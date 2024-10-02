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
      <ul className={styles.navLinks}>
        <li className={styles.navLinkWrapper}>
          <Link
            className={`${styles.navLink} ${
              location.pathname === "/" ? styles.navLink_active : ""
            }`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li className={styles.navLinkWrapper}>
          <Link
            className={`${styles.navLink} ${
              location.pathname === "/about-us" ? styles.navLink_active : ""
            }`}
            to="/about-us"
          >
            About Us
          </Link>
        </li>
        <li className={styles.navLinkWrapper}>
          <Link
            className={`${styles.navLink} ${
              location.pathname === "/how-it-works" ? styles.navLink_active : ""
            }`}
            to="/how-it-works"
          >
            How It Works
          </Link>
        </li>
        <li className={styles.navLinkWrapper}>
          <Link
            className={`${styles.navLink} ${
              location.pathname === "/faq" ? styles.navLink_active : ""
            }`}
            to="/faq"
          >
            FAQ
          </Link>
        </li>
        <li className={styles.navLinkWrapper}>
          <Link
            className={`${styles.navLink} ${
              location.pathname === "/contact-us" ? styles.navLink_active : ""
            }`}
            to="/contact-us"
          >
            Contact Us
          </Link>
        </li>
      </ul>
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
