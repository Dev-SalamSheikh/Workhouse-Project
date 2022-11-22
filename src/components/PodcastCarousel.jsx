import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import PodcastCard from "./PodcastCard";

const PodcastCarousel = ({ data, title }) => {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold">{title}</h1>

      {/* Carousel Container */}
      <div className="md:pl-6 mt-4">
        <Swiper
          slidesPerView={4}
          spaceBetween={50}
          slidesPerGroup={1}
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
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <PodcastCard
                  key={item.id}
                  Img={item.img}
                  author={item.author}
                  min={item.min}
                  title={item.title}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default PodcastCarousel;
