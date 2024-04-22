"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseQuery = fetchBaseQuery({
  baseUrl: "http://193.111.234.168:3030/api/",
  // prepareHeaders: (headers, { getState }) => {
  //   const token = getState().auth.accessToken;
  //   if (token) {
  //     headers.set("Authorization", `Bearer ${token}`);
  //   }
  //   return headers;
  // },
});



// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);
//   if (result?.error?.status === 401 || result?.error?.status === 500) {
//     const refreshResult = await login();
//     api.dispatch(setAccessToken(refreshResult?.data?.access_token));
//     if (refreshResult?.data) {
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(logOut());
//     }
//   }
//   return result;
// };

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: ["firstChart"],
  endpoints: (builder) => ({}),
});
