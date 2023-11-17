"use client";

import { MovieType } from "@/app/type";
import Image from "next/image";

const MoiveCard = ({ movie }: { movie: MovieType }) => {
  return (
    <div className="w-full h-60 lg:h-80 md:w-[280px] xl:w-[350px] relative">
      <Image
        alt=""
        fill
        src={`https://image.tmdb.org/t/p/original/${
          movie?.backdrop_path || movie?.poster_path
        }`}
        className="rounded-lg"
      />
    </div>
  );
};

export default MoiveCard;
