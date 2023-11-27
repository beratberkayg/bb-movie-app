"use client";

import { MovieType } from "@/app/type";
import MoiveCard from "@/components/main/MoiveCard";
import Search from "@/components/main/Search";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/search/movie";
const API_KEY = "b0eb0edb2f15cd5a1f6e9d6bd8e8a12f";

const SearchPage = async ({ params }: { params: { keyword: string } }) => {
  const keyword = params.keyword;

  const res = await axios.get(
    `${API_URL}?query=${keyword}&api_key=${API_KEY}&language=tr-TR`
  );

  const search: MovieType[] = await res.data.results;

  return (
    <div className="container mt-3 md:mt-5 flex flex-col justify-center gap-7 2xl:w-full">
      <div className="md:hidden">
        <Search />
      </div>
      <div className="w-full flex flex-wrap justify-evenly gap-3">
        {search.map((search) => (
          <MoiveCard key={search.id} movie={search} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
