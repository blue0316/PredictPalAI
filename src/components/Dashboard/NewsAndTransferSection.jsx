import React from 'react';
import image1 from "../../assets/Images/News And Transfer/1.jpeg";
import image2 from "../../assets/Images/News And Transfer/2.jpeg";
import image3 from "../../assets/Images/News And Transfer/3.jpeg";
import image4 from "../../assets/Images/News And Transfer/4.jpeg";
import image5 from "../../assets/Images/News And Transfer/5.jpeg";
import '../../styles/NewsAndTransferSection.scss'; // Ensure to import your SCSS file

// Dummy data for news
const newsItems = [
  {
    title: "Cristiano Ronaldo's Impact on Saudi League",
    date: "20 September 2024",
    image: image1,
  },
  {
    title: "Chelsea Sign New Midfielder for Record Fee",
    date: "19 September 2024",
    image: image2,
  },
  {
    title: "Premier League Match Highlights",
    date: "18 September 2024",
    image: image3,
  },
  {
    title: "Arsenal's Winning Streak Continues",
    date: "17 September 2024",
    image: image4,
  },
  {
    title: "Liverpool's Strong Performance This Season",
    date: "16 September 2024",
    image: image5,
  },
];

const NewsAndTransferSection = () => {
  return (
    <div className="news-transfer-section">
      <h2 className="news-title">
        <span role="img" aria-label="cup">📰</span> All News and Transfer Today
      </h2>
      
      {/* News list */}
      <div className="news-grid">
        {newsItems.map((news, index) => (
          <div key={index} className="news-card">
            <img
              src={news.image}
              alt={news.title}
              className="news-image"
            />
            <h3 className="news-title-item">{news.title}</h3>
            <p className="news-date">{news.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndTransferSection;
