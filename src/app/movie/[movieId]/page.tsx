"use client";

import { MovieType } from "@/app/type";
import Image from "next/image";

const API_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = "b0eb0edb2f15cd5a1f6e9d6bd8e8a12f";

const getMovie = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}?api_key=${API_KEY}`);
  return await res.json();
};

const MovieDetail = async ({ params }: any) => {
  const id = params.movieId as string;

  const movie: MovieType = await getMovie(id);

  return (
    <div className="">
      <div className="relative min-h-screen">
        <Image
          alt=""
          fill
          src={`https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path || movie?.poster_path
          }`}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default MovieDetail;
