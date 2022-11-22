import JobSearchCard from "./JobSearchCard";
import IBM from "../images/assets/ibm.png";
import Starbucks from "../images/assets/starbucks.jpg";
import { useState } from "react";

const JobSearchCards = () => {
  // States
  const [toggleFilter, setToggleFilter] = useState(true);

  // Job Card Data
  const data = [
    {
      id: 1,
      img: IBM,
      brand: "IBM",
      category: "Techonology",
      position: "Software Developer",
      city: "Newcastle",
      salary: "$85,000",
    },
    {
      id: 2,
      img: Starbucks,
      brand: "Starbucks",
      category: "Fastfood",
      position: "Store Manager",
      city: "Manchester",
      salary: "$32,000",
    },
    {
      id: 3,
      img: IBM,
      brand: "IBM",
      category: "Techonology",
      position: "Software Developer",
      city: "Newcastle",
      salary: "$55,000",
    },
  ];
  return (
    <div className="bg-Banner pb-10">
      <div className="container mx-auto">
        <div className="flex justify-between gap-4 flex-wrap lg:flex-nowrap">
          {/* Left Side */}
          {toggleFilter && (
            <div className="left w-full lg:w-2/12">
              {/* Heading */}
              <p className="text-xl md:text-2xl font-semibold pl-4">
                Filter <i className="fa-solid fa-arrow-up-wide-short"></i>
              </p>

              {/* Filtered Item */}
              <div className="flex flex-col gap-2 mt-4 md:mt-8 pl-4">
                <span className="text-base md:text-lg font-semibold cursor-pointer">
                  Salary <i className="fa-solid fa-sort-down ml-1"></i>
                </span>
                <span className="text-base md:text-lg font-semibold cursor-pointer">
                  Location <i className="fa-solid fa-sort-down ml-1"></i>
                </span>
                <span className="text-base md:text-lg font-semibold cursor-pointer">
                  Industry <i className="fa-solid fa-sort-down ml-1"></i>
                </span>
                <span className="text-base md:text-lg font-semibold cursor-pointer">
                  Skills needed <i className="fa-solid fa-sort-down ml-1"></i>
                </span>
                <span className="text-base md:text-lg font-semibold cursor-pointer">
                  Experience <i className="fa-solid fa-sort-down ml-1"></i>
                </span>
                <span className="text-base md:text-lg font-semibold cursor-pointer">
                  Education Level <i className="fa-solid fa-sort-down ml-1"></i>
                </span>
              </div>

              {/* Sort By */}
              <div
                className="py-2 px-4 rounded-md md:mt-8 mt-4 mx-4"
                style={{ backgroundColor: "#A4E0F6" }}
              >
                <select className="w-full bg-transparent outline-none border-none font-light cursor-pointer">
                  <option>Sort By</option>
                  <option value="price">Price</option>
                  <option value="Experience">Experience</option>
                  <option value="Location">Location</option>
                  <option value="Nearest Venues">Nearest Venues</option>
                </select>
              </div>
            </div>
          )}
          {/* Right Side */}
          <div
            className={`right px-4 lg:px-0 md:w-full ${
              toggleFilter === true ? "lg:w-10/12" : "lg:w-full"
            } flex gap-8`}
          >
            {/* Arrow */}
            <div className="hidden lg:block">
              <i
                className={`fa-solid ${
                  toggleFilter === false ? "fa-arrow-right" : "fa-arrow-left"
                } text-4xl cursor-pointer`}
                onClick={() => setToggleFilter(!toggleFilter)}
              ></i>
            </div>
            {/* Card Container */}
            <div className="w-full">
              {data.map((card) => (
                <JobSearchCard
                  key={card.id}
                  brand={card.brand}
                  category={card.category}
                  city={card.city}
                  img={card.img}
                  position={card.position}
                  salary={card.salary}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearchCards;
