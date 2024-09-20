import React from "react";
import "./RTLSwitch.css"; // assuming you put the CSS in a separate file
import { useThemeProvider } from "@contexts/themeContext";

const RTLSwitch = () => {
  const { direction, toggleDirection } = useThemeProvider();

  return (
    <label className={`switch ${direction === "rtl" ? "switch--rtl" : ""}`}>
      <span
        style={{
          marginRight: direction === "rtl" ? "0" : "0.5rem",
          marginLeft: direction === "rtl" ? "0.75rem" : "0",
        }}
      >
        RTL
      </span>
      <input
        className="switch__input"
        type="checkbox"
        role="switch"
        checked={direction === "rtl"}
        onChange={toggleDirection}
      />
      <svg
        className="switch__letters"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"
        aria-hidden="true"
      >
        <g
          stroke="currentcolor"
          strokeLinecap="round"
          strokeWidth="4"
          transform="translate(0,4)"
        >
          <g className="switch__letter">
            <polyline className="switch__letter-stroke" points="2 2,2 14" />
            <polyline
              className="switch__letter-stroke"
              points="2 2,16 2"
              strokeDasharray="14 16"
              strokeDashoffset="8"
              transform="rotate(0,2,2)"
            />
            <polyline
              className="switch__letter-stroke"
              points="2 8,6 8"
              strokeDasharray="4 6"
            />
          </g>
          <g className="switch__letter" transform="translate(14,0)">
            <polyline className="switch__letter-stroke" points="2 2,2 14" />
            <polyline
              className="switch__letter-stroke"
              points="2 2,8 2"
              strokeDasharray="6 8"
            />
            <polyline
              className="switch__letter-stroke"
              points="2 8,6 8"
              strokeDasharray="4 6"
            />
          </g>
        </g>
      </svg>
      <span className="switch__text">Power</span>
    </label>
  );
};

export default RTLSwitch;
