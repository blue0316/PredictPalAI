import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    profile: null,
    isAuthenticated: false,
    loading: true,
  },
  reducers: {
    login: (state, action) => {
      // const serializableValue = JSON.stringify(action.payload);
      // const normalObject = JSON.parse(serializableValue);
      // state.user = normalObject;
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    profile: (state, action) => {
      state.profile = action.payload;
    },
    authCheckComplete: (state) => {
      state.loading = false;
    },
  },
});

export const { login, logout, profile, authCheckComplete } = userSlice.actions;
export default userSlice.reducer;
