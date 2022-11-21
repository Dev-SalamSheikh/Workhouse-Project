import React from "react";

const ViewMorePopup = ({ viewMore, setViewMore, title, openMessage }) => {
  return (
    <div
      className={`bg-black bg-opacity-60 fixed inset-0 flex justify-center items-center`}
    >
      <div
        className={`bg-white p-1 w-full max-w-[500px] rounded-md relative mx-5`}
      >
        {/* Cross mark */}
        <div className="absolute top-2 right-2">
          <i
            className="fa-regular fa-circle-xmark text-xl cursor-pointer"
            onClick={() => setViewMore(!viewMore)}
          ></i>
        </div>
        <div className="p-4 rounded-md">
          <div>
            <p className="font-semibold">Job Description</p>
          </div>

          {/* Title */}
          <div>
            <h1 className="text-lg font-semibold my-2">{title}</h1>
          </div>

          {/* Desc */}
          <div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              consequuntur necessitatibus quis quae, vel, eos molestiae eaque
              nostrum porro animi voluptate veritatis beatae itaque aliquid
              alias asperiores aliquam vero unde dolor. Adipisci cupiditate
              totam quo omnis tenetur, aut eveniet alias dolor asperiores
              architecto doloremque nihil sit porro tempora sequi voluptate ad
              voluptates sed recusandae ab vero iusto soluta velit. Tenetur quos
              nam aperiam optio voluptas dolorem. Ea ducimus, quo, beatae ut
              animi quasi officiis accusantium ullam ab quidem harum repellat,
              molestiae fugiat cupiditate tenetur optio fugit ratione aliquam
              perspiciatis possimus eveniet. Reiciendis est tempora molestiae
              inventore sit eos repellat animi.
            </p>
          </div>

          {/* Button */}
          <div className="mt-6 text-end">
            <button
              onClick={openMessage}
              className="px-4 rounded-md font-semibold text-white py-1"
              style={{ background: "#267EA6" }}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMorePopup;
