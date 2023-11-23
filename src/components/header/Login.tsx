"use client";
import Link from "next/link";

const Login = () => {
  return (
    <Link
      href="/login"
      className="relative inline-block px-4 py-2 font-medium group"
    >
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-orange-500"></span>
      <span className="relative text-black group-hover:text-white">
        Giriş Yap
      </span>
    </Link>
  );
};

export default Login;
