import React from "react";

const QualificationForm = ({ formData, setFormData }) => {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-semibold">Qualifications</h1>

      {/* Skills Form */}
      <div className="my-4 md:mt-8 md:mb-18 w-11/12">
        <p className="text-base md:text-lg font-semibold mb-4 md:mb-0">
          Search and add any other qualifications you possess
        </p>
        <input
          value={formData.qualification}
          onChange={(e) =>
            setFormData({
              ...formData,
              qualification: e.target.value,
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

export default QualificationForm;
