import { MovieType } from "@/app/type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/search/movie";
const API_KEY = "b0eb0edb2f15cd5a1f6e9d6bd8e8a12f";

interface InitalStateType {
  isload: boolean;
  searchMovies: MovieType[];
}

const initialState: InitalStateType = {
  isload: false,
  searchMovies: [],
};

export const getSearch = createAsyncThunk(
  "getMovies",
  async (keyword?: string | string[]) => {
    const { data } = await axios.get(
      `${API_URL}?query=${keyword}&api_key=${API_KEY}&language=tr-TR`
    );

    return data.results;
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getSearch.pending, (state, action) => {
      state.isload = true;
    });
    builder.addCase(getSearch.fulfilled, (state, action) => {
      state.searchMovies = action.payload;
      state.isload = false;
    });
  },
});

export default searchSlice.reducer;
