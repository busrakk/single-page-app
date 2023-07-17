import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectCards } from "swiper/modules";

import img1 from "../assets/Nfts/bighead.svg";
import img2 from "../assets/Nfts/bighead-1.svg";
import img3 from "../assets/Nfts/bighead-2.svg";
import img4 from "../assets/Nfts/bighead-3.svg";
import img5 from "../assets/Nfts/bighead-4.svg";
import img6 from "../assets/Nfts/bighead-5.svg";
import img7 from "../assets/Nfts/bighead-6.svg";
import img8 from "../assets/Nfts/bighead-7.svg";
import img9 from "../assets/Nfts/bighead-8.svg";
import img10 from "../assets/Nfts/bighead-10.svg";

const Carousel = () => {
  return (
    <div className="w-[400px] h-[70vh]">
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        // navigation={{
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // }}
        scrollbar={{
          draggable: true,
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper w-full h-full"
      >
        {/* <div className="swiper-button-next swiper-button-color-black"></div>
        <div className="swiper-button-prev swiper-button-color-black"></div> */}
        <SwiperSlide className="bg-[#EEEDDE] rounded-2xl flex justify-center items-center">
          <img src={img1} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#EEEDDE] rounded-2xl flex justify-center items-center">
          <img src={img2} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#EEEDDE] rounded-2xl flex justify-center items-center">
          <img src={img3} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#EEEDDE] rounded-2xl flex justify-center items-center">
          <img src={img4} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#EEEDDE] rounded-2xl flex justify-center items-center">
          <img src={img5} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#EEEDDE] rounded-2xl flex justify-center items-center">
          <img src={img6} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#EEEDDE] rounded-2xl flex justify-center items-center">
          <img src={img7} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#EEEDDE] rounded-2xl flex justify-center items-center">
          <img src={img8} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#EEEDDE] rounded-2xl flex justify-center items-center">
          <img src={img9} alt="The Weirdos" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#EEEDDE] rounded-2xl flex justify-center items-center">
          <img src={img10} alt="The Weirdos" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
