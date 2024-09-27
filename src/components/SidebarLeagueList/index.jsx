import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiFootballQuery from "@api/apiFootballQuery";

const query = apiFootballQuery();

// Helper function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const SidebarLeagueList = () => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    query({
      url: "/leagues",
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_FOOTBALL_API,
        "X-RapidAPI-Host": "v3.football.api-sports.io",
      },
      params: {
        current: true,
        country: "World",
      },
    }).then((response) => {
      if (response.data.response && response.data.response.length > 0) {
        let tmp = [];
        response.data.response.forEach((item) => {
          if (new Date(item.seasons[0].end) >= new Date()) {
            tmp.push(item);
          }
        });

        // Shuffle the array and pick the first 4 items
        const shuffledTmp = shuffleArray(tmp);
        const selectedLeagues = shuffledTmp.slice(0, 4);

        console.log(selectedLeagues);
        // Set the leagues state
        setLeagues(selectedLeagues);
      }
    });
  }, []);

  return (
    <div className="d-flex flex-column g-16">
      <h3 className="text-14 text-400 text-uppercase">Football League</h3>
      <ul className="d-flex flex-column g-20">
        {leagues.map((league) => (
          <li key={league.league.id}>
            <Link
              to={`/league/${league.league.id}`}
              className="d-flex align-items-center g-16 border-full h4"
            >
              <img
                src={league.league.logo}
                width={24}
                height={24}
                alt="League Logo"
                className="min-w-8 w-8 h-8 object-contain border-px border-solid border-full p-px"
              />
              <span className="text-12">{league.league.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarLeagueList;
