import CourseData from "../TopCourseData";
import TopCourseCard from "./TopCourseCard";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { NavLink } from "react-router-dom";

const TopCourses = () => {
  return (
    <div>
      {/* Top Course Heading */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-semibold">
          A wide selection of courses
        </h1>
        <h3 className="text-sm lg:text-lg font-semibold">
          Chose from tons of online video courses wiht new addtions
        </h3>
      </div>

      {/* Top Courses Card Container */}
      <div className="container mx-auto mt-12">
        <h1 className="text-2xl font-semibold">Top Courses</h1>
        {/* Course Cards */}
        <div className="flex gap-8 mt-4">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            slidesPerGroup={4}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            <div className="swiper_content">
              {CourseData.map((item) => (
                <SwiperSlide key={item.id}>
                  <TopCourseCard
                    showPrice
                    img={item.image}
                    title={item.title}
                    authorFristName={item.authorFristName}
                    authorLastName={item.authorLastName}
                    rating={item.rating}
                    price={item.price}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>

        {/* Buttons */}
        <div className="flex justify-center my-8">
          <NavLink to="/allcourse">
            <button className="border border-black px-2 rounded-full text-base lg:text-lg font-semibold">
              View More Course
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TopCourses;
