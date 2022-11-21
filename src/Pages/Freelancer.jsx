import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobSearchBar from "../components/JobSearchBar";
import FreelancerCards from "../components/FreelancerCards";

const Freelancer = () => {
  return (
    <div>
      <Navbar />
      <JobSearchBar />
      <FreelancerCards />
      <Footer />
    </div>
  );
};

export default Freelancer;
