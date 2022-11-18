import React from "react";
import { useState } from "react";
import BasicInfo from "./BasicInfo";
import DescribeYourself from "./DescribeYourself";
import EducationForm from "./EducationForm";
import EmploymentForm from "./EmploymentForm";
import QualificationForm from "./QualificationForm";
import SkillsForm from "./SkillsForm";
import WebsiteForm from "./WebsiteForm";
import { NavLink } from "react-router-dom";

const BuildCvForm = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    telephone: "",
    email: "",
    imageUrl: "",
    country: "",
    business: "",
    description: "",
    position: "",
    employment: "",
    city: "",
    startmonth: "",
    startyear: "",
    endmonth: "",
    endyear: "",
    checked: true,
    employmentDesc: "",
    skills: "",
    school: "",
    field: "",
    educity: "",
    edustartmonth: "",
    edustartyear: "",
    eduendmonth: "",
    eduendyear: "",
    educhecked: true,
    eduemploymentDesc: "",
    qualification: "",
    websiteLinks: "",
  });

  // Change Components
  const nextPage = () => {
    if (page === 0) {
      return (
        <BasicInfo
          page={page}
          setPage={setPage}
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else if (page === 1) {
      return (
        <DescribeYourself
          page={page}
          setPage={setPage}
          formData={formData}
          setFormData={setFormData}
        />
      );
    } else if (page === 2) {
      return <EmploymentForm formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <SkillsForm formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <EducationForm formData={formData} setFormData={setFormData} />;
    } else if (page === 5) {
      return (
        <QualificationForm formData={formData} setFormData={setFormData} />
      );
    } else if (page === 6) {
      return <WebsiteForm formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="py-8 lg:pt-16 lg:pb-12 bg-Banner">
      <div className="container mx-auto lg:w-6/12 w-10/12">
        <h1 className="text-2xl font-semibold">Registration</h1>
        <div className="content border-black border rounded-lg px-4 py-8 mt-4">
          {/* Calling Components */}
          {nextPage()}
        </div>
        {/* Buttons */}
        {/* Add Another Button Conditional Rendering */}
        {page >= 2 ? (
          <div className="mt-8 lg:mt-16">
            <div className="flex gap-8 justify-end">
              {page === 2 && (
                <button
                  style={{ backgroundColor: "#999999" }}
                  className="text-white font-semibold text-lg p-2 rounded-lg"
                >
                  Add another
                </button>
              )}

              {/* Redirect To The homepage Conditional Button */}
              {page === 6 && (
                <NavLink to="/">
                  <button
                    onClick={() => {
                      setPage((currPage) => currPage + 1);
                    }}
                    style={{ backgroundColor: "#999999" }}
                    className="text-white font-semibold text-lg p-2 rounded-lg"
                  >
                    Next
                  </button>
                </NavLink>
              )}
              {/* State increasing Button */}
              {page <= 5 && (
                <button
                  onClick={() => {
                    setPage((currPage) => currPage + 1);
                  }}
                  style={{ backgroundColor: "#999999" }}
                  className="text-white font-semibold text-lg p-2 rounded-lg"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BuildCvForm;
