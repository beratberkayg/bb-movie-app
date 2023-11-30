"use client";

import Category from "@/components/main/Category";
import { useEffect, useState } from "react";
import MoiveCard from "@/components/main/MoiveCard";
import { getMovies } from "@/redux/dataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Search from "@/components/main/Search";
import { auth, db } from "@/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { YorumlarProps } from "../type";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import Comment from "@/components/main/Comment";

interface SearchParams {
  [key: string]: string | string[];
}

const Anasayfa = ({ searchParams }: { searchParams: SearchParams }) => {
  const url = searchParams.genre as string | string[];
  const dispatch = useAppDispatch();
  const { data, load } = useAppSelector((state) => state.data);
  const [user, loading] = useAuthState(auth);
  const [yorumlar, setYorumlar] = useState<YorumlarProps[]>([]);

  const getYorumlar = async () => {
    const ref = collection(db, "yorumlar");
    const q = query(ref, orderBy("tarih", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setYorumlar(
        snap.docs.map((doc) => ({ ...(doc.data() as YorumlarProps) }))
      );
    });
  };

  useEffect(() => {
    dispatch(getMovies(url));
    getYorumlar();
  }, [url]);

  const movies = Array.isArray(data) ? data : [];

  return (
    <div className=" mt-3 md:mt-5 flex flex-col justify-center gap-7 2xl:w-full">
      {user && (
        <div className="text-2xl text-center">
          {" "}
          Hoş Geldin {user?.displayName}
        </div>
      )}
      {yorumlar.length > 0 ? (
        <div>
          <div>Kullanıcıların yaptığı son yorumlar:</div>
          <div className="flex items-center justify-center flex-wrap mt-1 gap-3 py-3 w-full overflow-x-hidden h-[120px] md:h-[180px]">
            {yorumlar.map((yorum) => (
              <Comment key={yorum.id} yorum={yorum}>
                {}
              </Comment>
            ))}
          </div>
        </div>
      ) : null}

      <div className="md:hidden border border-blue-800 rounded-md shadow-[#2A0E61] shadow-lg">
        <Search />
      </div>

      <Category />
      <div className="w-full flex flex-wrap justify-evenly gap-3">
        {movies?.map((movie, i) => (
          <MoiveCard key={i} movie={movie}>
            {}
          </MoiveCard>
        ))}
      </div>
    </div>
  );
};

export default Anasayfa;
