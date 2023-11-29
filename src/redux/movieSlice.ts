import { MovieType } from "@/app/type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = "b0eb0edb2f15cd5a1f6e9d6bd8e8a12f";

interface initalProps {
  isLoading: boolean;
  movie: MovieType;
  video: any;
}

const initialState: initalProps = {
  isLoading: false,
  movie: {},
  video: {},
};

export const getMovie = createAsyncThunk(
  "getMovies",
  async (id?: string | string[]) => {
    const { data } = await axios.get(
      `${API_URL}/${id}?api_key=${API_KEY}&language=tr-TR&page=1`
    );

    return data;
  }
);
export const getVideos = createAsyncThunk(
  "getVideos",
  async (id?: string | string[]) => {
    const { data } = await axios.get(
      `${API_URL}/${id}?api_key=${API_KEY}&append_to_response=videos`
    );

    const video = data.videos.results.find(
      (vid: any) => vid.name === "Official Trailer"
    );

    return video;
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMovie.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getMovie.fulfilled, (state, action) => {
      state.movie = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getVideos.fulfilled, (state, action) => {
      state.video = action.payload;
    });
  },
});

export default movieSlice.reducer;
