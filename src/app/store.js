import { configureStore } from "@reduxjs/toolkit";
import dogReducer from "./features/dogSlice";
export const store = configureStore({
  reducer: {
    dog: dogReducer,
  },
});
