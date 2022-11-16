import React from "react";

const GigCards = ({ image, avatarImg, title }) => {
  return (
    <div className="w-full rounded-md overflow-hidden cursor-pointer shadow-md">
      {/* Image */}
      <div>
        <img src={image} alt={title} className="w-full h-52 brightness-75" />
      </div>
      {/* Content */}
      <div className="bg-white flex items-center gap-4 p-4">
        <div>
          <img
            src={avatarImg}
            alt={avatarImg}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-semibold">{title}</h5>
          <div className="flex gap-2">
            <i className="fa-solid fa-star" style={{ color: "#41A9F4" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#41A9F4" }}></i>
            <i className="fa-solid fa-star" style={{ color: "#41A9F4" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#41A9F4" }}></i>
            <i className="fa-regular fa-star" style={{ color: "#41A9F4" }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigCards;
