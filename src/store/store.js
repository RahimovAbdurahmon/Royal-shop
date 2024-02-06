import { configureStore } from "@reduxjs/toolkit";
import { layout } from "../reducer/Layout/Layout";

export const store = configureStore({
  reducer: {
    layout,
  },
});
