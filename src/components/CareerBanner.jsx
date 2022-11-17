import BannerImage from "../images/careerAdvice.png";
const CareerBanner = () => {
  return (
    <div>
      <div className="lg:w-full w-10/12 content container mx-auto flex justify-between items-start gap-4 md:gap-20 flex-wrap md:flex-nowrap">
        {/* Left Side */}
        <div className="w-full md:w-6/12 flex flex-col gap-4">
          <button className="w-full bg-careerBtn text-white font-bold text-xl md:text-2xl py-3 rounded-xl">
            Career Advice
          </button>
          <button className="w-full bg-careerBtn text-white font-bold text-xl md:text-2xl py-3 rounded-xl">
            Categories
          </button>
        </div>
        {/* Right Side */}
        <div className="w-full md:w-6/12">
          <img
            src={BannerImage}
            alt="banner_image"
            className="w-full md:w-10/12"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerBanner;
