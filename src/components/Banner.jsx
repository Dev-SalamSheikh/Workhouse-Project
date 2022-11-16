import BannerImg from "../images/banner.png";

const Banner = () => {
  return (
    <div className="px-20 bg-Banner">
      {/* Content */}
      <div className="content flex justify-between items-center py-8">
        {/* Banner Left */}
        <div className="w-full">
          {/* Heading */}
          <h1 className="text-6xl font-bold text-ThemeBlue leading-[70px]">
            Finding, <br /> Connecting, <br /> Building Success.
          </h1>

          {/* Subheading */}
          <p className="mt-8 text-2xl font-semibold">
            We have something for everybody, <br /> Come join us.
          </p>
        </div>
        <div className="w-full flex justify-end">
          <img src={BannerImg} alt="banner_image" className="w-6/12" />
        </div>
        {/* Banner Right */}
      </div>
    </div>
  );
};

export default Banner;
