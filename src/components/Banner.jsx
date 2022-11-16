import BannerImg from "../images/banner.png";

const Banner = () => {
  return (
    <div className="lg:px-20 px-8 bg-Banner">
      {/* Content */}
      <div className="content flex justify-between items-center py-8 flex-wrap lg:flex-nowrap">
        {/* Banner Left */}
        <div className="w-full">
          {/* Heading */}
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-ThemeBlue lg:leading-[70px]">
            Finding, <br /> Connecting, <br /> Building Success.
          </h1>

          {/* Subheading */}
          <p className="lg:mt-8 mt-2 md:text-2xl text-xl font-semibold">
            We have something for everybody, <br /> Come join us.
          </p>
        </div>
        {/* Banner Right */}
        <div className="w-full flex lg:justify-end justify-center mt-4 lg:mt-0">
          <img
            src={BannerImg}
            alt="banner_image"
            className="lg:w-6/12 md:w-8/12 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
