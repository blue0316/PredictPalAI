import React from 'react';
import { Upload } from 'lucide-react';
import Sidebar from '@components/Dashboard/Sidebar';
import Header from '@components/Dashboard/Header';
import VideoBackGroundImage from "../assets/Images/main_Page_Images/videobackgroundPreview.png";
import Portugal from "../assets/Images/main_Page_Images/portgal.png";
import Belgium from "../assets/Images/main_Page_Images/belgium.png";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import "../styles/VideoGallery.scss"; // SCSS file


const VideoGallery = () => {
  const matchData = {
    stadium: 'Lusail Stadium',
    teams: {
      home: {
        name: 'Portugal',
        flag: '🇵🇹',
        score: 2,
        backgroundImage: Portugal,
      },
      away: {
        name: 'Belgium',
        flag: '🇧🇪',
        score: 3,
        backgroundImage: Belgium,
      },
    },
    goals: [
      { team: 'home', player: 'C. Ronaldo', minute: 15 },
      { team: 'home', player: 'C. Ronaldo', minute: 68 },
      { team: 'away', player: 'R. Lukaku', minute: 42 },
      { team: 'away', player: 'E. Hazard', minute: 58 },
      { team: 'away', player: 'E. Hazard', minute: 90 },
    ],
    scoreHistory: [
      { minute: 0, home: 0, away: 0 },
      { minute: 15, home: 1, away: 0 },
      { minute: 42, home: 1, away: 1 },
      { minute: 58, home: 1, away: 2 },
      { minute: 68, home: 2, away: 2 },
      { minute: 90, home: 2, away: 3 },
    ],
  };

  const videoThumbnail = VideoBackGroundImage; // Placeholder for thumbnails

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="video-gallery-container">
          {/* Match Summary */}
          <div className="match-summary">
            <div className="stadium-name">
              <h2>{matchData.stadium}</h2>
            </div>
            <div className="team-container">
              {/* Home Team */}
              <div className="team home-team">
                <div className="team-logo" style={{ backgroundImage: `url(${matchData.teams.home.backgroundImage})` }}></div>
                {/* <span className="team-flag">{matchData.teams.home.flag}</span> */}
                <div className="team-name">
                  {matchData.teams.home.name}
                </div>
                <p className="team-score">{matchData.teams.home.score}</p>
                <div className="goals">
                  {matchData.goals.filter((g) => g.team === 'home').map((goal, index) => (
                    <div key={index} className="goal">
                      {goal.player} {goal.minute}'
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Time Indicator */}
              <div className="full-time">FT</div>

              {/* Away Team */}
              <div className="team away-team">
                <div className="team-logo" style={{ backgroundImage: `url(${matchData.teams.away.backgroundImage})` }}></div>
                {/* <span className="team-flag">{matchData.teams.away.flag}</span> */}
                <div className="team-name">
                  {matchData.teams.away.name}
                </div>
                <p className="team-score">{matchData.teams.away.score}</p>
                <div className="goals">
                  {matchData.goals.filter((g) => g.team === 'away').map((goal, index) => (
                    <div key={index} className="goal">
                      {goal.player} {goal.minute}{goal.minute === 90 ? ' + 3' : ''}
                    </div>
                  ))}
                </div>
              </div>

              {/* Background Overlay */}
              <div className="background-overlay"></div>
            </div>
          </div>

          {/* Main Content Container */}
          <div className="content-container">
            {/* Upload Area */}
            <div className="upload-area">
              <Upload size={48} className="upload-icon" />
              <p>Drag and drop your video here.</p>
            </div>

            {/* Top Video */}
            <div className="top-video">
              <div className="video-thumbnail">
                <img src={videoThumbnail} alt="Top video thumbnail" />
              </div>
              <h3>Top Video</h3>
            </div>

            {/* Video Contest Statistic */}
            <div className="video-contest-statistic">
              <h3>Video Contest Statistic</h3>
              <div className="stat">
                <span>Like / Dislike</span>
                <div className="bar">
                  <div className="progress green" style={{ width: '80%' }}></div>
                </div>
                <span className="value">542 / 431</span>
              </div>
              <div className="stat">
                <span>Watch / Download</span>
                <div className="bar">
                  <div className="progress blue" style={{ width: '60%' }}></div>
                </div>
                <span className="value">450 / 350</span>
              </div>
            </div>
          </div>

          {/* Video Grid Section */}
          <div className="video-grid">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="video-card">
                <img src={videoThumbnail} alt="Video thumbnail" />
                <h3>Video Title {index + 1}</h3>
                <div className="video-description">
                  <p>Some brief description of the video content goes here.</p>
                  <button>Watch Now</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default VideoGallery;
