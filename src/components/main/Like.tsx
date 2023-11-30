"use client";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { auth, db } from "@/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { Dispatch, SetStateAction } from "react";

const Like = ({
  like,
  setLike,
}: {
  like: boolean;
  setLike: Dispatch<SetStateAction<boolean>>;
}) => {
  const [user, loading] = useAuthState(auth);

  return (
    <div
      onClick={() => setLike(!like)}
      className="absolute right-3 top-3 cursor-pointer"
    >
      {like ? <FaHeart size={35} color={"red"} /> : <FaRegHeart size={35} />}
    </div>
  );
};

export default Like;
