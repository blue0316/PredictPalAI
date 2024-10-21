import React from "react";
import ballSvg from "@assets/icons/ball.svg";
import { useWindowSize } from "react-use";

const bgMetalColors = {
  1: "#FFD700CC",
  2: "#E2E2E2CC",
  3: "#97564ACC",
  4: "#888888CC",
};

const UserRankingTableRow = ({ ranking }) => {
  const width = useWindowSize().width;

  return (
    <div
      className="rounded-lg shadow-sm"
      style={{
        backgroundColor: bgMetalColors[ranking > 3 ? 4 : ranking],
      }}
    >
      <div className="grid grid-cols-12 max-lg:grid-cols-10 max-md:grid-cols-9 max-sm:grid-cols-8 w-full h-16 px-16 max-lg:px-8 max-md:px-4 py-4 text-white">
        <div className="col-span-5 max-lg:col-span-4 max-sm:col-span-3 h-8 flex items-center gap-4">
          <span>{`${ranking} `}</span>
          <img
            src=""
            className="w-8 h-8 rounded-full"
            width={32}
            height={32}
            alt="User Avatar"
          />
          <span>{` Artur Chornyi`}</span>
        </div>
        <div className="col-span-1 h-8 flex items-center">14</div>
        <div className="col-span-1 h-8 flex items-center">3</div>
        <div className="col-span-1 h-8 flex items-center">1</div>
        <div className="col-span-1 h-8 flex items-center">35</div>

        <div className="col-span-3 max-lg:col-span-2 max-md:col-span-1 flex items-center gap-2 max-lg:gap-1">
          {width > 1024 ? (
            Array.from({ length: 9 - ranking }, (_, index) => index).map(
              (item, index) => (
                <img
                  key={`ball-icon-${index}`}
                  src={ballSvg}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  alt="Level Ball"
                />
              )
            )
          ) : (
            <>
              <img
                src={ballSvg}
                width={20}
                height={20}
                className="w-5 h-5"
                alt="Level Ball"
              />
              <span className="whitespace-nowrap">Lv 8</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserRankingTableRow;
