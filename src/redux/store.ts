import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import movieSlice from "./movieSlice";
import auth from "./authSlice";
export const store = configureStore({
  reducer: {
    data: dataSlice,
    movie: movieSlice,
    auth,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
