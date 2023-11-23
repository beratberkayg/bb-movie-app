import { MovieType } from "@/app/type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = "b0eb0edb2f15cd5a1f6e9d6bd8e8a12f";

interface initalProps {
  loading: boolean;
  movie: MovieType;
}

const initialState: initalProps = {
  loading: false,
  movie: {},
};

export const getMovie = createAsyncThunk(
  "getMovies",
  async (id?: string | string[]) => {
    const { data } = await axios.get(
      `${API_URL}/${id}?api_key=${API_KEY}&language=en-US&page=1`
    );

    return data;
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMovie.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getMovie.fulfilled, (state, action) => {
      state.movie = action.payload;
      state.loading = false;
    });
  },
});

export default movieSlice.reducer;
