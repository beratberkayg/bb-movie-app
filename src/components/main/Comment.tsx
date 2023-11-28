"use client";

import React, { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { auth } from "@/utils/firebase";
import { YorumlarProps } from "@/app/type";

type CommentProps = {
  yorum: YorumlarProps;
  id: string;
};

const Comment = ({ yorum, id }: { yorum: YorumlarProps; id: string }) => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const [showText, setShowText] = useState<boolean>(false);
  console.log(yorum);
  console.log(id);

  console.log(yorum.kullaniciAd);

  return (
    <>
      {yorum.movieId.toString() === id ? (
        <div
          className={`bg-orange-500 border rounded-lg w-full md:w-[320px] lg:w-[350px] h-26 md:h-32 lg:h-36 p-2 md:p-3 lg:p-5 flex gap-3 text-white ${
            showText ? " h-40 md:h-44 lg:h-48" : ""
          }`}
        >
          <div className="relative w-[30px] h-[30px]  ">
            <div className="flex justify-center items-center border border-black text-xl rounded-full w-[30px] h-[30px] text-orange-500 bg-white">
              <FaUser />
            </div>
          </div>
          <div className=" w-full flex flex-col gap-1">
            <div className="flex items-center lg:text-xl">
              <p>{yorum?.kullaniciAd}</p>
              <span className="text-slate-200 text-[10px]">
                @{yorum?.kullaniciId}
              </span>
            </div>
            <div
              onClick={() =>
                yorum?.yorum.length > 70 ? setShowText(!showText) : ""
              }
              className={` first-letter:uppercase ${
                yorum?.yorum.length > 70 ? " line-clamp-2 cursor-pointer  " : ""
              } ${showText ? "line-clamp-none" : ""} `}
            >
              {yorum.yorum}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Comment;
