"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut, setAccessToken } from "./authSlice";
import axios from "axios";


const baseQuery = fetchBaseQuery({
  baseUrl: "https://gateway.prod.aunexa.net/api/v1/",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const login = async () => {

  const formData = {
    client_id: "client1",
    refresh_token: window.sessionStorage.getItem("refresh_token"),
    grant_type: "refresh_token",
  };

  return await axios.post("https://auth.prod.aunexa.net/oauth2/token", formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401 || result?.error?.status === 500) {
    const refreshResult = await login();
    api.dispatch(setAccessToken(refreshResult?.data?.access_token));
    if (refreshResult?.data) {
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
