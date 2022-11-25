import React from "react";
import { NavLink } from "react-router-dom";
import TextMessage from "./TextMessage";

const MobileMessage = () => {
  return (
    <div className="w-screen h-screen bg-Banner">
      {/* Header */}
      <div className="h-[10vh] border-b border-b-slate-300 px-4 py-2 relative">
        <div className="flex justify-between items-end h-full">
          {/* Left */}
          <div className="">
            <h1 className="text-xl font-bold mb-2">Timothy Valdez</h1>
            <h5 className="flex gap-1">
              Web Development <i className="fa-solid fa-pencil text-xs"></i>
            </h5>
          </div>
          {/* Right */}
          <div className="h-full flex items-end">
            <h5 className="cursor-pointer">View Contract</h5>
          </div>
        </div>
        <div className="absolute top-2 right-2 cursor-pointer">
          <NavLink to="/messages">
            <i className="fa-solid fa-x"></i>
          </NavLink>
        </div>
      </div>

      {/* Body */}
      <div className="h-[80vh] py-2 px-4">
        <div className="flex flex-col justify-end items-end h-full overflow-hidden">
          <TextMessage text="Hey, how are you doing?" />
          <TextMessage text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident sint dolores natus ut consequatur! Tempora iure dignissimos voluptate temporibus quod mollitia, explicabo delectus voluptatibus natus quisquam numquam magni provident doloremque." />
        </div>
      </div>

      {/* Sending Message */}
      <div className="h-[10vh] border-t border-t-slate-300">
        <div className="h-full px-2 flex gap-4 justify-between items-center w-full">
          <div className="bg-white p-2 rounded-md w-[85%] flex items-center gap-2 shadow-sm">
            {/* Attachment */}
            <div>
              <i className="fa-solid fa-paperclip text-xl cursor-pointer text-gray-400"></i>
            </div>

            {/* Input */}
            <div className="">
              <input
                type="text"
                id="input"
                placeholder="Write message"
                className="w-full border-none outline-none"
              ></input>
            </div>
          </div>
          {/* Arrow */}
          <div className="w-[15%]">
            <i className="fa-solid fa-paper-plane text-lg text-[#2196F3] bg-white shadow-md py-2 px-3 flex justify-center items-center w-max rounded-full cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMessage;
