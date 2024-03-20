"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://auth.prod.aunexa.net",
  prepareHeaders: (headers) => {
    headers.set("Authorization", "Basic ");
    return headers;
  },
});

export const loginSlice = createApi({
  reducerPath: "loginApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/oauth2/token",
        method: "POST",
        body: new URLSearchParams(credentials),
      }),
    }),
  }),
});

export const { useLoginMutation } = loginSlice;
