import { createSlice } from "@reduxjs/toolkit";
import { getPopulatCatalog } from "../../api/Layout/LayoutApi";

export const layout = createSlice({
  name: "layout",
  initialState: {
    dataPopular: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopulatCatalog.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPopulatCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.dataPopular = action.payload;
      })
      .addCase(getPopulatCatalog.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default layout.reducer;
