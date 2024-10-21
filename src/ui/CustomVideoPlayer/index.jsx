import React, { useRef } from "react";

const CustomVideoPlayer = ({ className, url }) => {
  const videoNode = useRef(null);

  return (
    <div data-vjs-player>
      <video
        ref={videoNode}
        className={className}
        controls
        preload="auto"
        height={400}
        data-setup="{}"
      >
        <source
          src={`${process.env.REACT_APP_AI_API_URL}${url}`}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default CustomVideoPlayer;
