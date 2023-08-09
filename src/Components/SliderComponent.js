import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import mixexpuri from "../images1/mixexpuri.png";
import mixglotrust from "../images1/burnxt finalgrp.png";
import mixjava from "../images1/javabrunfinal.png";
import b2 from "../images1/b2.png";
import b3 from "../images1/b3.png";
import b4 from "../images1/b4.png";
import securePic from "../images1/confidental.png";

function SliderComponent() {
  return (
    <>
      <div id="fitness">
        <h1 className="text-3xl font-bold text-gray-500 text-center mt-24">
          Achieve your health and fitness goals with these top-rated supplements
        </h1>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="flex flex-row px-14 py-24">
            <img
              className="object-scale-down w-1/2 h-72 ease-in hover:scale-110 duration-300"
              src={mixexpuri}
              alt="image slide 1"
            />
            <img
              className="object-scale-down w-1/2 h-72 ease-in hover:scale-110 duration-300"
              src={mixglotrust}
              alt="image slide 1"
            />
            <img
              className="object-scale-down w-1/2 h-72 ease-in hover:scale-110 duration-300"
              src={mixjava}
              alt="image slide 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row px-14 py-24 ">
            <img
              className="object-scale-down w-1/2 h-72 ease-in hover:scale-110 duration-300"
              src={b2}
              alt="image slide 2"
            />

            <img
              className="object-scale-down w-1/2 h-72 ease-in hover:scale-110 duration-300"
              src={b3}
              alt="image slide 2"
            />
            <img
              className="object-scale-down w-1/2 h-72 ease-in hover:scale-110 duration-300"
              src={b4}
              alt="image slide 2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-14 py-24 flex flex-row ">
            <img className=" w-1/2 h-72 " src={securePic} alt="image slide 3" />
            <img className=" w-1/2 h-72 " src={securePic} alt="image slide 3" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default SliderComponent;
