import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link, useLoaderData } from "react-router";
import { A11y, Navigation } from "swiper/modules";
import SwiperImage from "./SwiperImage";

const SwiperCourseImages = () => {
  const { courseData} = useLoaderData();
  const allCourseData = courseData

  return (
    <div className="my-10">
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation>
        {allCourseData.map((courseData) => (
          <SwiperSlide> <SwiperImage courseData={courseData}></SwiperImage></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCourseImages;
