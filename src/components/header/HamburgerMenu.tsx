"use client";

import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { auth } from "@/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAppDispatch } from "@/redux/hooks";
import { logOut } from "@/redux/authSlice";

interface HMenuProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu: React.FC<HMenuProps> = ({ menu, setMenu }) => {
  const [user, loading] = useAuthState(auth);
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
    setMenu(!menu);
  };
  return (
    <div className="w-[180px] h-[180px] z-10 rounded-md bg-orange-500 absolute lg:top-24 lg:right-28 top-20 right-3 transition-all flex flex-col justify-center items-center border border-white">
      <div
        className=" absolute right-0 top-2 cursor-pointer hover:text-red-500"
        onClick={() => setMenu(!menu)}
      >
        <IoClose size={35} />
      </div>
      <div className="flex flex-col gap-5">
        <Link
          onClick={() => setMenu(!menu)}
          href={`/userprofile/${user?.uid}`}
          className="w-full flex justify-center items-center text-2xl border-b hover:scale-125"
        >
          Profile Git
        </Link>
        <div
          onClick={handleLogOut}
          className="w-full flex justify-center items-center text-2xl border-b hover:scale-125 cursor-pointer"
        >
          Çıkış yap
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
