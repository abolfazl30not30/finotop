import { createSlice } from "@reduxjs/toolkit";

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState: { value: "close" },
  reducers: {
    changeDropDown(state, payload) {
      {
        state.value = payload.payload;
      }
    },
  },
});
export const { changeDropDown } = dropdownSlice.actions;
export default dropdownSlice.reducer;
