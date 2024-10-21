import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../axiosBaseQuery";

export const videoApi = createApi({
  reducerPath: "videoApi",
  baseQuery: axiosBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
  tagTypes: ["Video"],
  endpoints: (builder) => ({
    getAllVideos: builder.query({
      query: () => ({ url: `/videos`, method: "GET" }),
      providesTags: (result, error) => [{ type: "Video" }],
    }),
    getSingleUserVideos: builder.query({
      query: (userId) => ({ url: `/videos/user/${userId}`, method: "GET" }),
      providesTags: (result, error, userId) => [{ type: "Video", id: userId }],
    }),
    getSingleVideo: builder.query({
      query: (videoId) => ({ url: `/videos/single/${videoId}`, method: "GET" }),
      providesTags: (result, error, videoId) => [
        { type: "Video", id: videoId },
      ],
    }),
    updateVideo: builder.mutation({
      query: ({ videoId, videoMetaData }) => ({
        url: `/videos/${videoId}`,
        method: "PUT",
        data: videoMetaData,
      }),
      // invalidatesTags: (result, error, { videoId }) => [
      //   { type: "Video", id: videoId },
      // ],
      invalidatesTags: ["Video"],
    }),
    createVideo: builder.mutation({
      query: (newVideoMetaData) => ({
        url: `/videos`,
        method: "POST",
        data: newVideoMetaData,
      }),
      invalidatesTags: ["Video"],
    }),
    deleteVideo: builder.mutation({
      query: (videoId) => ({
        url: `/videos/${videoId}`,
        method: "DELETE",
      }),
      // invalidatesTags: (result, error, videoId) => [
      //   { type: "Video", id: videoId },
      // ],
      invalidatesTags: ["Video"],
    }),
  }),
});

export const {
  useGetAllVideosQuery,
  useGetSingleUserVideosQuery,
  useGetSingleVideoQuery,
  useUpdateVideoMutation,
  useCreateVideoMutation,
  useDeleteVideoMutation,
} = videoApi;
