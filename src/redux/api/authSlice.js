"use client";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: "",
  },
  reducers: {
    setCredentials: (state, action) => {
      return action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    logOut: (state, action) => {
      state.accessToken = "";
    },
  },
});

export const { setCredentials, setAccessToken, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentAccessToken = (state) => state.auth.accessToken;
