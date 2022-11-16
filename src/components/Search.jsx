import React from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import TopEmployers from "./TopEmployers";

const Search = () => {
  return (
    <div className="py-16 bg-EmployersBg">
      <div className="mx-auto container w-8/12 flex justify-center items-center flex-col">
        {/* SearchBar */}
        <SearchBar />

        {/* Top Employers Components */}
        <TopEmployers />

        {/* Search Result */}
        <SearchResult />
      </div>
    </div>
  );
};

export default Search;
