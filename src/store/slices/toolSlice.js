import Assembly from "@/components/Tool/Assembly";
import { createSlice } from "@reduxjs/toolkit";

const toolSlice = createSlice({
  name: "tool",
  initialState: { value: <Assembly /> },
  reducers: {
    changeTool(state, payload) {
      {
        state.value = payload.payload;
      }
    },
  },
});
export const { changeTool } = toolSlice.actions;
export default toolSlice.reducer;
