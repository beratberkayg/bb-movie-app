import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

interface UserState {
  user: null | any;
  isLoading: boolean;
}

const initialState: UserState = {
  user: null,
  isLoading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logOutUser: (state) => {
      state.user = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { loginUser, logOutUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
