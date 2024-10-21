import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  CircularProgress,
  Fade,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Tooltip,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import apiAnalysisQuery from "@api/Video/analysisApi";
import CustomSlider from "@widgets/CustomSlider";
import DetectedPlayerList from "@widgets/DetectedPlayerList";
import DetectedPlayerColorList from "@widgets/DetectedPlayerColorList";

const query = apiAnalysisQuery();

const TeamColorSelector = ({
  colors,
  duration,
  fps,
  setColors,
  teamAName,
  teamBName,
  video,
}) => {
  const [selectedFrame, setSelectedFrame] = useState(1);
  const [selectedTeamColor, setSelectedTeamColor] = useState("A_P");

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [timeCounter, setTimeCounter] = useState(0);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isAnalyzing) return;

    const timer = setInterval(() => {
      setTimeCounter((prev) => prev + 100);
    }, 100);

    return () => clearInterval(timer);
  }, [isAnalyzing]);

  useEffect(() => {
    if (!video?.data?.VideoUrl) return;

    const analyzeVideo = async () => {
      try {
        setIsAnalyzing(true);
        const response = await query({
          url: "/detect-players/",
          method: "POST",
          data: {
            video_url: video.data.VideoUrl,
            start_frame: 0,
            end_frame: selectedFrame,
            player_confidence_threshold: 0.7,
          },
        });
        setResult(response.data.detections);
      } catch (err) {
        console.error("Error analyzing video:", err);
      } finally {
        setIsAnalyzing(false);
        setTimeCounter(0);
      }
    };

    analyzeVideo();
  }, [selectedFrame, video]);

  useEffect(() => {
    const updateCanvas = () => {
      if (videoRef.current && canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        ctx.drawImage(
          videoRef.current,
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
      }
    };

    if (videoRef.current) {
      videoRef.current.currentTime = selectedFrame / fps;
      videoRef.current.onseeked = updateCanvas;
    }
  }, [selectedFrame, fps]);

  return (
    <div className="relative flex gap-4">
      {isAnalyzing && (
        <>
          <div className="absolute -inset-2 flex items-center justify-center bg-black bg-opacity-75 z-10 blur" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <CircularProgress />
            <p className="ml-2">Analyzing...</p>
            <p className="mt-2">{`Elapsed Time: ${(timeCounter / 1000).toFixed(
              1
            )}s`}</p>
          </div>
        </>
      )}
      <div className="grid grid-cols-2 w-full gap-4">
        <div className="flex flex-col gap-4">
          <HeaderWithTooltip
            title="Select frame"
            tooltipText="Select frame to pick team colors from"
          />
          <CustomSlider
            decimalLength={0}
            initial={1}
            min={1}
            max={Math.floor(duration * fps)}
            onValueChange={setSelectedFrame}
            stepSize={1}
          />
          <p>Detected players</p>
          <DetectedPlayerList
            data={result}
            selectedTeamColor={selectedTeamColor}
            setColors={setColors}
          />
          <hr className="w-full border-border" />
          <HeaderWithTooltip
            title="Select which team color to pick from the image above"
            tooltipText="Choose team color you want to pick and click on the image above to pick the color. Colors will be displayed in boxes below."
          />
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="team-color"
              name="teamColor"
              value={selectedTeamColor}
              onChange={(e) => setSelectedTeamColor(e.target.value)}
            >
              {[
                { value: "A_P", label: `${teamAName} P color` },
                { value: "A_GK", label: `${teamAName} GK color` },
                { value: "B_P", label: `${teamBName} P color` },
                { value: "B_GK", label: `${teamBName} GK color` },
              ].map(({ value, label }) => (
                <FormControlLabel
                  key={value}
                  value={value}
                  control={<Radio />}
                  label={label}
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      fontSize: "0.8rem",
                    },
                  }}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <p>Boxes below can be used to manually adjust selected colors.</p>
          <DetectedPlayerColorList
            colors={colors}
            teamAName={teamAName}
            teamBName={teamBName}
            setColors={setColors}
          />
        </div>
        <div>
          <video
            ref={videoRef}
            src={`${process.env.REACT_APP_AI_API_URL}${video.data.VideoUrl}`}
            style={{ display: "none" }}
          />
          <canvas
            ref={canvasRef}
            height={360}
            className="w-full max-h-80 rounded shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

const HeaderWithTooltip = ({ title, tooltipText }) => (
  <div className="flex justify-between">
    <p>{title}</p>
    <Tooltip
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
      title={tooltipText}
    >
      <Button sx={{ padding: 0, minWidth: 0 }}>
        <FontAwesomeIcon icon={faQuestionCircle} />
      </Button>
    </Tooltip>
  </div>
);

export default TeamColorSelector;
