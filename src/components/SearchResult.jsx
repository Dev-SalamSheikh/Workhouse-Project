import React from "react";
import Sector1 from "../images/sector1.jpg";
import Sector2 from "../images/sector2.png";
import Sector3 from "../images/sector3.jpg";
import Sector4 from "../images/sector4.jpg";
import Location1 from "../images/location1.jpg";
import Location2 from "../images/location2.jpg";
import Location3 from "../images/location3.jpg";
import Location4 from "../images/location4.jpg";
import { useState } from "react";

const SearchResult = () => {
  // States
  const [sectorCard, setSectorCard] = useState(true);
  const [locationCard, setLocationCard] = useState(false);

  //   Open Sector Card Function
  const openSectorCard = () => {
    setLocationCard(false);
    setSectorCard(true);
  };

  //   Open Locatioon Card Function
  const openLocationCard = () => {
    setSectorCard(false);
    setLocationCard(true);
  };

  //   Sector Card Data
  const sectorData = [
    {
      id: 1,
      image: Sector1,
      title: "Technology",
    },
    {
      id: 2,
      image: Sector2,
      title: "Engineering",
    },
    {
      id: 3,
      image: Sector3,
      title: "Graduates",
    },
    {
      id: 4,
      image: Sector4,
      title: "Health",
    },
  ];

  //   Locatiion Card Data
  const locationData = [
    {
      id: 1,
      image: Location1,
      title: "London",
    },
    {
      id: 2,
      image: Location2,
      title: "Manchester",
    },
    {
      id: 3,
      image: Location3,
      title: "Bringham",
    },
    {
      id: 4,
      image: Location4,
      title: "Leeds",
    },
  ];

  return (
    <div className="mt-16">
      {/* Heading */}
      <div className="flex gap-6 justify-center mb-8">
        <span
          className={`text-base lg:text-xl font-bold cursor-pointer ${
            sectorCard
              ? "border-b border-borderColor pb-3 text-borderColor"
              : ""
          }`}
          onClick={openSectorCard}
        >
          Search by sector
        </span>
        <span
          className={`text-base lg:text-xl font-semibold cursor-pointer ${
            locationCard
              ? "border-b border-borderColor pb-3 text-borderColor"
              : ""
          }`}
          onClick={openLocationCard}
        >
          Search by location
        </span>
      </div>

      {/*Sector Card Item */}
      {sectorCard && (
        <div className="flex md:justify-center lg:justify-start gap-1 md:gap-4 flex-wrap lg:flex-nowrap">
          {sectorData.map((card) => (
            <div
              key={card.id}
              className="w-full md:w-[48%] lg:w-3/12 cursor-pointer"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-48 w-full rounded-xl"
              />
              <h2 className="text-lg font-semibold lg:pl-6 my-3 text-center lg:text-start">
                {card.title}
              </h2>
            </div>
          ))}
        </div>
      )}

      {/*Location Card Item */}
      {locationCard && (
        <div className="flex gap-4">
          {locationData.map((card) => (
            <div key={card.id} className="w-3/12 cursor-pointer">
              <img
                src={card.image}
                alt={card.title}
                className="h-48 w-full rounded-xl"
              />
              <h2 className="text-lg font-semibold pl-6 my-3">{card.title}</h2>
            </div>
          ))}
        </div>
      )}

      {/* More Buttons */}
      <div className="flex justify-center mt-8">
        <span className="cursor-pointer text-xl font-semibold border-b border-borderColor pb-1">
          See more sectors
        </span>
      </div>
    </div>
  );
};

export default SearchResult;
