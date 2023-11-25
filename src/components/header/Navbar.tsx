"use client";
import React from "react";
import Logo from "./Logo";
import User from "./User";
import HamburgerMenu from "./HamburgerMenu";
import Login from "./Login";
import { auth, db } from "@/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Search from "../main/Search";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const [menu, setMenu] = useState<boolean>(false);
  const router = useRouter();

  if (loading) {
    return (
      <nav className="flex justify-center items-center pt-10 pb-7 border-b border-black">
        <h2 className="text-2xl">Kullanıcı Bekleniyor...</h2>
      </nav>
    );
  }

  return (
    <div className="mt-3 md:mt-5 w-full h-16 flex items-center justify-between  border-b border-gray-500 ">
      <Logo />
      <div className="flex-1 mx-5 hidden md:inline-block">
        <Search />
      </div>
      {user ? (
        <div onClick={() => setMenu(!menu)}>
          <User />
        </div>
      ) : (
        <Login />
      )}
      {menu && <HamburgerMenu menu={menu} setMenu={setMenu} />}
    </div>
  );
};

export default Navbar;
