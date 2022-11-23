import React, { useState } from "react";

const LocalServiceSearch = () => {
  const [data, setData] = useState({
    service: "",
    location: "",
  });
  return (
    <div className="bg-Banner pt-6 pb-2 px-8">
      {/* Heading */}
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Find Local Services
        </h1>
      </div>

      {/* SearchBar */}
      <div className="lg:mt-16 my-4">
        <div className="w-full lg:w-10/12 mx-auto bg-localRed p-4 lg:pt-10 lg:pb-8 lg:px-16 rounded-lg">
          {/* SearchBar */}
          <div className="flex flex-wrap gap-2 lg:flex-nowrap justify-between items-center lg:gap-16">
            {/* Services */}
            <div className="w-full">
              <p className="text-xl font-bold text-white pb-2">Service</p>
              <div className="bg-white flex items-center gap-4 rounded-md py-2 px-4">
                <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
                <input
                  value={data.service}
                  onChange={(e) =>
                    setData({
                      ...data,
                      service: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none outline-none w-full"
                />
                {data.service.length >= 1 && (
                  <i
                    className="fa-solid fa-circle-xmark text-gray-500 cursor-pointer"
                    onClick={() =>
                      setData({
                        ...data,
                        service: "",
                      })
                    }
                  ></i>
                )}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-end lg:gap-8 gap-4 w-full flex-col lg:flex-row">
              <div className="w-full">
                <p className="text-xl font-bold text-white pb-2">Location</p>
                <div className="bg-white flex items-center gap-4 rounded-md py-2 px-4">
                  <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
                  <input
                    value={data.location}
                    onChange={(e) =>
                      setData({
                        ...data,
                        location: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Search"
                    className="bg-transparent border-none outline-none w-full"
                  />
                  {data.location.length >= 1 && (
                    <i
                      className="fa-solid fa-circle-xmark text-gray-500 cursor-pointer"
                      onClick={() =>
                        setData({
                          ...data,
                          location: "",
                        })
                      }
                    ></i>
                  )}
                </div>
              </div>
              {/* Button */}
              <div>
                <button className="bg-white text-buttonRed text-lg font-semibold py-[6px] px-6 rounded-lg">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex lg:gap-8 gap-2 mt-8 flex-wrap lg:flex-nowrap">
            {/* Type */}
            <div className="bg-white text-lg font-semibold text-buttonRed flex items-center gap-2 px-8 py-1 rounded-md cursor-pointer">
              <span className="">Type</span>
              <i className="fa-solid fa-caret-down"></i>
            </div>
            {/* Category */}
            <div className="bg-white text-lg font-semibold text-buttonRed flex items-center gap-2 px-8 py-1 rounded-md cursor-pointer">
              <span className="">Category</span>
              <i className="fa-solid fa-caret-down"></i>
            </div>
            {/* Schedule */}
            <div className="bg-white text-lg font-semibold text-buttonRed flex items-center gap-2 px-8 py-1 rounded-md cursor-pointer">
              <span className="">Schedule</span>
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalServiceSearch;
