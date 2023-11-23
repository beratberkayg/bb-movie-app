import React from "react";
import Logo from "./Logo";
import User from "./User";
import HamburgerMenu from "./HamburgerMenu";
import Login from "./Login";

const Navbar = () => {
  return (
    <div className="mt-3 md:mt-5 w-full h-16 flex items-center justify-between  border-b border-gray-500 ">
      <Logo />
      <Login />
      <User />
      <HamburgerMenu />
    </div>
  );
};

export default Navbar;
