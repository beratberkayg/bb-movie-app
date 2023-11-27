"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const [keyword, setKeyword] = useState<string | any>();

  const router = useRouter();

  const searchFunc = (e: any) => {
    if (
      (e.key === "Enter" && keyword.length >= 3) ||
      (e.type === "click" && keyword.length >= 3)
    ) {
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  };

  return (
    <div className="flex flex-1 items-center p-3 gap-2">
      <input
        id="search"
        type="text"
        className="w-full outline-none py-1 rounded-md text-blue-700 font-medium text-center text-lg shadow-[#2A0E61] shadow-lg "
        placeholder="Ne Aramıştınız ?"
        value={keyword}
        onKeyDown={searchFunc}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <BiSearch
        className={"hover:text-orange-500"}
        onClick={searchFunc}
        size={35}
        cursor={"pointer"}
      />
    </div>
  );
};

export default Search;
