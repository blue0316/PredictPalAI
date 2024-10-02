import React from 'react';
import { FaTh, FaVideo, FaChartLine, FaTrophy, FaShoppingCart, FaUsers, FaStar } from 'react-icons/fa';
import logo from "../../assets/Images/main_Page_Images/logo-light 1.png";
import worldcupqatar from "../../assets/Images/sidebar_logo_imgs/1.png";
import championsLeaguq from "../../assets/Images/sidebar_logo_imgs/2.png";
import premierLeague from "../../assets/Images/sidebar_logo_imgs/3.png";
import Laliga from "../../assets/Images/sidebar_logo_imgs/4.png";
import Liguq from "../../assets/Images/sidebar_logo_imgs/5.png";
import ChelseaFC from "../../assets/Images/sidebar_logo_imgs/6.png";
import ManchesterCity from "../../assets/Images/sidebar_logo_imgs/7.png";
import BayenMunich from "../../assets/Images/sidebar_logo_imgs/8.png";
import '../../styles/Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Logo Section */}
      <div className="logo-section">
        <img src={logo} alt="PredictPalAI" className="logo" />
      </div>
      
      {/* Navigation Items */}
      <nav className="nav-section">
        <ul className="nav-list">
          <li className="nav-header">Menu</li>
          {[
            { icon: <FaTh />, title: 'Dashboard' },
            { icon: <FaVideo />, title: 'Video Gallery' },
            { icon: <FaChartLine />, title: 'Attack Planner' },
            { icon: <FaTrophy />, title: 'Contest' },
            { icon: <FaShoppingCart />, title: 'Shop' },
            { icon: <FaUsers />, title: 'Community' },
          ].map((item, index) => (
            <li key={index} className="nav-item">
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-item-title">{item.title}</span>
            </li>
          ))}
          
          <li className="nav-header">Football League</li>
          {[
            { img: worldcupqatar, title: 'Worldcup Qatar 2022' },
            { img: championsLeaguq, title: 'Champions League' },
            { img: premierLeague, title: 'Premier League' },
            { img: Laliga, title: 'La Liga' },
            { img: Liguq, title: 'Ligue 1' },
          ].map((item, index) => (
            <li key={index} className="nav-item">
              <img src={item.img} alt={item.title} className="nav-icon" />
              <span className="nav-item-title">{item.title}</span>
            </li>
          ))}
          
          <li className="nav-header">Favorite Club</li>
          {[
            { img: ChelseaFC, title: 'Chelsea FC' },
            { img: ManchesterCity, title: 'Manchester City' },
            { img: BayenMunich, title: 'Bayern Munich' },
          ].map((item, index) => (
            <li key={index} className="nav-item">
              <img src={item.img} alt={item.title} className="nav-icon" />
              <span className="nav-item-title">{item.title}</span>
              <FaStar className="nav-favorite-icon" />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;