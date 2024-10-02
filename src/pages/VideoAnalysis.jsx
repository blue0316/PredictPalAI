import React, { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import portugalFlag from '../assets/Images/main_Page_Images/portgal.png';
import belgiumFlag from '../assets/Images/main_Page_Images/belgium.png';
import playerImage from '../assets/Images/main_Page_Images/EdenHazard.png';
import AttackerTable from '../components/Dashboard/AttackerTable';
import Sidebar from '@components/Dashboard/Sidebar';
import Header from '@components/Dashboard/Header';
import '../styles/VideoAnalysis.scss';

const DEFAULT_IMAGE = "https://via.placeholder.com/150"; // Default placeholder image

const VideoAnalysis = () => {
  const [AttackFormat, setAttackFormat] = useState(false);

  const performanceData = [
    { minute: '0', portugal: 12, belgium: 15 },
    { minute: '15', portugal: 19, belgium: 22 },
    { minute: '30', portugal: 10, belgium: 18 },
    { minute: '45', portugal: 22, belgium: 25 },
    { minute: '60', portugal: 30, belgium: 30 },
    { minute: '75', portugal: 25, belgium: 35 },
    { minute: '90', portugal: 28, belgium: 33 },
  ];

  const handleAttackPlan = () => setAttackFormat(!AttackFormat);

  return (
    <>
      <Sidebar />
      <Header />
      <div className="video-analysis">
        <div className="left-section">
          <div className="match-info">
            <h2>Lusail Stadium</h2>
            <div className="flex">
              <div className="team">
                <img src={portugalFlag || DEFAULT_IMAGE} alt="Portugal Flag" />
                <span>Portugal</span>
              </div>
              <span className="text-3xl font-bold">vs</span>
              <div className="team">
                <img src={belgiumFlag || DEFAULT_IMAGE} alt="Belgium Flag" />
                <span>Belgium</span>
              </div>
            </div>
          </div>

          <div className="video-player">
            <img src="https://via.placeholder.com/800x400" alt="Video" />
            <div className="controls">
              <button><FaPlay /></button>
              <input type="range" />
              <button><FaPause /></button>
            </div>
          </div>

          <div className="performance-analysis">
            <h2>Performance Analysis</h2>
            <div className="performance-graph">
              <div className="legend">
                <div className="team-label">
                  <div className="color-box bg-red-500"></div>
                  <span>Portugal</span>
                </div>
                <div className="team-label">
                  <div className="color-box bg-blue-500"></div>
                  <span>Belgium</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="minute" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="portugal" stroke="#ef4444" />
                  <Line type="monotone" dataKey="belgium" stroke="#3b82f6" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="team-formation">
            <h2>Team Formation</h2>
            <div className="formation">
              <div className="team">
                <div className="team-header">
                  <img src={portugalFlag || DEFAULT_IMAGE} alt="Portugal Flag" />
                  <div className="info">
                    <h3>Portugal</h3>
                  </div>
                </div>
                <div className="formation-grid">
                  <div className="grid">
                    <div className="player">Player 1</div>
                    <div className="player">Player 2</div>
                    <div className="player">Player 3</div>
                    <div className="player">Player 4</div>
                  </div>
                </div>
              </div>
              <div className="team">
                <div className="team-header">
                  <img src={belgiumFlag || DEFAULT_IMAGE} alt="Belgium Flag" />
                  <div className="info">
                    <h3>Belgium</h3>
                  </div>
                </div>
                <div className="formation-grid">
                  <div className="grid">
                    <div className="player">Player 1</div>
                    <div className="player">Player 2</div>
                    <div className="player">Player 3</div>
                    <div className="player">Player 4</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="generate-button">
              <button onClick={handleAttackPlan}>Generate Attack Plan</button>
            </div>
           {/* Render Attack Table */}
           {AttackFormat && <AttackerTable />}
          </div>
        
        </div>
        

        <div className="right-sidebar">
          <div className="man-of-the-match">
            <h2>Man of the Match</h2>
            <div className="flex">
              <img src={playerImage || DEFAULT_IMAGE} alt="Player" />
              <div className="player-info">
                <span>Eden Hazard</span>
                <span>Midfielder</span>
              </div>
            </div>
          </div>

          <div className="team-statistics">
            <h2>Team Statistics</h2>
            <ul>
              <li><span>Possession</span><span>55%</span></li>
              <li><span>Shots on Target</span><span>12</span></li>
              <li><span>Corners</span><span>7</span></li>
            </ul>
          </div>

          <div className="team-lineup">
            <h2>Team Lineup</h2>
            <ul>
              <li><span>Cristiano Ronaldo</span><span>Forward</span></li>
              <li><span>Bernardo Silva</span><span>Midfielder</span></li>
              <li><span>Ruben Dias</span><span>Defender</span></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoAnalysis;
