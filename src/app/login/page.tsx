"use client";

import { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<any>("");

  return (
    <div className="flex items-center justify-center w-full rounded-3xl z-10">
      <div className="shadow-black shadow-lg rounded-2xl p-7 flex flex-col gap-7 bg-slate-600 w-4/5 md:w-2/3 lg:w-1/2">
        <div className=" w-full flex items-center justify-center">
          <h2 className="text-2xl font-medium">Giriş Yap</h2>
        </div>
        <form className=" w-full flex flex-col gap-3 border rounded-lg p-5 shadow-2xl">
          <div className="flex flex-col gap-1">
            <label className="cursor-pointer text-xl font-bold" htmlFor="email">
              Email
            </label>
            <input
              className="rounded-md px-1 py-2 outline-none text-lg"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              className="cursor-pointer text-xl font-bold"
              htmlFor="password"
            >
              Şifre
            </label>
            <input
              className="rounded-md px-1 py-2 outline-none text-lg"
              type="password"
              name="password"
              id="password"
              placeholder="Şifreniz"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            className="flex items-center justify-center border py-3 px-3 text-base md:text-xl rounded-lg bg-black text-white cursor-pointer active:scale-50"
            type="submit"
            value="Giriş Yap"
          />
        </form>
        <Link
          href={"/register"}
          className="flex items-center justify-center gap-3 border py-3 px-3 text-base md:text-xl rounded-lg bg-black text-white cursor-pointer active:scale-50"
        >
          Kayıt Ol
        </Link>
      </div>
    </div>
  );
};

export default Login;
