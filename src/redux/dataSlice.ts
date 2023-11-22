import { MovieType } from "@/app/type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = "b0eb0edb2f15cd5a1f6e9d6bd8e8a12f";

interface InitalStateType {
  loading: boolean;
  data: MovieType[];
}

const initialState: InitalStateType = {
  loading: false,
  data: [],
};

export const getMovies = createAsyncThunk(
  "getMovies",
  async (url?: string | string[]) => {
    const { data } = await axios.get(
      `${API_URL}/${
        url ? url : "/now_playing"
      }?api_key=${API_KEY}&language=en-US&page=1`
    );

    return data.results;
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMovies.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
  },
});

export default moviesSlice.reducer;
