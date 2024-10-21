import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../axiosBaseQuery";

export const broadAgeSoccerApi = createApi({
  reducerPath: "broadAgeSoccerApi",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.REACT_APP_BROADAGE_API_HOST,
    headers: {
      languageId: process.env.REACT_APP_BROADAGE_API_LANG_ID,
      "Ocp-Apim-Subscription-Key": process.env.REACT_APP_BROADAGE_API_TOKEN,
      Accept: "application/json",
    },
  }),
  tagTypes: ["BroadAgeSoccer"],
  endpoints: (builder) => ({
    getMatchListAll: builder.query({
      query: (date) => ({
        url: `/soccer/match/list?date=${date}`,
        method: "GET",
      }),
      providesTags: (result, error, userId) => [
        { type: "BroadAgeSoccer", id: userId },
      ],
    }),
  }),
});

export const { useGetMatchListAllQuery } = broadAgeSoccerApi;
