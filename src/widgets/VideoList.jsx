import React from "react";
import Spring from "@components/Spring";
import VideoCard from "@components/VideoCard";
import { useGetSingleUserVideosQuery } from "@api/Video/videoApi";
import { useSelector } from "react-redux";

const VideoList = () => {
  const userId = useSelector((state) => state.user?.user?.uid);
  const {
    data: videos,
    isLoading,
    error,
  } = useGetSingleUserVideosQuery(userId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading videos.</div>;
  }

  return (
    <Spring className="card card-padded !rounded-lg !p-3 !h-auto">
      <div className="grid grid-cols-2 lg:grid-cols-3  border border-solid border-borderInvert px-2 py-3 rounded-md gap-4">
        {videos && videos.length > 0 ? (
          videos.map((video, index) => (
            <VideoCard key={`video-item-${index}`} video={video} />
          ))
        ) : (
          <div className="mx-2 my-4">No videos found for this user.</div>
        )}
      </div>
    </Spring>
  );
};

export default VideoList;
