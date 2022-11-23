import React from "react";

const UpdatePasswordPopup = ({ passwordToggle, setPasswordToggle }) => {
  return (
    <div
      className={`bg-black bg-opacity-60 fixed inset-0 flex justify-center items-center`}
    >
      <div
        style={{ backgroundColor: "#BAE9F2" }}
        className={`pt-8 pb-4 px-6 w-full max-w-[500px] rounded-md relative mx-5`}
      >
        {/* Cross mark */}
        <div className="absolute top-0 right-1">
          <i
            className="fa-regular fa-circle-xmark text-lg text-black cursor-pointer"
            onClick={() => setPasswordToggle(!passwordToggle)}
          ></i>
        </div>
        {/* Content */}
        <div>
          {/* Current Password */}
          <div className="bg-white py-[10px] px-4 rounded-md">
            <input
              type="password"
              placeholder="Type your current password"
              className="bg-transparent w-full outline-none border-none"
            />
          </div>

          {/* Choose Password */}
          <div className="bg-white py-[10px] px-4 rounded-md mt-6 mb-1">
            <input
              type="password"
              placeholder="Choose Password*"
              className="bg-transparent w-full outline-none border-none"
            />
          </div>

          {/* Confirm Password */}
          <div className="bg-white py-[10px] px-4 rounded-md">
            <input
              type="password"
              placeholder="Repeat Password*"
              className="bg-transparent w-full outline-none border-none"
            />
          </div>

          {/* Button */}
          <div className="mt-10 text-center">
            <button
              style={{ backgroundColor: "#687089" }}
              className="w-6/12 py-2 text-white rounded-full"
            >
              Update Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePasswordPopup;
