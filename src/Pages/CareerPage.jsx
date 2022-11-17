import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CareerBanner from "../components/CareerBanner";
import CareerCards from "../components/CareerCards";

const CareerPage = () => {
  return (
    <div>
      <Navbar />
      <div className="py-8 lg:py-24 bg-Banner">
        <CareerBanner />
        <CareerCards />
      </div>
      <Footer />
    </div>
  );
};

export default CareerPage;
