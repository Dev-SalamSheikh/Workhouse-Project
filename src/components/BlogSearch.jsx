import React, { useState } from "react";

const BlogSearch = () => {
  const [inputData, setInputData] = useState("");
  return (
    <div>
      <div className="bg-Banner md:pt-12 md:pb-2 md:my-0 md:mx-0 py-6">
        <div className="container w-10/12 mx-auto bg-podcastSearch rounded-md md:px-10 md:pt-10 md:pb-4 p-4">
          {/* Content */}
          <div>
            {/* Search Input */}
            <div className="bg-white flex items-center gap-4 rounded-md py-2 px-4">
              <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
              <input
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                type="text"
                placeholder="Search Blogs"
                className="bg-transparent border-none outline-none w-full"
              />
              <i
                className="fa-solid fa-circle-xmark text-gray-500 cursor-pointer"
                onClick={() => setInputData("")}
              ></i>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex flex-wrap md:flex-nowrap gap-2 md:gap-4 justify-start">
              <div className="bg-SearchBtnBg md:text-lg font-semibold gap-2 px-4 py-1 rounded-md cursor-pointer">
                <span className="">Write</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSearch;
