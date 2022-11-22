import { useState } from "react";
import MessagePopup from "./MessagePopup";

const LocalServiceCard = ({ img, title, author }) => {
  // States
  const [openMessage, setOpenMessage] = useState(false);

  return (
    <div className="mb-4 md:mb-0 rounded-md w-full border border-buttonRed px-4 py-4 md:pt-8 md:pb-5">
      <div className="flex gap-2 md:gap-10 flex-col md:flex-row">
        {/* Left */}
        <div>
          <img src={img} alt="" className="rounded-xl brightness-90" />
        </div>

        {/* Right */}
        <div className="w-full">
          {/* Heading */}
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>
          </div>

          {/* Service Provider */}
          <div className="md:mt-4 mt-2">
            <h5 className="font-semibold md:text-lg">
              Service Provider: {author}
            </h5>
          </div>

          {/* Availabality */}
          <div className="flex items-center gap-4">
            <h5 className="font-semibold md:text-lg">Availability: </h5>
            <label
              htmlFor="toogleB"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input id="toogleB" type="checkbox" className="sr-only" />
                <div className="w-8 h-3 bg-gray-300 rounded-full shadow-inner"></div>
                <div className="dot text-buttonRed absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
              </div>
            </label>
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-1">
            <h5 className="font-semibold md:text-lg">Ratings:</h5>
            <div className="text-sm text-buttonRed flex gap-1">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>

          {/* button */}
          <div className="text-end w-full">
            <button
              className="bg-localRed md:text-lg font-semibold text-white px-4 py-[2px] rounded-md cursor-pointer"
              onClick={() => setOpenMessage(!openMessage)}
            >
              Book
            </button>
          </div>
        </div>
      </div>
      {openMessage && (
        <MessagePopup
          messagePopup={openMessage}
          setMessagePopup={setOpenMessage}
        />
      )}
    </div>
  );
};

export default LocalServiceCard;
