import Category from "@/components/main/Category";
import React from "react";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "b0eb0edb2f15cd5a1f6e9d6bd8e8a12f";

const getPopularMovies = async () => {
  const res = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&page=1`);

  return res.json();
};
const Anasayfa = async ({ searchParams }: { searchParams: string }) => {
  const { results: popularMovies } = await getPopularMovies();

  return (
    <div className="flex flex-col">
      <div>Merhaba</div>
      <Category />
      <div>
        <input type="text" className="w-full" />
      </div>
      <div>
        {popularMovies.map((movie: any) => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Anasayfa;
