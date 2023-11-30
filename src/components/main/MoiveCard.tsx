"use client";

import { MovieType } from "@/app/type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { auth, db } from "@/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const MoiveCard = ({
  movie,
  children,
}: {
  movie: MovieType;
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  return (
    <div className="relative w-[140px] h-[200px] sm:w-[200px] sm:h-[300px] md:w-[210px] md:h-[300px] lg:w-[250px] shadow-[#2A0E61]/50 rounded-xl cursor-pointer">
      {loading ? (
        <div className="text-white">Yükleniyor</div>
      ) : (
        <Image
          alt=""
          fill
          src={`https://image.tmdb.org/t/p/original${
            movie?.backdrop_path || movie?.poster_path
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="rounded-xl"
          priority
        />
      )}

      <div
        onClick={() => router.push(`/movie/${movie.id}`)}
        className="absolute bottom-0 left-0 text-center w-full text-xl text-white shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md line-clamp-1"
      >
        {movie?.title}
      </div>
      <div className="absolute w-full h-full rounded-xl hover:shadow-lg hover:shadow-[#2A0E61]/50 hover:bg-[#03001417] hover:backdrop-blur-md text-white opacity-0 hover:opacity-100 flex items-center justify-center flex-col text-xl">
        <div className="text-center line-clamp-3">{movie?.title}</div>
        <div
          onClick={() => router.push(`/movie/${movie.id}`)}
          className="absolute bottom-1 hover:text-blue-500"
        >
          Filme Git
        </div>
      </div>
      <div className="absolute right-1 top-1">{children}</div>
    </div>
  );
};

export default MoiveCard;
