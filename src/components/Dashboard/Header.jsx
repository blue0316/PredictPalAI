import React from 'react';
import '../../styles/Header.scss'; // Import the SCSS file
import profileImage from "../../assets/Images/main_Page_Images/Artur.jpeg";

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar-container"> {/* Centering the search bar */}
        <input
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="actions">
        {/* Go Premium Button */}
        <button className="button">Go Premium</button>
        
        {/* Lock Outlined Icon */}
        <button className="icon-button">
          <span className="material-icons">lock</span>
        </button>
        
        {/* Notification Outlined Icon */}
        <button className="icon-button">
          <span className="material-icons">notifications</span>
        </button>
        
        {/* Brightness Icon */}
        <button className="icon-button">
          <span className="material-icons">brightness_6</span>
        </button>
        
        {/* User Circular Avatar */}
        <img src={profileImage} className="profile-image" alt="Profile" />
      </div>
    </header>
  );
};

export default Header;
