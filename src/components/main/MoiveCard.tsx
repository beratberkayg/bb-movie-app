"use client";

import { MovieType } from "@/app/type";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Like from "./Like";
import { auth, db } from "@/utils/firebase";
import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const MoiveCard = ({ movie }: { movie: MovieType }) => {
  const router = useRouter();
  const [like, setLike] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);
  const [user, loading] = useAuthState(auth);

  const key = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(key, {
        likes: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
          movie: movie,
        }),
      });
    }
  };

  return (
    <div
      onClick={() => router.push(`/movie/${movie.id}`)}
      className="relative w-[130px] h-[200px] sm:w-[200px] sm:h-[300px] md:w-[210px] md:h-[300px] lg:w-[250px] shadow-[#2A0E61]/50 rounded-xl cursor-pointer"
    >
      <Image
        alt=""
        fill
        src={`https://image.tmdb.org/t/p/original/${
          movie?.backdrop_path || movie?.poster_path
        }`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
        className="rounded-xl"
        priority
      />
      <div className="absolute bottom-0 left-0 text-center w-full text-xl text-white shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md line-clamp-1">
        {movie?.title ? movie.title : "İsim Düşünüyoruz"}
      </div>
      <div className="absolute w-full h-full rounded-xl hover:shadow-lg hover:shadow-[#2A0E61]/50 hover:bg-[#03001417] hover:backdrop-blur-md text-white opacity-0 hover:opacity-100 flex items-center justify-center flex-col text-xl">
        <div className="text-center line-clamp-3">
          {movie?.title ? movie.title : "İsim Düşünüyoruz"}
        </div>
      </div>
    </div>
  );
};

export default MoiveCard;
