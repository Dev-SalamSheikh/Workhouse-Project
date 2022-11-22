import { useState } from "react";
import MessagePopup from "./MessagePopup";
import ViewMorePopup from "./ViewMorePopup";

const FreelancerJobCard = ({ img, title, location, author, price }) => {
  // States
  const [viewMore, setViewMore] = useState(false);
  const [messagePopup, setMessagePopup] = useState(false);

  // OnClick Function
  const openMessage = () => {
    setViewMore(!viewMore);
    setMessagePopup(!messagePopup);
  };

  return (
    <div className="w-full p-2 md:py-6 md:px-4 rounded-xl border border-black mb-4 bg-freelancerBg">
      <div className="flex justify-between flex-wrap gap-2 md:gap-6 lg:gap-0 md:flex-nowrap">
        {/* Image */}
        <div className="w-full md:w-3/12 lg:w-2/12">
          <img
            src={img}
            alt=""
            className="w-full lg:h-[130px] h-[200px] md:h-[100%] rounded-md"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-9/12 flex gap-4 lg:gap-6 flex-col">
          {/* Heading Content */}
          <div className="w-full">
            <h1 className="text-base lg:text-xl font-semibold">{title}</h1>
          </div>

          {/* View More */}
          <div className="w-full flex justify-between items-center lg:flex-nowrap flex-wrap gap-2 lg:gap-0">
            {/* Skills */}
            <div className="lg:w-full">
              <span className="text-sm md:text-base text-freelancerOrange font-semibold">
                Skills Required
              </span>
            </div>

            {/* Button */}
            <div className="lg:w-full text-center">
              <button
                className="border border-black text-sm md:text-base px-2 font-semibold rounded-full"
                onClick={() => setViewMore(!viewMore)}
              >
                View More
              </button>
            </div>

            {/* Stars */}
            <div className="lg:w-full text-sm md:text-base justify-end text-freelancerOrange flex gap-1">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>

          {/* Footer */}
          <div className="w-full flex justify-between items-center flex-col md:flex-row">
            {/* Offer */}
            <div className="lg:w-full">
              <span className="font-semibold">Offered by: {author}</span>
            </div>

            {/* Button */}
            <div className="lg:w-full lg:text-center">
              <span className="font-semibold">Location: {location}</span>
            </div>

            {/* Stars */}
            <div className="lg:w-full justify-end text-freelancerOrange flex gap-1 font-semibold">
              <span>${price}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay Div */}
      {viewMore && (
        <ViewMorePopup
          openMessage={openMessage}
          setViewMore={setViewMore}
          viewMore={viewMore}
          title={title}
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
  );
};

export default FreelancerJobCard;
