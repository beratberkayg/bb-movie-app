"use client";
import { MovieType } from "@/app/type";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

interface postType {
  yorum: string | string[];
  movieId: any;
}

const Post = ({ movie }: { movie: MovieType }) => {
  const [post, setPost] = useState<postType>({
    yorum: "",
    movieId: movie.id,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(post);
  };
  return (
    <div className="mt-3 border-t flex flex-col items-center   ">
      <div className="text-xl md:text-2xl text-center">Kullanıcı Yorumları</div>
      <div className=" border border-orange-500 rounded-xl w-full md:w-[70%] h-40 flex  gap-3 p-3">
        <FaUser size={60} color={"orange"} />
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-end gap-3"
        >
          <textarea
            value={post.yorum}
            onChange={(e) =>
              setPost({
                ...post,
                yorum: e.currentTarget.value,
              })
            }
            placeholder="---> Hadi bir şeyler yaz..."
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
