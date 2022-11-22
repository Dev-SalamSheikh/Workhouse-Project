import React, { useState } from "react";
import LocalServiceCard from "./LocalServiceCard";
import BabySitter from "../images/assets/local1.jpg";
import Guitar from "../images/assets/local2.jpg";

const LocalServicesContainer = () => {
  // States
  const [relevance, setRelevance] = useState(true);
  const [date, setDate] = useState(false);

  //   Filter Function
  const relevanceToggle = () => {
    setRelevance(true);
    setDate(false);
  };
  const DateToggle = () => {
    setDate(true);
    setRelevance(false);
  };

  //   Data
  const data = [
    {
      id: 1,
      img: BabySitter,
      title: "Baby Sitter",
      author: "Faith Payne",
    },
    {
      id: 2,
      img: Guitar,
      title: "Guitar Tutor",
      author: "Simon Jordan",
    },
    {
      id: 3,
      img: BabySitter,
      title: "Baby Sitter",
      author: "Faith Payne",
    },
  ];

  return (
    <div className="bg-Banner pb-14 px-8 md:px-0">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row">
          {/* Left */}
          <div className="w-full text-center md:text-start">
            <h2 className="font-semibold text-xl">
              Services Search Resuslts{" "}
              <i className="fa-solid fa-circle-exclamation"></i>
            </h2>
            <p className="font-semibold">2 jobs of a possible 2</p>
          </div>

          {/* Right */}
          <div className="w-full flex justify-center md:justify-end items-end">
            <div className="border-2 rounded-md border-black w-max flex">
              <div className="py-1 px-2">
                <p
                  onClick={relevanceToggle}
                  className={`font-semibold cursor-pointer ${
                    relevance && "text-buttonRed"
                  }`}
                >
                  Relevence
                </p>
              </div>
              <div className="border-l-2 border-black py-1 px-2">
                {" "}
                <p
                  onClick={DateToggle}
                  className={`font-semibold cursor-pointer ${
                    date && "text-buttonRed"
                  }`}
                >
                  Date
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="mt-8">
          {/* Card */}
          {data.map((item) => (
            <LocalServiceCard
              key={item.id}
              author={item.author}
              img={item.img}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalServicesContainer;
