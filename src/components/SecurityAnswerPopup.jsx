import React from "react";

const SecurityAnswerPopup = ({ setSecurityAnswer, securityAnswer }) => {
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
            onClick={() => setSecurityAnswer(!securityAnswer)}
          ></i>
        </div>
        {/* Content */}
        <div>
          {/* Current Password */}
          <div className="w-full text-center">
            <span className="text-lg font-semibold">
              Question: What town did you grow up?
            </span>
          </div>

          {/* Choose Password */}
          <div className="bg-white py-[10px] px-4 rounded-md mt-6 mb-1">
            <input
              type="text"
              placeholder="Enter your answer here"
              className="bg-transparent w-full outline-none border-none"
            />
          </div>

          {/* Button */}
          <div
            className="mt-10 text-center"
            onClick={() => setSecurityAnswer(!securityAnswer)}
          >
            <button
              style={{ backgroundColor: "#687089" }}
              className="w-6/12 py-2 text-white rounded-full"
            >
              Update Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityAnswerPopup;
