"use client";
import { useEffect } from "react";
import Search from "@/components/main/Search";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { getMovie } from "@/redux/movieSlice";

const MovieDetail = ({ params }: { params: { movieId: string } }) => {
  const id = params.movieId;
  const { movie, loading } = useAppSelector((state) => state.movie);
  const dispatch = useAppDispatch();

  console.log(movie);

  useEffect(() => {
    dispatch(getMovie(id));
  }, [id]);

  return (
    <div className="mt-5 ">
      <Search />
      <div className="relative container mt-5 flex flex-col gap-3 justify-center ">
        <div className="relative w-full h-[200px] md:h-[300px] lg:h-[350px]">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie?.backdrop_path || movie?.poster_path
            }`}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            objectFit="cover"
            className="rounded-lg"
            objectPosition="center"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm text-white flex flex-col items-center py-3 md:py-7 lg:py-10 gap-3 rounded-lg">
          <div className="relative w-[200px] h-[100px] md:w-[400px] md:h-[180px] lg:w-[600px] lg:h-[250px] ">
            <Image
              src={`https://image.tmdb.org/t/p/original/${
                movie?.backdrop_path || movie?.poster_path
              }`}
              alt=""
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="text-xl font-bold md:text-2xl">{movie?.title}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
