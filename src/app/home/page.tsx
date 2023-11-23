"use client";

import Category from "@/components/main/Category";
import { useEffect } from "react";
import { MovieType } from "../type";
import MoiveCard from "@/components/main/MoiveCard";
import { getMovies } from "@/redux/dataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Preloader from "@/components/preloader/Preloader";
import Search from "@/components/main/Search";

interface SearchParams {
  [key: string]: string | string[];
}

const Anasayfa = ({ searchParams }: { searchParams: SearchParams }) => {
  const url = searchParams.genre as string | string[];
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(getMovies(url));
  }, [url]);

  const movies = data;
  console.log(data);

  return (
    <div className="container mt-3 md:mt-5 flex flex-col justify-center gap-7 2xl:w-full">
      <Search />
      <Category />
      <div className="w-full flex flex-wrap justify-evenly gap-5">
        {movies?.map((movie, i) => (
          <MoiveCard key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Anasayfa;
