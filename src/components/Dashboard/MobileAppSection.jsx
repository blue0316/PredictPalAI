import React from 'react';
import GooglePlayStore from "../../assets/Images/mobile images and logos/google play store.png";
import AppStore from "../../assets/Images/mobile images and logos/apple play store.png";
import ScreenShot from "../../assets/Images/mobile images and logos/mobilescreen1.png";
import '../../styles/MobileAppSection.scss'; // Ensure to import your SCSS file

const MobileAppSection = () => {
  return (
    <div className="mobile-app-section">
      {/* New Platform Label */}
      <h2 className="platform-label">New Platform</h2>
      
      <div className="promo-container">
        {/* Left Section - Promo Text */}
        <div className="promo-text">
          <h2 className="promo-description">
            Get one of our sports apps, which is only available on mobile devices. Explore the features and enjoy seamless access to sports updates, live scores, and more!
          </h2>
          <div className="app-store-links">
            {/* App Store Links */}
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <img src={GooglePlayStore} alt="Google Play" className="app-store-icon" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={AppStore} alt="App Store" className="app-store-icon" />
            </a>
          </div>
        </div>
        
        {/* Right Section - App Preview */}
        <div className="app-preview">
          <img
            src={ScreenShot}
            alt="App Preview"
            className="app-screenshot" 
          />
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
