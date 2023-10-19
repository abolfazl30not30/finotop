import DayCandle from "@/components/dashboard/symbol/candle/DayCandle";
import { createSlice } from "@reduxjs/toolkit";

const timeCandleChartSlice = createSlice({
  name: "TimeCandleSlice",
  initialState: { value: <DayCandle /> },
  reducers: {
    changeTimeCandleSlice(state, payload) {
      {
        state.value = payload.payload;
      }
    },
  },
});
export const { changeTimeCandleSlice } = timeCandleChartSlice.actions;
export default timeCandleChartSlice.reducer;
