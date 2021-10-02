import {configureStore} from "@reduxjs/toolkit";
import score from "./score/slice.js";
export const store = configureStore({
  reducer: {
    score
  }
});
