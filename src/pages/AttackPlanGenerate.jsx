import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Spring from "@components/Spring";
import PageHeader from "@layout/PageHeader";
import { useGetSingleVideoQuery } from "@api/Video/videoApi";

import tacticMapSvg from "@assets/playerground/tactic.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const AttackPlanGenerate = () => {
  const [metaJson, setMetaJson] = useState([]);
  const [plans, setPlans] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [visiblePlans, setVisiblePlans] = useState(false);
  const location = useLocation();
  const { videoId } = location.state;
  const { data: video, error, isLoading } = useGetSingleVideoQuery(videoId);

  const handleFetchMetaData = async (fileLocation) => {
    try {
      const response = await axios.post("http://localhost:8000/get-meta-data", {
        file_location: fileLocation,
      });
      setMetaJson(response.data);
    } catch (error) {
      console.error("Error fetching metadata:", error);
    }
  };

  const getAttackPlans = async () => {
    try {
      const response = await axios.get("http://localhost:8000/attack-plans");
      setPlans(response.data);
    } catch (error) {
      console.error("Error fetching metadata:", error);
    }
  };

  const handlePlay = () => {
    if (!isPlaying && metaJson.length > 0) {
      const id = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex >= metaJson.length - 1) {
            clearInterval(id);
            setIsPlaying(false);
            return prevIndex;
          }
          return prevIndex + 1;
        });
      }, Math.round(1000 / 24));
      setIntervalId(id);
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    clearInterval(intervalId);
    setIsPlaying(false);

    if (intervalId) {
      clearInterval(intervalId);
      setIsPlaying(false);
      setIntervalId(null);
    }
  };

  const handleMoveForward = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < metaJson.length - 10 ? prevIndex + 10 : prevIndex
    );
  };

  const handleMoveBackward = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 10 ? prevIndex - 10 : prevIndex
    );
  };

  useEffect(() => {
    if (video && video.data.MetaJsonUrl) {
      handleFetchMetaData(video.data.MetaJsonUrl);
      getAttackPlans();
    }
  }, [video]);

  return (
    <>
      <PageHeader title="Video Analysis" />
      <div className="md:flex gap-4 p-6">
        <div className="flex-1">
          <Spring className="card card-padded !p-4">
            <div className="flex justify-center">
              <div className="flex flex-col justify-center">
                <div className="relative inline-flex">
                  <img
                    src={tacticMapSvg}
                    className="object-contain w-full h-full"
                    alt="Player Ground Tactic Map"
                  />
                  {metaJson.length > 0 && (
                    <>
                      {metaJson[currentIndex]?.position.map((player, index) => (
                        <div
                          key={`player-${index}`}
                          className="absolute"
                          style={{
                            top: `${player.coord[0] * 100}%`,
                            left: `${player.coord[1] * 100}%`,
                            width: "16px",
                            height: "16px",
                            backgroundColor:
                              player.type === "Team A"
                                ? "red"
                                : player.type === "Team B"
                                ? "blue"
                                : player.type === "ball"
                                ? "white"
                                : "yellow",
                            borderRadius: "50%",
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-1 mt-2">
              <button
                className="border border-text border-solid p-1 rounded-lg fill-text hover:fill-accent hover:border-accent transition-all"
                onClick={handleMoveBackward}
              >
                <svg width="24px" height="24px" viewBox="0 0 32 32">
                  <path d="M0 16q0 1.12 0.896 1.664l12 8q0.448 0.32 0.992 0.352t1.056-0.224q0.48-0.288 0.768-0.768t0.288-1.024v-16q0-0.544-0.288-1.024t-0.768-0.736-1.056-0.224-0.992 0.32l-12 8q-0.896 0.608-0.896 1.664zM16 16q0 1.12 0.896 1.664l12 8q0.448 0.32 0.992 0.352t1.056-0.224q0.48-0.288 0.768-0.768t0.288-1.024v-16q0-0.544-0.288-1.024t-0.768-0.736-1.056-0.224-0.992 0.32l-12 8q-0.896 0.608-0.896 1.664z"></path>
                </svg>
              </button>
              <button
                className="border border-text border-solid p-1 rounded-lg fill-text hover:fill-accent hover:border-accent transition-all"
                onClick={handlePlay}
                disabled={isPlaying}
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.286 3.407A1.5 1.5 0 0 0 6 4.684v14.632a1.5 1.5 0 0 0 2.286 1.277l11.888-7.316a1.5 1.5 0 0 0 0-2.555L8.286 3.407z" />
                </svg>
              </button>
              <button
                className="border border-text border-solid p-1 rounded-lg fill-text hover:fill-accent hover:border-accent transition-all"
                onClick={handleStop}
                disabled={!isPlaying}
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              </button>
              <button
                className="border border-text border-solid p-1 rounded-lg fill-text hover:fill-accent hover:border-accent transition-all"
                onClick={handleMoveForward}
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 56 56"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M 2.9281 44.4947 C 3.7618 44.4947 4.4531 44.2304 5.2665 43.7424 L 25.9869 31.5420 C 27.1053 30.8913 27.7153 30.1592 27.9389 29.3052 L 27.9389 41.0176 C 27.9389 43.2747 29.2810 44.4947 30.8671 44.4947 C 31.7007 44.4947 32.3921 44.2304 33.2055 43.7424 L 53.9461 31.5420 C 55.3695 30.6879 56 29.6916 56 28.5122 C 56 27.3531 55.3695 26.3568 53.9461 25.5028 L 33.2055 13.3023 C 32.3921 12.8143 31.7007 12.5500 30.8671 12.5500 C 29.2810 12.5500 27.9389 13.7700 27.9389 16.0271 L 27.9389 27.7395 C 27.7153 26.8855 27.1053 26.1535 25.9869 25.5028 L 5.2665 13.3023 C 4.4328 12.8143 3.7618 12.5500 2.9281 12.5500 C 1.3420 12.5500 0 13.7700 0 16.0271 L 0 41.0176 C 0 43.2747 1.3420 44.4947 2.9281 44.4947 Z" />
                </svg>
              </button>
            </div>
            <div>
              <div className="flex gap-2">
                <h2 className="text-xl font-bold">Attack Plans</h2>
                <button onClick={() => setVisiblePlans((prev) => !prev)}>
                  <FontAwesomeIcon icon={visiblePlans ? faEye : faEyeSlash} />
                </button>
              </div>
              <ul className="mt-4 space-y-4">
                {plans.map((plan, index) => (
                  <li
                    key={plan.name}
                    className={`relative p-4 border rounded-lg ${
                      index === 0 || visiblePlans
                        ? "blur-none"
                        : "blur-sm filter"
                    }`}
                  >
                    <h3 className="font-bold">{plan.name}</h3>
                    <ul className="list-disc pl-6">
                      {plan.steps.map((step, stepIndex) => (
                        <li key={stepIndex}>{step}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </Spring>
        </div>
        <div className="hidden md:block w-64 lg:w-80 h-full">
          <div className="sticky top-4 flex flex-col gap-4">
            <Spring className="card card-padded !p-4">
              MainSettingsSidebar
            </Spring>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttackPlanGenerate;
