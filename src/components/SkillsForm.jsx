import React from "react";

const SkillsForm = ({ formData, setFormData }) => {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-semibold">Skills</h1>

      {/* Skills Form */}
      <div className="my-4 md:mt-8 md:mb-12 w-11/12">
        <p className="text-base md:text-lg font-semibold mb-4 md:mb-0">
          Add Skills separated by a comma
        </p>
        <input
          value={formData.skills}
          onChange={(e) =>
            setFormData({
              ...formData,
              skills: e.target.value,
            })
          }
          type="text"
          className="bg-transparent border border-slate-400 rounded-md p-1 w-full outline-none"
        />
      </div>
    </div>
  );
};

export default SkillsForm;
