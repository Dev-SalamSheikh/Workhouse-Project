import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LocalServiceSearch from "../components/LocalServiceSearch";
import LocalServicesContainer from "../components/LocalServicesContainer";

const LocalServices = () => {
  return (
    <div>
      <Navbar />
      <LocalServiceSearch />
      <LocalServicesContainer />
      <Footer />
    </div>
  );
};

export default LocalServices;
