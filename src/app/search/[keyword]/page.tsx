"use client";

import { MovieType } from "@/app/type";
import MoiveCard from "@/components/main/MoiveCard";
import Search from "@/components/main/Search";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getSearch } from "@/redux/searchSlice";
import { useEffect } from "react";

const API_URL = "https://api.themoviedb.org/3/search/movie";
const API_KEY = "b0eb0edb2f15cd5a1f6e9d6bd8e8a12f";

const SearchPage = ({ params }: { params: { keyword: string } }) => {
  const keyword = params.keyword;
  const dispatch = useAppDispatch();
  const { searchMovies, isload } = useAppSelector((state) => state.search);

  // const res = await axios.get(
  // `${API_URL}?query=${keyword}&api_key=${API_KEY}&language=tr-TR`
  // );

  // const search: MovieType[] = await res.data.results;

  useEffect(() => {
    dispatch(getSearch(keyword));
  }, [keyword]);

  return (
    <div className="container mt-3 md:mt-5 flex flex-col justify-center gap-7 2xl:w-full">
      <div className="md:hidden">
        <Search />
      </div>
      <div className="w-full flex flex-wrap justify-evenly gap-3">
        {searchMovies && searchMovies.length > 0 ? (
          searchMovies.map((search) => (
            <MoiveCard key={search.id} movie={search}>
              {}
            </MoiveCard>
          ))
        ) : (
          <div className="text-white text-2xl ">Malesef Sonuç Bulunmadı.</div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
