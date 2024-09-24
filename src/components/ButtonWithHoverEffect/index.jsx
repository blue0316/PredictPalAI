import React from "react";
import styles from "./styles.module.scss"; // Import SCSS

const ButtonWithHoverEffect = ({ text, href }) => {
  return (
    <a href={href} className={styles.btnBa}>
      <svg x="0px" y="0px" viewBox="0 0 173.8 48.2">
        <g>
          <path
            className={styles.st0}
            d="M151,45H24C12.7,45,3.5,35.8,3.5,24.5v0C3.5,13.2,12.7,4,24,4h127c11.3,0,20.5,9.2,20.5,20.5v0
          C171.5,35.8,162.2,45,151,45z"
          />
        </g>
      </svg>
      {text}
    </a>
  );
};

export default ButtonWithHoverEffect;
