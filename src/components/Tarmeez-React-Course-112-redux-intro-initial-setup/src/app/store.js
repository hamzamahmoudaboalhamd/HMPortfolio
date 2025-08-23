import { configureStore } from "@reduxjs/toolkit";
import calcReducer from "./features/calc/calcSlice"; // Adjust the import path as necessary

export const store = configureStore({
  reducer: {
    calc: calcReducer,
  },
});
