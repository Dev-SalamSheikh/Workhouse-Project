import React from "react";

const SearchBar = () => {
  return (
    <div className=" bg-SearchBar text-white flex justify-between items-center gap-16 px-4 pt-8 pb-12 rounded-lg w-full">
      {/* Search Content */}

      {/* Left */}

      <div className="w-full">
        <h3 className="text-2xl font-semibold mb-2">Where</h3>
        <div className="bg-white text-gray-300 p-2 rounded-md flex justify-center items-center gap-4">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none border-none text-black w-full"
          />
        </div>
      </div>

      {/* Right */}

      <div className="w-full">
        <h3 className="text-2xl font-semibold mb-2">What</h3>
        <div className="flex justify-center items-center gap-4">
          <div className="bg-white text-gray-300 p-2 rounded-md flex items-center gap-4 w-full">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none border-none text-black w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-SearchBtnBg py-[6px] px-6 rounded-md text-ThemeBlue font-bold text-lg hover:bg-ThemeBlue hover:text-white duration-300 w-max"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
