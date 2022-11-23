import React from "react";

const PodcastSearch = () => {
  return (
    <div className="bg-Banner md:py-12 md:my-0 md:mx-0 py-6">
      <div className="container w-10/12 mx-auto bg-podcastSearch rounded-md md:px-10 md:pt-10 md:pb-2 p-4">
        {/* Content */}
        <div>
          {/* Search Input */}
          <div className="bg-white flex items-center gap-4 rounded-md py-2 px-4">
            <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
            <input
              type="text"
              placeholder="Search Podcasts"
              className="bg-transparent border-none outline-none w-full"
            />
            <i className="fa-solid fa-circle-xmark text-gray-500 cursor-pointer"></i>
          </div>

          {/* Filter */}
          <div className="flex gap-2 mt-2">
            <div className="bg-SearchBtnBg md:text-lg font-semibold flex items-center gap-2 md:px-8 px-2 py-1 rounded-md cursor-pointer">
              <span className="">Genre</span>
              <i className="fa-solid fa-caret-down"></i>
            </div>
            <div className="bg-SearchBtnBg md:text-lg font-semibold flex items-center gap-2 md:px-8 px-2 py-1 rounded-md cursor-pointer">
              <span className="">Length</span>
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap md:flex-nowrap gap-2 md:gap-4 justify-start md:justify-end">
            <div className="bg-SearchBtnBg lg:text-lg font-semibold gap-2 px-6 lg:px-8 py-1 rounded-md cursor-pointer">
              <span className="">Create a podcast</span>
            </div>
            <div className="bg-SearchBtnBg lg:text-lg font-semibold gap-2 px-6 lg:px-8 py-1 rounded-md cursor-pointer">
              <span className="">View your podcast</span>
            </div>
            <div className="bg-SearchBtnBg lg:text-lg font-semibold gap-2 px-6 lg:px-8 py-1 rounded-md cursor-pointer">
              <span className="">Book a slot</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastSearch;
