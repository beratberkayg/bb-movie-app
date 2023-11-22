import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="text-bold text-lg flex items-center gap-1">
      <span className="text-orange-500 text-3xl">BB</span> Movie App
    </Link>
  );
};

export default Logo;
