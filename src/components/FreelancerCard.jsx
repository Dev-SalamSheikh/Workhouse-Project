import React from "react";

const FreelancerCard = ({ img, title }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center">
      <img
        src={img}
        alt={title}
        className="w-20 h-20 lg:w-28 rounded-full lg:h-28 object-cover"
      />
      <h1 className="text-base lg:text-lg font-semibold">{title}</h1>
    </div>
  );
};

export default FreelancerCard;
