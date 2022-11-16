import React from "react";

const CopyrightFooter = () => {
  return (
    <div className="border border-t-slate-300 bg-Banner px-8 lg:px-20 py-4 flex md:justify-between items-center flex-wrap md:flex-nowrap justify-center gap-4 md:gap-0">
      {/* Copyright Text */}
      <div>
        <span className="font-semibold">@2015 - 2022 Workhouse.</span>
      </div>
      {/* Social Links */}
      <div className="flex items-center gap-8">
        <div className="flex items-center">
          <span className="font-semibold">Follow us</span>
        </div>
        <div className="text-xl lg:text-2xl flex items-center gap-3">
          <a href="*">
            {" "}
            <i
              className="fa-brands fa-twitter"
              style={{ color: "#1DA1F2" }}
            ></i>
          </a>
          <a href="*">
            <i
              className="fa-regular fa-envelope"
              style={{ color: "#BB001B" }}
            ></i>
          </a>
          <a href="*">
            {" "}
            <i
              className="fa-brands fa-facebook-f"
              style={{ color: "#1877F2" }}
            ></i>
          </a>
          <a href="*">
            {" "}
            <i
              className="fa-brands fa-instagram"
              style={{ color: "#E4405F" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter;
