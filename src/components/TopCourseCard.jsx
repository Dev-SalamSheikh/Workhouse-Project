import React from "react";

const TopCourseCard = ({
  img,
  title,
  authorFristName,
  authorLastName,
  rating,
  price,
}) => {
  return (
    <div className="w-full bg-white cursor-pointer rounded-md overflow-hidden shadow-md">
      <img src={img} alt={title} className="w-full h-48" />
      {/* content*/}
      <div className="py-2 px-4 w-full">
        <p className="text-xl font-semibold">{title}</p>
        <h6 className="pt-1 text-base font-medium">{authorFristName}</h6>
        <h6 className="pb-1 text-base font-medium">{authorLastName}</h6>
        <div className="flex gap-1 my-1">
          <i className="fa-solid fa-star" style={{ color: "#41A9F4" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#41A9F4" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#41A9F4" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#41A9F4" }}></i>
          <i className="fa-solid fa-star" style={{ color: "#41A9F4" }}></i>
        </div>
        <p className="text-borderColor font-semibold text-lg">{price}</p>
      </div>
    </div>
  );
};

export default TopCourseCard;
