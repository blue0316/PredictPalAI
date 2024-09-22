import React from "react";
import styles from "./styles.module.scss";
import Sidebar from "@pages/SideBar/SideBar";
import playerImage from "../../assets/player.png";
import soccerImage from "../../assets/soccer.png";
import DateDisplay from "./Date/DisplayDate";

const MainPage = () => {
  return (
    <div className={styles.backgroundContainer}>
      <DateDisplay />
      <Sidebar />

      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Don't Miss the Game</h1>
        </div>

        <p className={styles.loremText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>Sign In</button>
          <button className={styles.button}>Read More</button>
        </div>
      </div>

      <img src={playerImage} alt="Player" className={styles.playerImage} />

      <div className={styles.soccerContainer}>
        <img src={soccerImage} alt="Soccer" className={styles.soccerImage} />
        <div className={styles.soccerText}>PREDICTION TOURNAMENT</div>
      </div>
    </div>
  );
};

export default MainPage;
