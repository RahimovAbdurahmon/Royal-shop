import { createSlice } from "@reduxjs/toolkit";
import { getCatalog, getProduct, getProductsInCart } from "../../api/Layout/LayoutApi";

const layout = createSlice({
  name: "layout",
  initialState: {
    catalog: [],
    isLoading: false,
    dialogCity: false,
    nameCity: localStorage.getItem("nameCity"),
    dialogCatalog: null,
    subCatalog: [],
    dataProduct: [],
    dataProductInCart: [],
  },
  reducers: {
    setDialogCity: (state) => {
      state.dialogCity = !state.dialogCity;
    },
    setNameCity: (state, action) => {
      state.nameCity = localStorage.setItem("nameCity", action.payload);
    },
    setDialogCatalog: (state, action) => {
      state.dialogCatalog = action.payload;
    },
    setSubCatalog: (state, action) => {
      state.subCatalog = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCatalog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCatalog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.catalog = action.payload;
      })
      .addCase(getCatalog.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataProduct = action.payload;
      })
      .addCase(getProduct.rejected, (state) => {
        state.isLoading = false;
      });
    builder
      .addCase(getProductsInCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsInCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dataProductInCart = action.payload;
      })
      .addCase(getProductsInCart.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setDialogCity, setNameCity, setDialogCatalog, setSubCatalog } =
  layout.actions;

export default layout.reducer;
