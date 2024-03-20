import { createSlice } from "@reduxjs/toolkit";

const symbolSearchSlice = createSlice({
  name: "symbolSearch",
  initialState: { value: "" },
  reducers: {
    changeSymbolSearch(state, payload) {
      {
        state.value = payload.payload;
      }
    },
  },
});
export const { changeSymbolSearch } = symbolSearchSlice.actions;
export default symbolSearchSlice.reducer;
