import React, { useState, useEffect, useRef } from "react";
import { TabsList, TabPanel, Tabs } from "@mui/base";
import { useLocation } from "react-router-dom";
import videojs from "video.js";

import { useGetSingleVideoQuery } from "@api/Video/videoApi";
import Spring from "@components/Spring";
import PageHeader from "@layout/PageHeader";
import TabButton from "@ui/TabButton";
import HowToUseGuide from "@widgets/VideoAnalysys/HowToUseGuide";
import TeamColorSelector from "@widgets/VideoAnalysys/TeamColorSelector";
import MainSettingsSidebar from "@widgets/VideoAnalysys/MainSettingsSidebar";

import "video.js/dist/video-js.css";
import ModelHyperPNDetection from "@widgets/VideoAnalysys/ModelHyperPNDetection";
import CustomVideoPlayer from "@ui/CustomVideoPlayer";

const VideoAnalysis = () => {
  const location = useLocation();
  const { videoId } = location.state;
  const { data: video, error, isLoading } = useGetSingleVideoQuery(videoId);

  const [colors, setColors] = useState([
    { color: "#FFFFFF", team: "A", pos: "P" },
    { color: "#FFFFFF", team: "A", pos: "GK" },
    { color: "#FFFFFF", team: "B", pos: "P" },
    { color: "#FFFFFF", team: "B", pos: "GK" },
  ]);
  const [activeTab, setActiveTab] = useState("how_to_use");
  const [analyzedUrl, setAnalyzedUrl] = useState(null);
  const [duration, setDuration] = useState(null);
  const [fps, setFps] = useState(25);
  const inputNode = useRef(null);

  const [teamAName, setTeamAName] = useState("Team A");
  const [teamBName, setTeamBName] = useState("Team B");
  const [strategy, setStrategy] = useState("direct_assault");

  useEffect(() => {
    if (video && video.data.VideoUrl) {
      const player = videojs(inputNode.current, {}, function onPlayerReady() {
        this.on("loadedmetadata", function () {
          const fpsValue = this.textTracks()[0]?.frameRate || 25;
          setFps(fpsValue);
          setDuration(this.duration());

          if (video.data.AnalyzedUrl) {
            setAnalyzedUrl(video.data.AnalyzedUrl);
          }
        });
      });

      return () => {
        player.dispose();
      };
    }
  }, [video]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading video</div>;

  return (
    <>
      <PageHeader title="Video Analysis" />
      <div className="md:flex gap-4 p-6">
        <div className="flex-1">
          {video && (
            <Spring className="card card-padded !p-4">
              <h1 className="py-6 text-3xl">
                Football Players Detection With Team Prediction & Tactical Map
              </h1>
              <div className="grid grid-cols-2 gap-4 justify-center items-center pb-4 border-b border-solid border-border">
                <div className="shadow-lg rounded-md overflow-hidden">
                  <div data-vjs-player>
                    <video
                      ref={inputNode}
                      className="video-js vjs-default-skin h-[280px] lg:h-[400px] w-full shadow"
                      controls
                      preload="auto"
                      height={400}
                      data-setup="{}"
                    >
                      <source
                        src={`${process.env.REACT_APP_AI_API_URL}${video.data.VideoUrl}`}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
                <div className="shadow-lg rounded-md overflow-hidden">
                  {analyzedUrl ? (
                    // <video
                    //   src={`${process.env.REACT_APP_AI_API_URL}${analyzedUrl}`}
                    //   height={480}
                    //   className="h-[280px] lg:h-[400px] w-full rounded-md shadow object-contain"
                    //   autoPlay
                    //   controls
                    // />
                    <CustomVideoPlayer
                      className="video-js vjs-default-skin h-[280px] lg:h-[400px] w-full shadow"
                      url={analyzedUrl}
                    />
                  ) : (
                    <p>No Analyzed Video</p>
                  )}
                </div>
              </div>

              <div className="py-4">
                <Tabs className="h-full" value={activeTab}>
                  <div>
                    <TabsList className="tab-nav grid-cols-3 pb-6">
                      <TabButton
                        title="How to use?"
                        onClick={() => setActiveTab("how_to_use")}
                        active={activeTab === "how_to_use"}
                      />
                      <TabButton
                        title="Team Colors"
                        onClick={() => setActiveTab("team_colors")}
                        active={activeTab === "team_colors"}
                      />
                      <TabButton
                        title="Model Hyperparameters & Detection"
                        onClick={() =>
                          setActiveTab("model_hyperparameters_detection")
                        }
                        active={activeTab === "model_hyperparameters_detection"}
                      />
                    </TabsList>
                    <div>
                      <div className="track">
                        <TabPanel className="h-full" value="how_to_use">
                          <HowToUseGuide />
                        </TabPanel>
                        <TabPanel className="h-full" value="team_colors">
                          {video && (
                            <TeamColorSelector
                              colors={colors}
                              duration={duration}
                              fps={fps}
                              setColors={setColors}
                              teamAName={teamAName}
                              teamBName={teamBName}
                              video={video}
                            />
                          )}
                        </TabPanel>
                        <TabPanel
                          className="h-full"
                          value="model_hyperparameters_detection"
                        >
                          {video && (
                            <ModelHyperPNDetection
                              colors={colors}
                              setAnalyzedUrl={setAnalyzedUrl}
                              teamAName={teamAName}
                              teamBName={teamBName}
                              videoId={videoId}
                              video={video}
                            />
                          )}
                        </TabPanel>
                      </div>
                    </div>
                  </div>
                </Tabs>
              </div>
            </Spring>
          )}
        </div>
        <div className="hidden md:block w-64 lg:w-80 h-full">
          <div className="sticky top-4 flex flex-col gap-4">
            <MainSettingsSidebar
              analyzed={!!analyzedUrl}
              setTeamAName={setTeamAName}
              setTeamBName={setTeamBName}
              setStrategy={setStrategy}
              strategy={strategy}
              teamAName={teamAName}
              teamBName={teamBName}
              video={video}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoAnalysis;
