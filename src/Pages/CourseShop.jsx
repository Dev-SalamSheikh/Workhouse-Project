import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseSearch from "../components/CourseSearch";
import AllCourses from "../components/AllCourses";

const CourseShop = () => {
  return (
    <div>
      <Navbar />
      <CourseSearch />
      <AllCourses />
      <Footer />
    </div>
  );
};

export default CourseShop;
