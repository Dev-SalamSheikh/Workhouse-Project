import React from "react";

const ChangePassWarnPopup = ({ warnPopup, setWarnPopup, updatePassPopup }) => {
  return (
    <div
      className={`bg-black bg-opacity-60 fixed inset-0 flex justify-center items-center`}
    >
      <div
        className={`bg-white pt-2 w-full max-w-[320px] rounded-md relative mx-5`}
      >
        {/* Content */}
        <div>
          {/* Heading */}
          <div className="text-center">
            <p className="font-semibold">
              Would you like to change your <br /> password?
            </p>
          </div>

          {/* Buttons Yes */}
          <div
            className="border-t border-slate-400 text-center p-1 cursor-pointer mt-1"
            onClick={updatePassPopup}
          >
            <span className="text-borderColor font-semibold text-[17px]">
              Yes
            </span>
          </div>

          {/* Buttons No */}
          <div
            className="border-t border-slate-400 text-center p-1 cursor-pointer mt-1"
            onClick={() => setWarnPopup(!warnPopup)}
          >
            <span className="text-borderColor font-semibold text-[17px]">
              No
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassWarnPopup;
