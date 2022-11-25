import React from "react";

const TextMessage = ({ text }) => {
  return (
    <div
      className="mb-3 md:mb-0 w-max max-w-[80%] md:max-w-[500px] px-4 py-4 rounded-lg text-white relative"
      style={{ backgroundColor: "#2196F3" }}
    >
      <h1 className="text-sm">{text}</h1>
      <i
        class="fa-solid fa-location-arrow absolute -right-[5px] bottom-[20%] text-lg"
        style={{ color: "#2196F3" }}
      ></i>
    </div>
  );
};

export default TextMessage;
