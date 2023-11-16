"use client";

import "./preloader.css";

const Preloader = () => {
  return (
    <div className="preloader bg-[#030014] ">
      <div className="h-full w-full flex items-center justify-center relative">
        <video
          autoPlay
          muted
          loop
          className="rotate-180 absolute top-[0] left-0 z-[-1] w-full h-full object-cover"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
        <div className="preloader-text text-black text-2xl md:text-3xl w-full text-center shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md py-1">
          I'm BB, this is my design...
        </div>
      </div>
    </div>
  );
};

export default Preloader;
