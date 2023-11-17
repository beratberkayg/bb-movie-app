import Category from "@/components/main/Category";
import { useSearchParams } from "next/navigation";
import React from "react";
import { MovieType } from "../type";
import MoiveCard from "@/components/main/MoiveCard";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "b0eb0edb2f15cd5a1f6e9d6bd8e8a12f";

interface SearchParams {
  [key: string]: string | string[];
}

interface MoviesType {
  results?: MovieType[];
}

const Anasayfa = async ({ searchParams }: { searchParams: SearchParams }) => {
  const res = await fetch(
    `${API_URL}/${
      searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const { results: movies }: MoviesType = await res.json();

  return (
    <div className="flex flex-col gap-5">
      <div>Merhaba</div>
      <Category />
      <div>
        <input type="text" className="w-full" placeholder="Ne Aramıştınız ?" />
      </div>

      <div className="flex justify-center items-center flex-wrap gap-3 py-1 bg-slate-400">
        {movies?.map((movie, i) => (
          <MoiveCard key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Anasayfa;
