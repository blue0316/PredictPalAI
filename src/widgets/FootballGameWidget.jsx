import React, { useState, useEffect } from "react";

const FootballGameWidget = () => {
  const [leagueId, setLeagueId] = useState("39");

  const handleLinkClick = (event, id) => {
    event.preventDefault();
    setLeagueId(id);
  };

  return (
    <div>
      <div>
        <button className="_link" onClick={(e) => handleLinkClick(e, "39")}>
          England - Premier League
        </button>
        <button className="_link" onClick={(e) => handleLinkClick(e, "61")}>
          France - Ligue 1
        </button>
        <button className="_link" onClick={(e) => handleLinkClick(e, "78")}>
          Germany - Bundesliga 1
        </button>
      </div>

      <div
        id="wg-api-football-standings"
        data-host="v3.football.api-sports.io"
        data-key="5aac9f2906277dfc5543e2386deff7ce"
        data-league={leagueId}
        data-team=""
        data-season="2022"
        data-theme=""
        data-show-errors="false"
        data-show-logos="true"
        className="wg_loader"
      ></div>
    </div>
  );
};

export default FootballGameWidget;
