import React from "react";
import { useState } from "react";

const EventCalendar = () => {
  const [eventSearch, setEventSearch] = useState("");
  const date = [
    { id: 1, text: "1" },
    { id: 2, text: "2" },
    { id: 3, text: "3" },
    { id: 4, text: "4" },
    { id: 5, text: "5" },
    { id: 6, text: "6" },
    { id: 7, text: "7" },
    { id: 8, text: "8" },
    { id: 9, text: "9" },
    { id: 10, text: "10" },
    { id: 11, text: "11" },
    { id: 12, text: "12" },
    { id: 13, text: "13" },
    { id: 14, text: "14" },
    { id: 15, text: "15" },
    { id: 16, text: "16" },
    { id: 17, text: "17" },
    { id: 18, text: "18" },
    { id: 19, text: "19" },
    { id: 20, text: "20" },
    { id: 21, text: "21" },
    { id: 22, text: "22" },
    { id: 23, text: "23" },
    { id: 24, text: "24" },
    { id: 25, text: "25" },
    { id: 26, text: "26" },
    { id: 27, text: "27" },
    { id: 28, text: "28" },
    { id: 29, text: "29" },
    { id: 30, text: "30" },
    { id: 31, text: "31" },
  ];

  const ColorItem = (e) => {
    const item = e.target;
    item.style.backgroundColor = "#41A9F4";
    item.style.color = "#fff";
  };

  return (
    <div className="px-8 py-8 md:py-16 bg-Banner">
      <div className="content">
        {/* SearchBar*/}
        <div className="flex justify-between items-center gap-4 lg:gap-0 flex-wrap lg:flex-nowrap">
          {/* Filter By */}
          <div className="w-full lg:w-2/12">
            <h2 className="text-xl text-center lg:text-start lg:text-3xl font-semibold">
              Filter By <i className="fa-solid fa-arrow-up-wide-short"></i>
            </h2>
          </div>
          {/* SearchBox */}
          <div className="w-full">
            <div className="bg-white flex gap-4 md:gap-8 items-center p-2 md:p-4 rounded-lg w-full md:w-8/12 mx-auto border-slate-400 border">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Search for upcoming events"
                value={eventSearch}
                onChange={(e) => setEventSearch(e.target.value)}
                className="bg-transparent w-full outline-none border-none"
              />
              {eventSearch.length !== 0 && (
                <span onClick={() => setEventSearch("")}>
                  <i className="fa-solid fa-circle-xmark cursor-pointer"></i>
                </span>
              )}
            </div>
          </div>
          {/* Current month */}
          <div className="w-full lg:w-2/12 flex flex-col items-center lg:items-end">
            <p className="text-base lg:text-lg font-semibold">
              Filter by month/Year
            </p>
            <div className="flex border-2 border-black w-max rounded-full">
              <div className="border-r-2 border-black flex justify-center items-center px-5 py-1">
                <span className="font-semibold text-sm md:text-base">
                  August
                </span>
              </div>
              <div className="flex justify-center items-center px-5 py-1">
                <span className="font-semibold text-sm md:text-base">2022</span>
              </div>
            </div>
          </div>
        </div>
        {/* Calendar Start */}
        <div className="mt-8 md:mt-16 flex justify-between flex-wrap gap-4 md:gap-0 md:flex-nowrap">
          {/* Left */}
          <div className="w-full md:w-2/12 flex justify-between md:justify-start flex-wrap flex-row md:flex-col">
            {/* Deadliness */}
            <div className="mb-2 md:mb-4 w-6/12 md:w-full md:text-start text-center">
              <h2 className="text-lg lg:text-3xl font-semibold cursor-pointer">
                Deadlines <i className="fa-solid fa-chevron-down"></i>
              </h2>
            </div>

            {/* Podcast */}
            <div className="mb-2 md:mb-4 w-6/12 md:w-full md:text-start text-center">
              <h2 className="text-lg lg:text-3xl font-semibold cursor-pointer">
                Podcast <i className="fa-solid fa-chevron-down"></i>
              </h2>
            </div>

            {/* News */}
            <div className="mb-2 md:mb-4 w-6/12 md:w-full md:text-start text-center">
              <h2 className="text-lg lg:text-3xl font-semibold cursor-pointer">
                News <i className="fa-solid fa-chevron-down"></i>
              </h2>
            </div>

            {/* Orders */}
            <div className="mb-2 md:mb-4 w-6/12 md:w-full md:text-start text-center">
              <h2 className="text-lg lg:text-3xl font-semibold cursor-pointer">
                Orders <i className="fa-solid fa-chevron-down"></i>
              </h2>
            </div>
          </div>

          {/* Right */}
          <div className="w-full md:w-9/12">
            <div className="calendar_content border-black border rounded-lg flex flex-wrap overflow-hidden">
              {date.map((item) => (
                <div
                  onClick={(e) => ColorItem(e)}
                  key={item.id}
                  className={`w-[20%] h-[70px] lg:h-[100px] border-black border-l-0 border cursor-pointer flex justify-center items-center text-2xl lg:text-3xl font-bold`}
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
