"use client";

import { FaUser } from "react-icons/fa";
import { auth } from "@/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const User = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="cursor-pointer border border-white bg-slate-200 rounded-full py-2 px-2 text-orange-500 hover:text-slate-200 hover:bg-orange-500 hover:transition-all ">
      <FaUser size={25} />
    </div>
  );
};

export default User;
