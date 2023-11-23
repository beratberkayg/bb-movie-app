"use client";

import { MovieType } from "@/app/type";
import Search from "@/components/main/Search";
import Image from "next/image";

const API_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = "b0eb0edb2f15cd5a1f6e9d6bd8e8a12f";

const getMovie = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}?api_key=${API_KEY}`);
  return await res.json();
};

interface paramsProps {
  [movieId: string]: string | string[];
}

const MovieDetail = async ({ params }: { params: paramsProps }) => {
  const id = params.movieId as string;

  const movie: MovieType = await getMovie(id);

  return (
    <div className="container mt-5 flex flex-col gap-3">
      <Search />
      <div className="relative min-h-screen rounded-lg">
        <Image
          alt=""
          fill
          src={`https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path || movie?.poster_path
          }`}
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#03001417] backdrop-blur-md text-white flex flex-col items-center py-3 md:py-7 lg:py-10 gap-3 rounded-lg">
          <div className="relative w-[250px] h-[300px] md:w-[350px] md:h-[450px] lg:w-[500px] lg:h-[600px]">
            <Image
              alt=""
              fill
              src={`https://image.tmdb.org/t/p/original/${
                movie?.backdrop_path || movie?.poster_path
              }`}
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="w-full h-full flex flex-col items-center text-gray-500 text-sm md:text-lg px-3 gap-3 font-bold">
            <h2 className="text-xl md:text-3xl">{movie?.title}</h2>
            <p className="w-[250px] md:w-[80%] text-center">
              {movie?.overview}
            </p>

            <button className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-white">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
                Fragman İzle
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[200px]"></div>
    </div>
  );
};

export default MovieDetail;
