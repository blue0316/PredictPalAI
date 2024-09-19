import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    profile: null,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      const serializableValue = JSON.stringify(action.payload);
      const normalObject = JSON.parse(serializableValue);
      state.user = normalObject;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    profile: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { login, logout, profile } = userSlice.actions;
export default userSlice.reducer;
