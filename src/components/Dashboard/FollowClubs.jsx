import React, { useRef, useState } from 'react';
import '../../styles/FollowClub.scss'; // Import SCSS
import chelsea from "../../assets/Images/follow Club/1.png";
import AstonVilla from "../../assets/Images/follow Club/2.png";
import Arsenal from "../../assets/Images/follow Club/3.png";
import LiverPool from "../../assets/Images/follow Club/4.png";
import Manu from "../../assets/Images/follow Club/5.png";
import WestHam from "../../assets/Images/follow Club/6.png";
import ManCity from "../../assets/Images/follow Club/7.png";
import Tottenham from "../../assets/Images/follow Club/8.png";

const FollowClub = () => {
  const [selectedClub, setSelectedClub] = useState('Chelsea'); // Default selected club
  const scrollContainerRef = useRef(null);

  const clubs = [
    { name: 'Chelsea', logo: chelsea },
    { name: 'Aston Villa', logo: AstonVilla },
    { name: 'Arsenal', logo: Arsenal },
    { name: 'Liverpool', logo: LiverPool },
    { name: 'Manchester United', logo: Manu },
    { name: 'West Ham', logo: WestHam },
    { name: 'Manchester City', logo: ManCity },
    { name: 'Tottenham', logo: Tottenham },
  ];

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -100, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 100, behavior: 'smooth' });
  };

  return (
    <div className="follow-club">
      <h2>
        <span role="img" aria-label="flag">🎮 </span> Follow Club
      </h2>

      <div className="club-container">
        {/* Left scroll button */}
        <button onClick={scrollLeft} className="scroll-btn left">
          ←
        </button>

        {/* Scrollable logos */}
        <div ref={scrollContainerRef} className="scroll-container">
          {clubs.map((club, index) => (
            <div key={index} className="club">
              <div
                className={`club-logo ${selectedClub === club.name ? 'selected' : ''}`}
                onClick={() => setSelectedClub(club.name)}
              >
                <img src={club.logo} alt={club.name} />
              </div>
            </div>
          ))}
        </div>

        {/* Right scroll button */}
        <button onClick={scrollRight} className="scroll-btn right">
          →
        </button>
      </div>
    </div>
  );
};

export default FollowClub;
