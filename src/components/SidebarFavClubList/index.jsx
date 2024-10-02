import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiFootballQuery from "@api/apiFootballQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const query = apiFootballQuery();

const SidebarFavClubList = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const teamIds = [529, 530, 532];

    Promise.all(
      teamIds.map((id) =>
        query({
          url: "/teams",
          method: "GET",
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_FOOTBALL_API,
            "X-RapidAPI-Host": "v3.football.api-sports.io",
          },
          params: {
            id: id,
            country: "Spain",
          },
        })
      )
    ).then((responses) => {
      let tmp = [];
      console.log(responses);
      responses.forEach((item) => {
        if (item.data.response && item.data.response.length > 0) {
          tmp.push(item.data.response[0]);
        }
      });

      console.log(tmp);
      setTeams(tmp);
    });
  }, []);

  return (
    <div className="d-flex flex-column g-16">
      <h3 className="text-14 text-400 text-uppercase">Favorite club</h3>
      <ul className="d-flex flex-column g-20">
        {teams.map((team) => (
          <li key={team.team.id}>
            <Link
              to={`/team/${team.team.id}`}
              className="d-flex align-items-center g-16 border-full h4"
            >
              <img
                src={team.team.logo}
                width={24}
                height={24}
                alt="Team Logo"
                className="min-w-8 w-8 h-8 object-contain border-px border-solid border-full p-px"
              />
              <span className="text-12 flex-1">{team.team.name}</span>
              <FontAwesomeIcon icon={faStar} style={{ color: "#F5C451" }} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarFavClubList;
