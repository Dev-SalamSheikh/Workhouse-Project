import React from "react";

const WebsiteForm = ({ formData, setFormData }) => {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-semibold">
        Personal Website links
      </h1>

      {/* Skills Form */}
      <div className="my-4 md:mt-8 md:mb-18 w-11/12">
        <p className="text-base md:text-lg font-semibold mb-4 md:mb-0">
          Add your website and social media links here, you can add a maximum of
          3
        </p>
        <input
          value={formData.websiteLinks}
          onChange={(e) =>
            setFormData({
              ...formData,
              websiteLinks: e.target.value,
            })
          }
          type="text"
          className="bg-transparent border border-slate-400 rounded-md p-1 w-full outline-none"
        />
        <button className="mt-4 border border-slate-400 py-1 px-4 rounded-md font-semibold">
          Add Another
        </button>
      </div>
    </div>
  );
};

export default WebsiteForm;
