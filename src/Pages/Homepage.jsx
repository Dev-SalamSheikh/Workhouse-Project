import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Search from "../components/Search";
import Courses from "../components/Courses";
import Freelancers from "../components/Freelancers";
import Gigs from "../components/Gigs";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Search />
      <Courses />
      <Freelancers />
      <Gigs />
      <Footer />
    </div>
  );
};

export default Homepage;
