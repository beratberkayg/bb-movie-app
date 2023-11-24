"use client";
import Link from "next/link";

const Register = () => {
  return (
    <div className="flex justify-center mt-3 md:mt-5">
      <div className=" relative max-w-2xl md:w-4/6 lg:w-3/6">
        <div className="flex flex-col items-start justify-start py-5 px-10 bg-white   rounded-xl relative z-10">
          <p className="w-full text-4xl font-medium text-center leading-snug font-serif text-black">
            Hesap Oluştur
          </p>
          <div className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
            <div className="relative">
              <p
                className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
        absolute"
              >
                Kullanıcı Adı
              </p>
              <input
                placeholder="Berat Berkay"
                type="text"
                className="border placeholder-gray-300 focus:outline-none
        focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
        border-gray-300 rounded-md text-black"
              />
            </div>
            <div className="relative">
              <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                Email
              </p>
              <input
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
                placeholder="Password"
                type="password"
                className="border placeholder-gray-400 focus:outline-none
        focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
        border-gray-300 rounded-md text-black"
              />
            </div>
            <div className="relative">
              <button
                className="w-full inline-block p-2 text-xl font-medium text-center text-white bg-indigo-500
        rounded-lg transition duration-200 hover:bg-indigo-600 ease"
              >
                Hesap Oluştur
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
