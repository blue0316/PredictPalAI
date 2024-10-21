import React from "react";
import PageHeader from "@layout/PageHeader";

import VideoUploader from "@widgets/VideoUploader";
import TopVideoBox from "@widgets/TopVideoBox";
import VideoList from "@widgets/VideoList";
import StatisticViewSidebar from "@widgets/StatisticViewSidebar";

const VideoGallery = () => {
  return (
    <>
      <PageHeader title="Video Gallery" />
      <div className="md:flex gap-4 p-6">
        <div className="flex-1">
          <div className="flex gap-4 pb-4">
            <div className="basis-3/5">
              <VideoUploader />
            </div>
            <div className="basis-2/5">
              <TopVideoBox />
            </div>
          </div>
          <VideoList />
        </div>
        <div className="hidden md:block w-64 lg:w-80 h-full">
          <div className="sticky top-4">
            <StatisticViewSidebar title="Video Contest Statistic" />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoGallery;
