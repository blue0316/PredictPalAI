import React from 'react';
import "../../styles/HeroSection.scss"
import person1 from "../../assets/Images/main_Page_Images/dashboardLanding1.png";
import person2 from "../../assets/Images/main_Page_Images/dashboardLanding2.png";
import Mexico from "../../assets/Images/main_Page_Images/Mexico.png";
import Sweden from "../../assets/Images/main_Page_Images/Sweeden.png";
import RMA from "../../assets/Images/main_Page_Images/RMA.png";
import FCB from "../../assets/Images/main_Page_Images/FCB.svg.png";

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="player-container">
          <img src={person1} alt="Player 1" className="player-image" />
          <img src={person2} alt="Player 2" className="player-image" />
        </div>
        <div className="user-info">
          <h2>Welcome to <span>PredictPalAI</span>,</h2>
          <h3>Andrew Stark!</h3>
          <p>Friday, 20th September 2024</p>
        </div>
      </div>

      {/* Upcoming Matches Section */}
      <div className="upcoming-matches">
        <h2>Upcoming Match</h2>
        <div className="match">
          <div className="teams">
            <img src={Mexico} alt="Mexico" />
            <span className="score">MEX : SE</span>
            <img src={Sweden} alt="Sweden" />
          </div>
          <div className="countdown">
            <p>03 : 12 : 43 : 14</p>
            <div className="units">
              <span>Days</span>
              <span>Hours</span>
              <span>Minutes</span>
              <span>Seconds</span>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="match">
          <div className="teams">
            <img src={FCB} alt="Barcelona" />
            <span className="score">FCB : RMA</span>
            <img src={RMA} alt="Real Madrid" />
          </div>
          <div className="countdown">
            <p>03 : 12 : 43 : 14</p>
            <div className="units">
              <span>Days</span>
              <span>Hours</span>
              <span>Minutes</span>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="subscription-section">
        <h2>Subscription</h2>
        <p className="premium">PREMIUM</p>
        <div className="rewards">
          <p>Your Rewards</p>
          <p className="amount">2,200</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;