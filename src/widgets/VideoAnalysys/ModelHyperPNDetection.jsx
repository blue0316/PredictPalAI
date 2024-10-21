import React, { useState, useEffect, useCallback } from "react";
import {
  Button,
  Checkbox,
  Fade,
  FormControlLabel,
  Switch,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import apiAnalysisQuery from "@api/Video/analysisApi";
import CustomSlider from "@widgets/CustomSlider";
import NumberInput from "@ui/NumberInput";
import { toast } from "react-toastify";
import { useUpdateVideoMutation } from "@api/Video/videoApi";

const query = apiAnalysisQuery();

const ModelHyperPNDetection = ({
  colors,
  setAnalyzedUrl,
  teamAName,
  teamBName,
  video,
  videoId,
}) => {
  const [playerModelConfThresh, setPlayerModelConfThresh] = useState(0.6);
  const [keypointsModelConfThresh, setKeypointsModelConfThresh] = useState(0.7);
  const [keypointsDisplacementMeanTol, setKeypointsDisplacementMeanTol] =
    useState(7);
  const [numPalColors, setNumPalColors] = useState(3);
  const [saveOutput, setSaveOutput] = useState(true);
  const [nbrFramesNoBallThresh, setNbrFramesNoBallThresh] = useState(30);
  const [ballTrackDistThresh, setBallTrackDistThresh] = useState(100);
  const [maxTrackLength, setMaxTrackLength] = useState(35);

  const [showKeypointsDetection, setShowKeypointsDetection] = useState(false);
  const [showColorPalettes, setShowColorPalettes] = useState(true);
  const [showPlayersDetections, setShowPlayersDetections] = useState(true);
  const [showBallTracks, setShowBallTracks] = useState(true);

  const [updateVideo] = useUpdateVideoMutation();

  // State for loading and timer
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleStartDetection = useCallback(async () => {
    if (video) {
      setIsLoading(true);
      setTimer(0);

      const requestData = {
        video_url: video.data.VideoUrl,
        team1_name: teamAName,
        team2_name: teamBName,
        team1_p_color: colors.find(
          (item) => item.team === "A" && item.pos === "P"
        ).color,
        team1_gk_color: colors.find(
          (item) => item.team === "A" && item.pos === "GK"
        ).color,
        team2_p_color: colors.find(
          (item) => item.team === "B" && item.pos === "P"
        ).color,
        team2_gk_color: colors.find(
          (item) => item.team === "B" && item.pos === "GK"
        ).color,
        player_model_conf_thresh: playerModelConfThresh,
        keypoints_model_conf_thresh: keypointsModelConfThresh,
        keypoints_displacement_mean_tol: keypointsDisplacementMeanTol,
        num_pal_colors: numPalColors,
        nbr_frames_no_ball_thresh: nbrFramesNoBallThresh,
        ball_track_dist_thresh: ballTrackDistThresh,
        max_track_length: maxTrackLength,
        show_k: showKeypointsDetection,
        show_p: showPlayersDetections,
        show_pal: showColorPalettes,
        show_b: showBallTracks,
        save_output: saveOutput,
      };

      try {
        const result = await query({
          url: "/analyze-video/",
          method: "POST",
          data: requestData,
        });

        if (result.error) {
          console.error("Error:", result.error);
        } else {
          console.log("Success:", result.data);
          toast.success(result.data.message);
          setAnalyzedUrl(result.data.video_url);
          await updateVideo({
            videoId: videoId,
            videoMetaData: {
              AnalyzedUrl: result.data.video_url,
              MetaJsonUrl: result.data.meta_url,
            },
          });
        }
      } catch (error) {
        console.error("An error occurred during the API call:", error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [
    ballTrackDistThresh,
    colors,
    keypointsDisplacementMeanTol,
    keypointsModelConfThresh,
    maxTrackLength,
    nbrFramesNoBallThresh,
    numPalColors,
    playerModelConfThresh,
    saveOutput,
    setAnalyzedUrl,
    showBallTracks,
    showColorPalettes,
    showKeypointsDetection,
    showPlayersDetections,
    teamAName,
    teamBName,
    updateVideo,
    video,
    videoId,
  ]);

  const handleStopDetection = () => {
    console.log("Detection stopped.");
    setIsLoading(false);
    setTimer(0);
    // Implement stop detection logic if necessary
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p>PLayers Detection Confidence Threshold</p>
            <CustomSlider
              decimalLength={2}
              initial={playerModelConfThresh}
              min={0}
              max={1}
              onValueChange={setPlayerModelConfThresh}
              stepSize={0.01}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Field Keypoints PLayers Detection Confidence Threshold</p>
            <CustomSlider
              decimalLength={2}
              initial={keypointsModelConfThresh}
              min={0}
              max={1}
              onValueChange={setKeypointsModelConfThresh}
              stepSize={0.01}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p>Field Keypoints PLayers Detection Confidence Threshold</p>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Indicates the maximum allowed average distance between the position of the field keypoints in current and previous detections. It is used to determine wether to update homography matrix or not."
              >
                <Button sx={{ padding: 0, minWidth: 0 }}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </Button>
              </Tooltip>
            </div>
            <CustomSlider
              decimalLength={0}
              initial={keypointsDisplacementMeanTol}
              min={-1}
              max={100}
              onValueChange={setKeypointsDisplacementMeanTol}
              stepSize={1}
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p>Number of palette colors</p>
            <CustomSlider
              decimalLength={0}
              initial={numPalColors}
              min={1}
              max={5}
              onValueChange={setNumPalColors}
              stepSize={1}
            />
          </div>
          <hr className="w-full border-border my-8" />
          <FormControlLabel
            control={
              <Checkbox
                checked={saveOutput}
                onChange={(e) => setSaveOutput(e.target.checked)}
                sx={{
                  "& .MuiSvgIcon-root": {
                    borderColor: "var(--border)",
                  },
                  "&.Mui-checked": {
                    color: "var(--accent)",
                  },
                }}
              />
            }
            label="Save Output"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
              },
            }}
          />
        </div>
      </div>

      <hr className="w-full border-border my-8" />

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p>Ball track reset threshold (frames)</p>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="After how many frames with no ball detection, should the track be reset?"
              >
                <Button sx={{ padding: 0, minWidth: 0 }}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </Button>
              </Tooltip>
            </div>
            <NumberInput
              min={0}
              max={100}
              step={1}
              value={nbrFramesNoBallThresh}
              onChange={setNbrFramesNoBallThresh}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p>Ball track distance threshold (pixels)</p>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Maximum allowed distance between two consecutive balls detection to keep the current track."
              >
                <Button sx={{ padding: 0, minWidth: 0 }}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </Button>
              </Tooltip>
            </div>
            <NumberInput
              min={0}
              max={1000}
              step={1}
              value={ballTrackDistThresh}
              onChange={setBallTrackDistThresh}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p>Maximum ball track length (Nbr. detections)</p>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Maximum total number of ball detections to keep in tracking history"
              >
                <Button sx={{ padding: 0, minWidth: 0 }}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </Button>
              </Tooltip>
            </div>
            <NumberInput
              min={0}
              max={100}
              step={1}
              value={maxTrackLength}
              onChange={setMaxTrackLength}
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <p>Annotation Options:</p>
          <div className="grid grid-cols-2 px-4">
            <FormControlLabel
              control={
                <Switch
                  checked={showKeypointsDetection}
                  onChange={(e) => setShowKeypointsDetection(e.target.checked)}
                  color="primary"
                />
              }
              label="Show Keypoints Detection"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                },
              }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={showColorPalettes}
                  onChange={(e) => setShowColorPalettes(e.target.checked)}
                  color="primary"
                />
              }
              label="Show Color Palettes"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                },
              }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={showPlayersDetections}
                  onChange={(e) => setShowPlayersDetections(e.target.checked)}
                  color="primary"
                />
              }
              label="Show Players Detections"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                },
              }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={showBallTracks}
                  onChange={(e) => setShowBallTracks(e.target.checked)}
                  color="primary"
                />
              }
              label="Show Ball Tracks"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "14px",
                },
              }}
            />
          </div>
          <hr className="w-full border-border my-8" />
          <div className="flex gap-4">
            <Button
              variant="contained"
              color="primary"
              onClick={handleStartDetection}
              disabled={isLoading}
              startIcon={isLoading && <CircularProgress size={20} />}
            >
              {isLoading ? `Running... ${timer}s` : "Start Detection"}
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={handleStopDetection}
              disabled={!isLoading}
            >
              Stop Detection
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelHyperPNDetection;
