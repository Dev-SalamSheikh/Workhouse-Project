import React from "react";
import Freelancer1 from "../images/freelancer1.jpg";
import Freelancer2 from "../images/freelancer2.jpg";
import Freelancer3 from "../images/freelancer3.jpg";
import Freelancer4 from "../images/freelancer4.jpg";
import Freelancer5 from "../images/freelancer5.jpg";
import Freelancer6 from "../images/freelancer6.jpg";
import FreelancerCard from "./FreelancerCard";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Freelancers = () => {
  const freelancers = [
    {
      id: 1,
      image: Freelancer1,
      title: "Digital Marketing",
    },
    {
      id: 2,
      image: Freelancer2,
      title: "Developer",
    },
    {
      id: 3,
      image: Freelancer3,
      title: "Networker",
    },
    {
      id: 4,
      image: Freelancer4,
      title: "Graphics Designer",
    },
    {
      id: 5,
      image: Freelancer5,
      title: "Accountant",
    },
    {
      id: 6,
      image: Freelancer6,
      title: "Copywriter",
    },
    {
      id: 7,
      image: Freelancer1,
      title: "Digital Marketing",
    },
    {
      id: 8,
      image: Freelancer2,
      title: "Developer",
    },
    {
      id: 9,
      image: Freelancer3,
      title: "Networker",
    },
    {
      id: 10,
      image: Freelancer4,
      title: "Graphics Designer",
    },
    {
      id: 11,
      image: Freelancer5,
      title: "Accountant",
    },
    {
      id: 12,
      image: Freelancer6,
      title: "Copywriter",
    },
  ];
  return (
    <div className="lg:px-20 px-8 bg-Banner">
      {/* Heading */}
      <div>
        <h1 className="text-xl lg:text-2xl font-semibold">
          Do you need to hire freelancers?
        </h1>
        <h1 className="text-xl lg:text-2xl font-semibold">
          Browser out top 20 talents by category
        </h1>
      </div>

      {/* Card Content */}
      <div className="flex justify-between w-full bg-FreelancerBg py-8 px-4 mt-4 rounded-2xl">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
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
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
        >
          {freelancers.map((freelancer) => (
            <SwiperSlide key={freelancer.id}>
              <FreelancerCard img={freelancer.image} title={freelancer.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Freelancers;
