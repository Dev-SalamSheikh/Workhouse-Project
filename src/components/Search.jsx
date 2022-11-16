import React from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import TopEmployers from "./TopEmployers";

const Search = () => {
  return (
    <div className="lg:py-16 py-8 bg-EmployersBg">
      <div className="mx-auto container px-8 lg:px-0 lg:w-8/12 flex justify-center items-center flex-col">
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
