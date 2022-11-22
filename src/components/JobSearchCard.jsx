import { useState } from "react";
import MessagePopup from "./MessagePopup";
import ViewMorePopup from "./ViewMorePopup";

const JobSearchCard = ({ img, salary, city, position, category, brand }) => {
  // States
  const [viewMore, setViewMore] = useState(false);
  const [messagePopup, setMessagePopup] = useState(false);

  // OnClick Function
  const openMessage = () => {
    setViewMore(!viewMore);
    setMessagePopup(!messagePopup);
  };
  return (
    <div
      className="w-full p-2 lg:py-6 lg:px-4 rounded-xl border border-black mb-4"
      style={{ backgroundColor: "#A4E0F6" }}
    >
      <div className="flex justify-between flex-wrap md:flex-nowrap md:gap-6 lg:gap-0">
        {/* Image */}
        <div className="w-full md:w-3/12 lg:w-2/12">
          <img
            src={img}
            alt={`${brand}_img`}
            className="w-full md:h-full lg:h-[110px] rounded-md"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-9/12 flex flex-col justify-between">
          {/* Upper Content */}
          <div className="flex justify-between lg:items-center flex-col lg:flex-row gap-2 lg:gap-0">
            {/* Brand Name */}
            <div className="lg:w-full">
              <h1 className="text-xl md:text-2xl font-semibold">{brand}</h1>
            </div>

            {/* Category */}
            <div className="lg:w-full text-sm md:text-base">
              <span className="font-semibold">{category}</span>
            </div>

            {/* Position */}
            <div className="lg:w-full text-sm md:text-base">
              <p className="font-semibold">{position}</p>
            </div>
          </div>

          {/* Lower Content */}
          <div className="flex justify-between mt-1 lg:mt-0 lg:items-center flex-col lg:flex-row gap-2">
            {/* City */}
            <div className="lg:w-full">
              <p className="font-semibold">{city}</p>
            </div>
            {/* Salary */}
            <div className="lg:w-full">
              <p className="font-semibold text-sm md:text-base">
                Expected Salary {salary}PA
              </p>
            </div>

            {/* View More Button */}
            <div className="lg:w-full text-end">
              <button
                className="border border-black rounded-md p-2 font-semibold"
                onClick={() => setViewMore(!viewMore)}
              >
                View More
              </button>
            </div>
          </div>

          {/* Overlay Popup */}
          {viewMore && (
            <ViewMorePopup
              openMessage={openMessage}
              setViewMore={setViewMore}
              viewMore={viewMore}
              title={brand}
            />
          )}

          {/* Message Box */}
          {messagePopup && (
            <MessagePopup
              messagePopup={messagePopup}
              setMessagePopup={setMessagePopup}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default JobSearchCard;
