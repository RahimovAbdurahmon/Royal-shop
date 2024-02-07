import { createSlice } from "@reduxjs/toolkit";
import { getPopulatCatalog } from "../../api/Layout/LayoutApi";

const layout = createSlice({
  name: "layout",
  initialState: {
    dataPopular: [],
    isLoading: false,
    dialogCity: false,
    nameCity: localStorage.getItem("nameCity"),
  },
  reducers: {
    setDialogCity: (state) => {
      state.dialogCity = !state.dialogCity;
    },
    setNameCity: (state, action) => {
      state.nameCity = localStorage.setItem("nameCity", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPopulatCatalog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPopulatCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataPopular = action.payload;
      })
      .addCase(getPopulatCatalog.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setDialogCity, setNameCity } = layout.actions;

export default layout.reducer;
