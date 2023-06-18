import React from "react";
import searchIcon from "../../images/search.svg";
const SearchBar = () => {
  return (
    <div className="flex  px-2 h-11 bg-[#f5f5f5] w-96 items-center gap-3">
      <img src={searchIcon} className="h-5" alt="" />
      <input
        type="text "
        className="placeholder:text-[#787486] bg-transparent outline-none"
        placeholder="Search for anything..."
      />
    </div>
  );
};

export default SearchBar;
