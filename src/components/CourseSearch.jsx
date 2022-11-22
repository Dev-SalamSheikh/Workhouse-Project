import React, { useState } from "react";

const CourseSearch = () => {
  // States
  const [inputValue, setInputValue] = useState({
    searchCourse: "",
    category: "",
  });
  return (
    <div className="bg-Banner py-6 px-8">
      {/* Upper Part */}
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Browse our unlimited range of courses
        </h1>
      </div>

      {/* SearchBox */}
      <div className="lg:my-16 my-4">
        <div className="w-full lg:w-10/12 mx-auto bg-coursesSearchBar lg:py-16 p-4 lg:px-6 rounded-xl flex justify-between flex-wrap lg:flex-nowrap gap-4 lg:gap-0">
          {/* Search Relevent Courses */}
          <div className="bg-white p-3 lg:p-4 flex items-center gap-4 rounded-lg w-full md:w-7/12">
            <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
            <input
              value={inputValue.searchCourse}
              onChange={(e) =>
                setInputValue({
                  ...inputValue,
                  searchCourse: e.target.value,
                })
              }
              type="text"
              placeholder="Search Freelancer Contacts"
              className="bg-transparent border-none outline-none w-full"
            />
            <i className="fa-solid fa-circle-xmark text-gray-500 cursor-pointer"></i>
          </div>

          {/* Category */}
          <div className="bg-white p-3 lg:p-4 rounded-lg w-full md:w-4/12">
            <select
              className="cursor-pointer bg-transparent outline-none w-full text-gray-500"
              value={inputValue.category}
              onChange={(e) =>
                setInputValue({
                  ...inputValue,
                  category: e.target.value,
                })
              }
            >
              <option value="">Category</option>
              <option value="web development">Web Development</option>
              <option value="digital marketing">Digital Marketing</option>
              <option value="seo">SEO Optimization</option>
              <option value="voice">Voice Artist</option>
              <option value="contentwriter">Content Writer</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSearch;
