"use client";

import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/utils/firebase";
import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";
import {
  Timestamp,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { YorumlarProps } from "@/app/type";
import Comment from "@/components/main/Comment";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const UserProfile = ({ params }: { params: { userId: string } }) => {
  const userId = params.userId[0];
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [yorumlar, setYorumlar] = useState<YorumlarProps[]>([]);

  const getUserData = async () => {
    if (loading) return;
    if (!user) return router.push("/home");

    const collectionRef = collection(db, "yorumlar");
    const q = query(collectionRef, where("kullaniciId", "==", user.uid));
    const unsub = onSnapshot(q, (snap) => {
      setYorumlar(
        snap.docs.map((doc) => ({
          ...(doc.data() as YorumlarProps),
          id: doc.id,
        }))
      );
    });
  };

  const deleteComment = async (id: string) => {
    const docRef = doc(db, "yorumlar", id);
    await deleteDoc(docRef);
  };

  useEffect(() => {
    getUserData();
  }, [user, loading]);

  console.log(yorumlar);

  return (
    <div className="mt-3">
      <div className="flex items-center justify-center flex-col gap-3 border-b py-3">
        <div className="text-orange-500 border rounded-full w-[100px] h-[100px] flex items-center justify-center bg-white shadow-xl shadow-[#2A0E61]/50">
          <FaUser size={70} />
        </div>
        <div className="text-xl md:text-2xl">{user?.displayName}</div>
      </div>
      <div className="mt-3 w-full flex justify-around lg:justify-around px-2 py-1 text-sm md:text-xl lg:text-2xl font-medium border-b border-blue-700 shadow-xl shadow-[#2A0E61]/50">
        <div
          onClick={() => setShow(!show)}
          className={`cursor-pointer ${
            show ? " text-blue-500 -translate-y-1" : ""
          }`}
        >
          Yorumlarım
        </div>
        <div
          onClick={() => setShow(!show)}
          className={`cursor-pointer ${
            show ? " " : "text-blue-500 -translate-y-1"
          }`}
        >
          Beğendiğim Filmler
        </div>
      </div>
      <div className="mt-3">
        {!show ? (
          <div>Beğendiğim filmler</div>
        ) : (
          <div className="flex items-center justify-center flex-wrap mt-1 gap-3 py-3">
            {yorumlar.map((yorum) => (
              <Comment key={yorum.id} yorum={yorum} id="">
                {
                  <div className="flex flex-col">
                    <AiFillDelete
                      onClick={() => deleteComment(yorum.id)}
                      size={30}
                      color={"red"}
                    />
                  </div>
                }
              </Comment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
