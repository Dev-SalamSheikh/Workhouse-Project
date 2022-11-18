import React from "react";

const DescribeYourself = ({ setPage, page, formData, setFormData }) => {
  return (
    <div>
      <p className="text-base md:text-xl font-semibold">
        If you were to describe yourself to an employer how would you describe
        yourself?
      </p>

      {/* Text area */}
      <div className="relative mt-6 lg:mt-12">
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
          className="w-full bg-transparent border border-slate-400 resize-none outline-none p-2 rounded-md"
          rows="10"
          maxLength={2500}
        ></textarea>
        <div className="absolute right-4 bottom-4">
          <span>0/2500</span>
        </div>
      </div>

      <div className="mt-8 text-end">
        <button
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}
          style={{ backgroundColor: "#999999" }}
          className="text-white font-semibold text-lg p-2 rounded-lg"
        >
          {page === 0 ? "Let's create your CV" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default DescribeYourself;
