import React from "react";
import UserRankingTableRow from "./UserRankingTableRow";
import { useWindowSize } from "react-use";

const UserRankingTable = () => {
  const width = useWindowSize().width;

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-12 max-lg:grid-cols-10 max-md:grid-cols-9 max-sm:grid-cols-8 h-9 px-16 max-lg:px-8 max-md:px-4">
        <div className="col-span-5 max-lg:col-span-4 max-sm:col-span-3 flex items-center h-9">
          User
        </div>
        <div className="col-span-1 flex items-center h-9">
          {width > 640 ? "Uploaded Videos" : "🎞️"}
        </div>
        <div className="col-span-1 flex items-center h-9">
          {width > 640 ? "Likes" : "👍"}
        </div>
        <div className="col-span-1 flex items-center h-9">
          {width > 640 ? "Dislikes" : "👎"}
        </div>
        <div className="col-span-1 flex items-center h-9">
          {width > 640 ? "Points" : "💯"}
        </div>
        <div className="col-span-3 max-lg:col-span-2 max-md:col-span-1 flex items-center h-9">
          {width > 640 ? "Levels" : "🏅"}
        </div>
      </div>
      {Array.from({ length: 6 }, (_, index) => index).map((item, index) => (
        <UserRankingTableRow key={`user-ranking-${index}`} ranking={item + 1} />
      ))}
      <div className="flex gap-4 height-w-4">
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "#FFD700CC" }}
          />
          <div className="w-12">Gold</div>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "#E2E2E2CC" }}
          />
          <div className="w-12">Silver</div>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: "#97564ACC" }}
          />
          <div className="w-12">Copper</div>
        </div>
      </div>
    </div>
  );
};

export default UserRankingTable;
