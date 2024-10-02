import React from 'react';
import '../../styles/FootballMatchList.scss'; // Import SCSS

import Argentina from "../../assets/Images/main_Page_Images/argentina.png";
import Italy from "../../assets/Images/main_Page_Images/italy.png";
import Portugal from "../../assets/Images/main_Page_Images/portgal.png";
import Belgium from "../../assets/Images/main_Page_Images/belgium.png";
import Ghana from "../../assets/Images/main_Page_Images/ghana.png";
import Brazil from "../../assets/Images/main_Page_Images/brazil.png";
import Uruguay from "../../assets/Images/main_Page_Images/uroguay.png";
import Poland from "../../assets/Images/main_Page_Images/poland.png";
import Spain from "../../assets/Images/main_Page_Images/spainish.png";
import Czech from "../../assets/Images/main_Page_Images/zsech.png";

const matches = [
  {
    team1: { name: "Argentina", flag: Argentina },
    score: "1-2",
    team2: { name: "Italy", flag: Italy },
    status: "Full - Time",
    date: "18 December 2022",
  },
  {
    team1: { name: "Portugal", flag: Portugal },
    score: "2-3",
    team2: { name: "Belgium", flag: Belgium },
    status: "Full - Time",
    date: "18 December 2022",
  },
  {
    team1: { name: "Ghana", flag: Ghana },
    score: "1-3",
    team2: { name: "Brazil", flag: Brazil },
    status: "Full - Time",
    date: "17 December 2022",
  },
  {
    team1: { name: "Uruguay", flag: Uruguay },
    score: "2-2",
    team2: { name: "Poland", flag: Poland },
    status: "Full - Time",
    date: "17 December 2022",
  },
  {
    team1: { name: "Spain", flag: Spain },
    score: "3-3",
    team2: { name: "Czech", flag: Czech },
    status: "Full - Time",
    date: "16 December 2022",
  },
];

const FootballMatchList = () => {
  return (
    <div className="football-match-list">
      <h2>
        <span role="img" aria-label="cup">⚽</span> Football Matches
      </h2>
      {/* Tabs */}
      <div className="tabs">
        <span className="active">Latest Match</span>
        <span>Coming Match</span>
        <span>Pre-season</span>
        <span>Live Games</span>
        <span>Fun Football</span>
      </div>

      {/* Match List */}
      {matches.map((match, index) => (
        <div key={index} className="match">
          {/* Team 1 */}
          <div className="team">
            <img src={match.team1.flag} alt={match.team1.name} />
            <span>{match.team1.name}</span>
          </div>

          {/* Score */}
          <div className="score">{match.score}</div>

          {/* Team 2 */}
          <div className="team">
            <img src={match.team2.flag} alt={match.team2.name} />
            <span>{match.team2.name}</span>
          </div>

          {/* Status */}
          <div className="status">{match.status}</div>

          {/* Date */}
          <div className="date">{match.date}</div>

          {/* Icons */}
          <div className="icons">
            <button><i className="fas fa-chart-line"></i></button>
            <button><i className="fas fa-clock"></i></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FootballMatchList;
