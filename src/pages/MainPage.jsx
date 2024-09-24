import { motion } from "framer-motion";
import styles from "../components/LandingLayout/styles.module.scss";
import LandingLayout from "@components/LandingLayout/LandingLayout";
import playerImage from "../assets/player.png";
import DateDisplay from "@components/DateDisplay";

const floatingAnimation = {
  y: [0, -10, 0], // Float up and down
  transition: {
    duration: 3, // Duration of the floating animation
    ease: "easeInOut",
    repeat: Infinity, // Repeat infinitely
    repeatType: "loop" // Loop the animation
  },
};

const MainPage = () => {
  return (
    <LandingLayout title="PredictPalAI">
      <motion.img
        src={playerImage}
        alt="Player"
        className={styles.playerImage}
        width={878}
        height={1073}
        // initial={{ opacity: 0, y: 20 }}
        // animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        
        animate={floatingAnimation} 
      />

      <DateDisplay />

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h3 className={styles.title}>Don't Miss the Game</h3>

        <div className="p-relative">
          <p className={styles.loremText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div
            className={`${styles.decorationBarTwoWrapper} ${styles.wrapperTwoPosOne}`}
          >
            <span className={styles.decorationBarTwo}></span>
            <span className={styles.decorationBarTwo}></span>
            <span className={styles.decorationBarTwo}></span>
            <span className={styles.decorationBarTwo}></span>
          </div>

          <div
            className={`${styles.decorationBarTwoWrapper} ${styles.wrapperTwoPosTwo}`}
          >
            <span className={styles.decorationBarTwo}></span>
            <span className={styles.decorationBarTwo}></span>
            <span className={styles.decorationBarTwo}></span>
            <span className={styles.decorationBarTwo}></span>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <motion.button
            className={`${styles.button} ${styles.withBg}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Sign In
          </motion.button>
          <motion.button
            className={`${styles.button} ${styles.withOutBg}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            Read More
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className={styles.soccerContainer}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <div className={styles.soccerText}>PREDICTION TOURNAMENT</div>
        <h2 className={styles.soccerTitle}>SOCCER</h2>
      </motion.div>
    </LandingLayout>
  );
};

export default MainPage;