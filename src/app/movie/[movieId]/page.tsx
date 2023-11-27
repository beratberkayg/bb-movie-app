"use client";
import { useEffect, useState } from "react";
import Search from "@/components/main/Search";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { getMovie } from "@/redux/movieSlice";
import Preloader from "@/components/preloader/Preloader";

const MovieDetail = ({ params }: { params: { movieId: string } }) => {
  const id = params.movieId;
  const { movie, loading } = useAppSelector((state) => state.movie);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovie(id));
  }, [id]);

  const [showText, setShowText] = useState<boolean>(false);
  const voteAverage = movie.vote_average?.toFixed();

  return (
    <div className="mt-5 h-full">
      {loading && <Preloader />}

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
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="text-lg font-bold md:text-2xl">{movie?.title}</div>
        </div>
      </div>
      <div className="container mt-3 flex justify-center items-center flex-col">
        <h2 className="font-bold text-lg md:text-2xl">{movie.title}</h2>

        <span>Yayın Tarihi : {movie.release_date}</span>
        <span>{movie?.runtime} dakika</span>
        <div className="flex justify-center items-center gap-3">
          <span>IMDb Puanı :</span>

          <div
            className={`w-9 h-9 flex items-center justify-center rounded-full bg-white font-bold border-4 text-xl ${
              voteAverage && parseFloat(voteAverage) > 6
                ? "text-green-600 border-green-600"
                : " text-yellow-500 border-yellow-500"
            }`}
          >
            {movie.vote_average?.toFixed()}
          </div>
        </div>

        <p
          onClick={() => setShowText(!showText)}
          className={`text-center text-sm sm:text-lg line-clamp-2 lg:line-clamp-none cursor-pointer ${
            showText ? "line-clamp-none" : ""
          } `}
        >
          {movie.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieDetail;
