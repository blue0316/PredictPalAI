import React from "react";
import styles from "./styles.module.scss";

const DateDisplay = () => {
  const currentDate = new Date();
  const day = currentDate.toLocaleString("en-US", { weekday: "long" });
  const date = currentDate.getDate();
  const time = currentDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={styles.dateContainer}>
      <div className={styles.dayText}>{day.toUpperCase()}</div>
      <div className={styles.dateText}>{date}</div>
      <div className={styles.timeText}>{time}</div>
    </div>
  );
};

export default DateDisplay;
