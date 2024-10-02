import React, { useState } from "react";
import styles from "./styles.module.scss";
import RangeSlider from "@ui/RangeSlider";
import { useThemeProvider } from "@contexts/themeContext";
import Switch from "@ui/Switch";
import ScrollContainer from "@components/ScrollContainer";
import Spring from "@components/Spring";
import { useMeasure } from "react-use";
import ThemeToggle from "@components/ThemeToggle";
import RTLSwitch from "@widgets/RTLSwitch";
import DoubleRangeSlider from "@ui/DoubleRangeSlider";

const PaymentMethod = () => {
  const { theme, fontScale, direction, changeFontScale } = useThemeProvider();
  const [headerRef, { height: headerHeight }] = useMeasure();
  const [footerRef, { height: footerHeight }] = useMeasure();

  return (
    <div className={`card h-2 d-flex flex-column ${styles[theme]}`}>
      <h3 className="card_header" style={{ paddingBottom: 20 }}>
        Site Settings
      </h3>
      <ScrollContainer height={headerHeight + footerHeight}>
        <div className={`${styles.list} track`}>
          <Spring className={`${styles.item} ${styles[theme]} `} type="slideUp">
            <ThemeToggle />
          </Spring>
          <Spring className={`${styles.item} ${styles[theme]} `} type="slideUp">
            <RTLSwitch />
          </Spring>
          <Spring className={`${styles.item} ${styles[theme]} `} type="slideUp">
            <span
              style={{
                whiteSpace: "nowrap",
                marginRight: direction === "rtl" ? "0" : "0.5rem",
                marginLeft: direction === "rtl" ? "0.75rem" : "0",
              }}
            >
              Font Size
            </span>
            <DoubleRangeSlider
              value={fontScale}
              min={1}
              max={1.1}
              step={0.01}
              ariaLabel="Font Size Scale"
              onChange={(e) => changeFontScale(e.target.value)}
            />
          </Spring>
        </div>
      </ScrollContainer>
    </div>
  );
};

export default PaymentMethod;
