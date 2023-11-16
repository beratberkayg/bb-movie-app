import React from "react";
import Logo from "./Logo";
import User from "./User";
import HamburgerMenu from "./HamburgerMenu";
import Login from "./Login";

const Navbar = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between gap-3 border-b border-gray-500">
      <Logo />
      <Login />
      <User />
      <HamburgerMenu />
    </div>
  );
};

export default Navbar;
