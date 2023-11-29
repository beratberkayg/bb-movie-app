"use client";
import { MovieType } from "@/app/type";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { auth, db } from "@/utils/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

interface postType {
  yorum: string | string[];
}

const Post = ({ movie }: { movie: MovieType }) => {
  const [post, setPost] = useState<postType>({
    yorum: "",
  });
  const [user, loading] = useAuthState(auth);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (post.yorum.length < 3) {
      return;
    }
    const collectionRef = collection(db, "yorumlar");
    await addDoc(collectionRef, {
      ...post,
      tarih: serverTimestamp(),
      movieId: movie.id,
      kullaniciAd: user?.displayName,
      kullaniciId: user?.uid,
    });

    setPost({ yorum: "" });
  };

  return (
    <div className="mt-3 py-3 border-t flex flex-col items-center   ">
      <div className=" border border-orange-500 rounded-xl w-full md:w-[70%] h-40 flex  gap-3 p-3">
        <FaUser size={50} color={"orange"} />
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-end gap-3"
        >
          <textarea
            id="yorum"
            value={post.yorum}
            onChange={(e) =>
              setPost({
                ...post,
                yorum: e.currentTarget.value,
              })
            }
            placeholder="---> Bir şeyler yaz..."
            className="w-full h-24 text-black outline-none rounded-sm text-xl"
          ></textarea>
          <button
            type="submit"
            className="border rounded-md py-2 px-3 bg-orange-500 font-bold hover:bg-white hover:text-orange-500"
          >
            Yorum Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
