import MegaChart from "@/components/Products/MegaChart";
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: { value: <MegaChart /> },
  reducers: {
    changeProduct(state, payload) {
      {
        state.value = payload.payload;
      }
    },
  },
});
export const { changeProduct } = productSlice.actions;
export default productSlice.reducer;
