"use client";

import Category from "@/components/main/Category";
import { useEffect } from "react";
import { MovieType } from "../type";
import MoiveCard from "@/components/main/MoiveCard";
import { getMovies } from "@/redux/dataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const API_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = "b0eb0edb2f15cd5a1f6e9d6bd8e8a12f";

interface SearchParams {
  [key: string]: string | string[];
}

const Anasayfa = ({ searchParams }: { searchParams: SearchParams }) => {
  // const res = await fetch(
  //   `${API_URL}/${
  //     searchParams.genre ? "movie/" + searchParams.genre : "movie/now_playing"
  //   }?api_key=${API_KEY}&language=en-US&page=1`,
  //   { next: { revalidate: 10000 } }
  // );
  // const { results: movies }: MoviesType = await res.json();

  const url = searchParams.genre as string | string[];
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(getMovies(url));
  }, [url]);

  const movies = data;
  console.log(data);

  return (
    <div className="flex flex-col gap-5">
      <div>Merhaba</div>
      <Category />
      <div>
        <input type="text" className="w-full" placeholder="Ne Aramıştınız ?" />
      </div>

      <div className="w-full flex flex-wrap justify-evenly gap-5">
        {movies?.map((movie, i) => (
          <MoiveCard key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Anasayfa;
