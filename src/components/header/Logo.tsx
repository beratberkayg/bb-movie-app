import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/home"} className="text-bold text-lg">
      <span className="text-2xl md:text-3xl font-bold text-orange-500">BB</span>{" "}
      Movie App
    </Link>
  );
};

export default Logo;
