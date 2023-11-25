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
    <div className="w-[200px] h-[200px] z-10 rounded-md bg-orange-500 absolute -top-10 right-0 transition-all flex flex-col justify-center items-center">
      <div
        className="absolute top-10 right-0 cursor-pointer"
        onClick={() => setMenu(!menu)}
      >
        <IoClose size={35} />
      </div>
      <div className="mt-8 flex flex-col gap-5">
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
