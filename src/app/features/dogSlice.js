import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dogs: [],
};

export const dogSlice = createSlice({
  name: "dog",
  initialState,
  reducers: {},
});

export default dogSlice.reducer;
