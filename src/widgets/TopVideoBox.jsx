import React, { useState, useRef } from "react";
import Spring from "@components/Spring";
import match from "@assets/match.mp4";
import mostPopularBadge from "@assets/badge/most-popular.png";

const TopVideoBox = () => {
  const [videoPreview, setVideoPreview] = useState(match);

  return (
    <Spring className="relative card flex flex-col gap-9 card-padded !rounded-lg !p-3 min-h-[400px]">
      <div className="flex flex-col relative border border-solid border-borderInvert p-2 rounded-md h-full gap-2.5 overflow-hidden">
        <h3 className="absolute top-3 left-3 px-2 py-1 text-center text-sm bg-widget rounded shadow">
          My Top Video
        </h3>
        <video
          src={videoPreview}
          controls
          width="100%"
          className="rounded flex-1 control-forbidden"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
        />
        <img
          src={mostPopularBadge}
          alt="Most Popular Badge"
          width={120}
          height={120}
          className="absolute w-[120px] h-[120px] -rotate-45 -bottom-4 -right-4"
        />
      </div>
    </Spring>
  );
};

export default TopVideoBox;
