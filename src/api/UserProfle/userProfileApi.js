import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../axiosBaseQuery';

export const userProfileApi = createApi({
  reducerPath: 'userProfileApi',
  baseQuery: axiosBaseQuery({ baseUrl: "https://predictpalaiapi.onrender.com" }),
  tagTypes: ['UserProfile'],
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: (userId) => ({ url: `/user-profiles/${userId}`, method: 'GET' }),
      providesTags: (result, error, userId) => [{ type: 'UserProfile', id: userId }],
    }),
    updateUserProfile: builder.mutation({
      query: ({ userId, profileData }) => ({
        url: `/user-profiles/${userId}`,
        method: 'PUT',
        data: profileData,
      }),
      invalidatesTags: (result, error, { userId }) => [{ type: 'UserProfile', id: userId }],
    }),
    createUserProfile: builder.mutation({
      query: (newProfileData) => ({
        url: `/user-profiles`,
        method: 'POST',
        data: newProfileData,
      }),
      invalidatesTags: ['UserProfile'],
    }),
    deleteUserProfile: builder.mutation({
      query: (userId) => ({
        url: `/user-profiles/${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, userId) => [{ type: 'UserProfile', id: userId }],
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useCreateUserProfileMutation,
  useDeleteUserProfileMutation,
} = userProfileApi;
