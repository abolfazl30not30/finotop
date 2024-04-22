import { configureStore } from '@reduxjs/toolkit'
import productSlice from "./slices/productSlice";
import toolSlice from "./slices/toolSlice";
import dropdownSlice from "./slices/dropdownSlice";
import symbolSearchSlice from "./slices/symbolSearchSlice";
import timeCandleChartSlice from "./slices/timeCandleChartSlice";
import {apiSlice} from "@/redux/api/apiSlice";

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    product: productSlice,
    tool: toolSlice,
    dropdown: dropdownSlice,
    symbolSearch: symbolSearchSlice,
    timeCandleChart: timeCandleChartSlice,

  },
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(apiSlice.middleware)
});

