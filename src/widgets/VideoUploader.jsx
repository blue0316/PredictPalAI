import React, { useState, useRef, useEffect } from "react";
import Spring from "@components/Spring";
import uploadImg from "@assets/icons/upload.png";
import { toast } from "react-toastify";
import { useCreateVideoMutation } from "@api/Video/videoApi";
import { useSelector } from "react-redux";
import { generateVideoThumbnails } from "@rajesh896/video-thumbnails-generator";
import apiAnalysisQuery from "@api/Video/analysisApi";

const query = apiAnalysisQuery();

const VideoUploader = () => {
  const userId = useSelector((state) => state.user?.user?.uid);

  const [dragging, setDragging] = useState(false);
  const [uploadTime, setUploadTime] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [videoPreview, setVideoPreview] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef();

  const [createVideo] = useCreateVideoMutation();

  const allowedTypes = [
    "video/mp4",
    "video/x-msvideo",
    "video/webm",
    "video/x-ms-wmv",
  ];

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileUpload = async (file) => {
    if (!allowedTypes.includes(file.type)) {
      toast.error("Please upload a valid video file (MP4, AVI, WebM, WMV).");
      return;
    }

    const fileURL = URL.createObjectURL(file);
    setVideoPreview(fileURL);
    setIsUploading(true);
    setUploadTime(0);

    try {
      // Generate and upload thumbnail
      const thumbnailBlob = await generateThumbnail(file);
      const thumbnailUrl = await uploadThumbnail(thumbnailBlob, file.name);

      // Prepare form data for file upload
      const formData = new FormData();
      formData.append("file", file);

      // Upload video to FastAPI server
      const response = await query({
        url: "/upload-file/",
        method: "POST",
        data: formData,
      });

      if (response.error) {
        throw new Error(response.error.data || "Upload failed.");
      }

      toast.success(response.data.message);
      URL.revokeObjectURL(fileURL);

      const videoMetadata = {
        Name: file.name,
        VideoUrl: response.data.file_url,
        ThumbnailUrl: thumbnailUrl,
        FileSize: file.size,
        PlayTime: Math.round(await getVideoDuration(file)),
        FileExtension: file.name.split(".").pop(),
        User_ID: userId,
        Likes: 0,
        Dislikes: 0,
      };

      await createVideo(videoMetadata);
      toast.success("Video metadata saved successfully!");

      // Reset states after successful upload
      setIsUploading(false);
      setVideoPreview(null);
      setImagePreview(null);
    } catch (error) {
      toast.error(error.message || "Failed to upload video.");
    }
  };

  const generateThumbnail = async (file) => {
    try {
      const thumbnails = await generateVideoThumbnails(file, 1); // Generate a thumbnail at 1 second
      if (thumbnails && thumbnails.length > 0) {
        return fetch(thumbnails[0])
          .then((res) => res.blob())
          .catch(() => {
            throw new Error("Failed to convert thumbnail URL to blob");
          });
      } else {
        throw new Error("No thumbnails generated");
      }
    } catch (error) {
      throw new Error(
        "Failed to generate thumbnail using video-thumbnails-generator"
      );
    }
  };

  const uploadThumbnail = async (blob, fileName) => {
    // Remove the file extension from the filename
    const nameWithoutExtension =
      fileName.substring(0, fileName.lastIndexOf(".")) || fileName;

    const thumbnailFile = new File([blob], `${nameWithoutExtension}.png`, {
      type: "image/png",
    });

    const formData = new FormData();
    formData.append("file", thumbnailFile);

    const response = await query({
      url: "/upload-file/", // Assume the same endpoint handles thumbnails
      method: "POST",
      data: formData,
    });

    if (response.error) {
      throw new Error(response.error.data || "Thumbnail upload failed.");
    }

    // Return the URL or use a placeholder as needed
    return response.data.file_url; // Replace with actual URL if available
  };

  const getVideoDuration = (file) => {
    return new Promise((resolve) => {
      const video = document.createElement("video");
      video.preload = "metadata";
      video.src = URL.createObjectURL(file);
      video.onloadedmetadata = () => {
        resolve(video.duration);
        URL.revokeObjectURL(video.src);
      };
    });
  };

  const handleCancelUpload = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsUploading(false);
    setVideoPreview(null);
    setImagePreview(null);
    toast.info("Upload canceled.");
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  useEffect(() => {
    let interval;
    if (isUploading) {
      interval = setInterval(() => {
        setUploadTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isUploading]);

  return (
    <Spring
      className={`relative card flex flex-col gap-9 card-padded !rounded-lg !p-3 min-h-[400px] ${
        dragging ? "border-accent text-accent" : ""
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isUploading && (
        <div className="absolute top-8 left-8 text-sm p-1 bg-widget rounded">
          <p>Uploading... Time: {uploadTime}s</p>
        </div>
      )}
      {isUploading && (
        <button
          onClick={handleCancelUpload}
          className="absolute top-8 right-8 text-red-500 w-6 h-6 rounded-full border border-solid border-white hover:border-black hover:text-white hover:bg-black transition-all z-10"
        >
          &#x2715;
        </button>
      )}
      <div className="border border-solid border-borderInvert p-2 rounded-md h-full">
        <div
          className={`flex flex-col gap-2.5 justify-center items-center border cursor-pointer ${
            dragging ? "border-accent" : "border-dashed"
          } border-borderInvert rounded h-full`}
          onClick={handleClick}
        >
          {videoPreview ? (
            <>
              <video
                src={videoPreview}
                controls
                width="100%"
                className="rounded"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Video Thumbnail"
                  className="mt-2 rounded"
                />
              )}
            </>
          ) : (
            <>
              <h5 className="text-4xl font-medium text-center">
                Drag and drop
                <br />
                your video here.
              </h5>
              <img
                src={uploadImg}
                width={64}
                height={64}
                className="w-16 h-16"
                alt="File Upload Icon"
              />
              <label htmlFor="fileInput" className="mt-2 text-blue-600">
                or click to select a file
              </label>
            </>
          )}
          <input
            type="file"
            accept=".mp4, .avi, .webm, .wmv"
            onChange={handleFileSelect}
            ref={fileInputRef}
            className="hidden"
            id="fileInput"
          />
        </div>
      </div>
    </Spring>
  );
};

export default VideoUploader;
