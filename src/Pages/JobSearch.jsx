import React from "react";
import Footer from "../components/Footer";
import JobSearchBar from "../components/JobSearchBar";
import JobSearchCards from "../components/JobSearchCards";
import Navbar from "../components/Navbar";

const JobSearch = () => {
  return (
    <div>
      <Navbar />
      <JobSearchBar jobsearch={true} />
      <JobSearchCards />
      <Footer />
    </div>
  );
};

export default JobSearch;
