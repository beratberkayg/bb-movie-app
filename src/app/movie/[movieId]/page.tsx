"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { getMovie, getVideos } from "@/redux/movieSlice";
import Preloader from "@/components/preloader/Preloader";
import YouTube, { YouTubeProps } from "react-youtube";
import { IoClose } from "react-icons/io5";
import Post from "@/components/main/Post";
import Comment from "@/components/main/Comment";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { auth, db } from "@/utils/firebase";
import { YorumlarProps } from "@/app/type";
import { useAuthState } from "react-firebase-hooks/auth";
import Like from "@/components/main/Like";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const MovieDetail = ({ params }: { params: { movieId: string } }) => {
  const id = params.movieId;
  const { movie, isLoading, video } = useAppSelector((state) => state.movie);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovie(id));
    dispatch(getVideos(id));
    getYorumlar();
  }, [id]);

  const [showText, setShowText] = useState<boolean>(false);
  const [trailer, setTrailer] = useState<boolean>(false);
  const voteAverage = movie.vote_average?.toFixed();

  const opts: YouTubeProps["opts"] = {
    height: "500",
    width: "650",
  };
  const opts2: YouTubeProps["opts"] = {
    width: "300",
    height: "200px",
  };

  // Postları getirme işlemi
  const [user, loading] = useAuthState(auth);
  const [yorumlar, setYorumlar] = useState<YorumlarProps[]>([]);

  const getYorumlar = async () => {
    const collectionRef = collection(db, "yorumlar");
    const q = query(collectionRef, orderBy("tarih", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setYorumlar(
        snap.docs.map((doc) => ({
          ...(doc.data() as YorumlarProps),
          id: doc.id,
        }))
      );
    });
  };

  const [like, setLike] = useState<boolean>(false);

  const key = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      await updateDoc(key, {
        likes: arrayUnion({
          id: movie.id,
          title: movie.title,
          backdrop_path: movie.backdrop_path || movie.poster_path,
        }),
      });
    }
  };

  return (
    <div className="mt-5">
      {loading && <Preloader />}

      {trailer && (
        <div className="md:hidden relative">
          <YouTube opts={opts2} videoId={video?.key} />
          <div
            onClick={() => setTrailer(!trailer)}
            className="absolute top-0 right-0 z-50 cursor-pointer text-red-600 border-2 rounded-full bg-white"
          >
            <IoClose size={30} />
          </div>
        </div>
      )}

      <div className="relative container mt-5 flex flex-col gap-3 justify-center ">
        <div className="relative w-full h-[200px] md:h-[300px] lg:h-[350px]">
          {isLoading ? (
            <div>Yükeleniyor</div>
          ) : (
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
          )}
        </div>
        <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm text-white flex flex-col items-center py-3 md:py-7 lg:py-10 gap-3 rounded-lg">
          <div className="relative w-[200px] h-[100px] md:w-[400px] md:h-[180px] lg:w-[600px] lg:h-[250px] ">
            {trailer && (
              <div className="absolute z-10 w-full justify-center items-center hidden md:flex">
                <YouTube opts={opts} videoId={video?.key} />
                <div
                  onClick={() => setTrailer(!trailer)}
                  className="absolute top-0 z-50 cursor-pointer text-red-600 border-2 rounded-full bg-white"
                >
                  <IoClose size={30} />
                </div>
              </div>
            )}
            {isLoading ? (
              <div>Yükleniyor</div>
            ) : (
              <Image
                src={`https://image.tmdb.org/t/p/original${
                  movie?.backdrop_path || movie?.poster_path
                }`}
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                objectFit="cover"
                className="rounded-lg"
              />
            )}
          </div>
          {user && (
            <div onClick={saveShow}>
              <Like like={like} setLike={setLike} />
            </div>
          )}
          <div className="text-lg font-bold md:text-2xl">{movie?.title}</div>
          <div
            onClick={() => setTrailer(!trailer)}
            className="cursor-pointer border-2 p-1 rounded-md bg-orange-500 flex"
          >
            Fragmanı İzle
          </div>
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
      {user && <Post movie={movie} />}
      <div className="text-xl md:text-2xl text-center mt-3 border-b">
        Kullanıcı Yorumları
      </div>
      <div className="flex items-center justify-center flex-wrap mt-1 gap-3 py-3">
        {yorumlar.map(
          (yorum) =>
            yorum.movieId.toString() === id && (
              <Comment key={yorum.id} yorum={yorum}>
                {}
              </Comment>
            )
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
