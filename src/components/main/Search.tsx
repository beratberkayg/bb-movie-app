import React from "react";

const Search = () => {
  return (
    <div>
      <input
        id="search"
        type="text"
        className="w-full outline-none p-1 rounded-md text-blue-700 font-medium text-center text-lg shadow-[#2A0E61] shadow-lg "
        placeholder="Ne Aramıştınız ?"
      />
    </div>
  );
};

export default Search;
