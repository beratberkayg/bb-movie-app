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
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const [menu, setMenu] = useState<boolean>(false);
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
