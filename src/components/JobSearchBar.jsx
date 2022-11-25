import React, { useState } from "react";

const JobSearchBar = ({ jobsearch }) => {
  const [searchData, setSearchData] = useState("");
  return (
    <div className="bg-Banner">
      <div className="lg:pt-16 pt-8 pb-8 container w-10/12 mx-auto">
        <div
          className={`py-7 lg:py-14 rounded-xl ${
            jobsearch ? "bg-searchbarBg" : "bg-freelancerBg"
          }`}
        >
          <div className="flex gap-4 items-center justify-between w-11/12 mx-auto border bg-white py-3 px-4 rounded-lg">
            <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
            <input
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
              type="text"
              placeholder="Search Jobs..."
              className="bg-transparent border-none outline-none w-full"
            />
            {searchData.length >= 1 && (
              <i
                className="fa-solid fa-circle-xmark text-gray-500 cursor-pointer"
                onClick={() => setSearchData("")}
              ></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearchBar;
