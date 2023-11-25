"use client";

import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/search/movie";
const API_KEY = "b0eb0edb2f15cd5a1f6e9d6bd8e8a12f";

const SearchPage = async ({ params }: { params: { keyword: string } }) => {
  const keyword = params.keyword;

  const res = await axios.get(
    `${API_URL}?${API_KEY}&query=${keyword}&language=tr-TR&page=1`
  );

  return <div>SearchPage</div>;
};

export default SearchPage;
