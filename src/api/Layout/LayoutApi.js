import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/axiosRequest";

export const getPopulatCatalog = createAsyncThunk(
  "layout/getPopulatCatalog",
  async () => {
    try {
      let { data } = await axiosRequest.get("Category/get-categories");
      console.log(data);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
