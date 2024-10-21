import React, { useState } from "react";
import MatchCounter from "./MatchCounter";

import Spring from "@components/Spring";

import apiFootballQuery from "@api/apiFootballQuery";

const query = apiFootballQuery();

const UpcomingMatch = () => {
  const [matches, setMatches] = useState([1, 2]);
  return (
    <Spring className="card flex flex-col gap-5 card-padded !rounded-2xl">
      <h3 className="text-2xl font-semibold text-center">Upcoming Match</h3>
      {matches.map((item, index) => (
        <MatchCounter key={`upcoming-${index}`} data={item} />
      ))}
    </Spring>
  );
};

export default UpcomingMatch;
