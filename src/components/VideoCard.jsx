import React, { useState } from "react";
import { Modal, Box, Button } from "@mui/material";

import { ReactComponent as BrainIcon } from "@assets/icons/ai-brain.svg";
import { ReactComponent as OpenModalIcon } from "@assets/icons/open-modal.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDeleteVideoMutation } from "@api/Video/videoApi";
import { useNavigate } from "react-router-dom";

const formatSecondsToMinutes = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  if (minutes > 0) {
    return ` ${minutes}m ${remainingSeconds}s `;
  } else {
    return ` ${remainingSeconds}s `;
  }
};

const spliceString = (text, length = 20) => {
  console.log(text);
  if (text.length > length) {
    return `${text.slice(0, length)}...`;
  } else return text;
};

const VideoCard = ({ video }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteVideo] = useDeleteVideoMutation();

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deleteVideo(video.Video_ID);
      console.log("Video deleted successfully.");
    } catch (error) {
      console.error("Failed to delete video:", error);
    }
  };

  const handleAnalysis = () => {
    navigate("/video-analysis", { state: { videoId: video.Video_ID } });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="group flex flex-col gap-2">
      <div className="rounded relative flex-1">
        <img
          src={`${process.env.REACT_APP_AI_API_URL}${video.ThumbnailUrl}`}
          controls
          width="100%"
          className="h-full min-h-56 rounded-md"
          alt="Video Thumbnail"
        />
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-black bg-opacity-50 opacity-0 invisible gap-4 group-hover:visible group-hover:opacity-100 rounded transition-all">
          <button
            onClick={handleOpenModal}
            className="group/button flex justify-center items-center w-12 h-12 border-2 border-solid rounded-full hover:border-accent transition-all"
          >
            <OpenModalIcon
              width={40}
              height={40}
              className="w-10 h-10 fill-coldWhite group-hover/button:fill-accent transition-all"
              aria-label="Open Modal Icon"
            />
          </button>
          <button
            onClick={handleAnalysis}
            className="group/button flex justify-center items-center w-12 h-12 border-2 border-solid rounded-full hover:border-accent transition-all"
          >
            <BrainIcon
              width={40}
              height={40}
              className="w-10 h-10 fill-coldWhite group-hover/button:fill-accent transition-all"
              aria-label="AI Analysis Icon"
            />
          </button>
          <button
            onClick={handleDelete}
            className="group/button flex justify-center items-center w-12 h-12 border-2 border-solid rounded-full hover:border-accent transition-all"
          >
            <FontAwesomeIcon
              icon={faTrash}
              width={40}
              height={40}
              className="w-6 h-6 group-hover/button:text-accent transition-all"
            />
          </button>
        </div>
      </div>
      <h5 className="text-xl text-center font-medium whitespace-nowrap w-full text-ellipsis overflow-hidden">
        {spliceString(video.Name, 20)} ({formatSecondsToMinutes(video.PlayTime)}
        )
      </h5>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50vw",
            bgcolor: "var(--widget)",
            boxShadow: 16,
            p: 3,
            borderRadius: 2,
          }}
        >
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h2>{video.Name}</h2>
              <Button
                onClick={handleCloseModal}
                className="w-6 h-6 !min-w-6 !border !border-solid !border-borderInvert !rounded-full !text-borderInvert hover:!text-accent hover:!border-accent"
              >
                &#x2715;
              </Button>
            </div>
            <video
              src={video.VideoUrl}
              controls
              width="100%"
              className="rounded flex-1"
              loop
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default VideoCard;
