import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: () => {},
    decremented: () => {},
  },
});

export const { increment, decrement } = counterSlice.actions;
