import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";

/// catalog
export const getCatalog = createAsyncThunk("layout/getCatalog", async () => {
  try {
    let { data } = await axiosRequest.get("Category/get-categories");
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

/// category by id
export const getCategoryById = createAsyncThunk(
  "layout/getCategoryById",
  async () => {
    try {
      let { data } = await axiosRequest.get(
        `Category/get-category-by-id?id=68`
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// product
export const getProduct = createAsyncThunk("layout/getProduct", async () => {
  try {
    let { data } = await axiosRequest.get("Product/get-products");
    return data.data.products;
  } catch (error) {
    console.log(error);
  }
});

/// get cart
export const getProductsInCart = createAsyncThunk(
  "layout/getProductsInCart",
  async () => {
    try {
      let { data } = await axiosRequest.get("Cart/get-products-from-cart");
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
