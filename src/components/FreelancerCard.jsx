import React from "react";

const FreelancerCard = ({ img, title }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center">
      <img
        src={img}
        alt={title}
        className="w-28 rounded-full h-28 object-cover"
      />
      <h1 className="text-lg font-semibold">{title}</h1>
    </div>
  );
};

export default FreelancerCard;
