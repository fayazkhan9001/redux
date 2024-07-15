import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterReducer";

export const store = configureStore({
  reducer: counterSlice.reducer,
});
