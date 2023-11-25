"use client";

import { changeEmail, changePassword, login } from "@/redux/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeEmail(e.currentTarget.value));
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changePassword(e.currentTarget.value));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    router.push("/");
  };

  return (
    <div className="flex justify-center mt-3 md:mt-5">
      <div className=" relative w-[90%] md:w-4/6 lg:w-3/6">
        <div className="flex flex-col items-start justify-start py-5 px-10 bg-white   rounded-xl relative z-10">
          <p className="w-full text-4xl font-medium text-center leading-snug font-serif text-black">
            Giriş Yap
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8"
          >
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                Email
              </p>
              <input
                required
                value={email}
                onChange={handleEmailChange}
                placeholder="123@ex.com"
                type="text"
                className="border placeholder-gray-400 focus:outline-none
          focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
          border-gray-300 rounded-md text-black"
              />
            </div>
            <div className="relative">
              <p
                className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
          absolute"
              >
                Password
              </p>
              <input
                required
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                type="password"
                className="border placeholder-gray-400 focus:outline-none
          focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
          border-gray-300 rounded-md text-black"
              />
            </div>
            <div className="relative">
              <button
                type="submit"
                className="w-full inline-block p-2 text-xl font-medium text-center text-white bg-indigo-500
          rounded-lg transition duration-200 hover:bg-indigo-600 ease"
              >
                Giriş Yap
              </button>
            </div>
            <div className="relative">
              <Link
                href={"/register"}
                className="w-full inline-block  text-xl font-medium text-center text-white bg-indigo-500
        rounded-lg transition duration-200 hover:bg-indigo-600 ease p-2"
              >
                Hesap Oluştur
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
