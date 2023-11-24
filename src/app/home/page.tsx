"use client";

import Category from "@/components/main/Category";
import { useEffect } from "react";
import MoiveCard from "@/components/main/MoiveCard";
import { getMovies } from "@/redux/dataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Search from "@/components/main/Search";
import { auth, db } from "@/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface SearchParams {
  [key: string]: string | string[];
}

const Anasayfa = ({ searchParams }: { searchParams: SearchParams }) => {
  const url = searchParams.genre as string | string[];
  const dispatch = useAppDispatch();
  const { data, load } = useAppSelector((state) => state.data);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    dispatch(getMovies(url));
  }, [url]);

  const movies = Array.isArray(data) ? data : [];
  console.log(data);

  return (
    <div className="container mt-3 md:mt-5 flex flex-col justify-center gap-7 2xl:w-full">
      {user && <div>Hoş Geldin {user.displayName}</div>}
      <Search />
      <Category />
      <div className="w-full flex flex-wrap justify-evenly gap-3">
        {movies?.map((movie, i) => (
          <MoiveCard key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Anasayfa;
