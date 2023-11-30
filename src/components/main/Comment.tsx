"use client";

import React, { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { auth } from "@/utils/firebase";
import { YorumlarProps } from "@/app/type";
import Link from "next/link";

interface CommentProps {
  yorum: YorumlarProps;
  children: React.ReactNode;
}

const Comment: React.FC<CommentProps> = ({ yorum, children }) => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const [showText, setShowText] = useState<boolean>(false);

  return (
    <div
      className={`rounded-lg w-full md:w-[310px] lg:w-[400px] h-26 md:h-32 lg:h-38 p-2 md:p-3 lg:p-5 flex gap-3 text-white bg-orange-500 ${
        showText ? " h-40 md:h-44 lg:h-48" : ""
      }`}
    >
      <div className="relative w-[30px] h-[30px]  ">
        <div className="flex justify-center items-center border border-black text-xl rounded-full w-[30px] h-[30px] text-orange-500 bg-white">
          <FaUser />
        </div>
      </div>
      <div className=" w-full flex flex-col gap-1">
        <div className="flex items-center gap-1  lg:text-xl">
          <p>{yorum?.kullaniciAd}</p>
        </div>
        <Link
          className="text-blue-800 line-clamp-1"
          href={`/movie/${yorum.movie.id}`}
        >
          {yorum.movie.title} filmine :
        </Link>
        <div
          onClick={() =>
            yorum?.yorum.length > 70 ? setShowText(!showText) : ""
          }
          className={` first-letter:uppercase ${
            yorum?.yorum.length > 70 ? " line-clamp-1 cursor-pointer  " : ""
          } ${showText ? "line-clamp-none overflow-y-auto" : ""}  `}
        >
          {yorum?.yorum}
        </div>
      </div>
      <div className="relative cursor-pointer">{children}</div>
    </div>
  );
};

export default Comment;
