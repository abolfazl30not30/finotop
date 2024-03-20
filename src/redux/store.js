import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import toolSlice from "./slices/toolSlice";
import dropdownSlice from "./slices/dropdownSlice";
import symbolSearchSlice from "./slices/symbolSearchSlice";
import timeCandleChartSlice from "./slices/timeCandleChartSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    tool: toolSlice,
    dropdown: dropdownSlice,
    symbolSearch: symbolSearchSlice,
    timeCandleChart: timeCandleChartSlice,
  },
});
export default store;
