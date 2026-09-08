import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import brand1 from "../../assets/brand1.jpg";
import brand2 from "../../assets/4-fieldbrand2.jpg";
import brand3 from "../../assets/5-fieldbrand3.jpg";
import brand4 from "../../assets/6-fieldbrand4.jpg";
import brand5 from "../../assets/7-fieldbrand.jpg";
import brand6 from "../../assets/7-fieldbrand (1)5.jpg";
import brand7 from "../../assets/8-fieldbrand6.jpg";

const Brand = () => {
  const breakpoints = {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 7,
    },
  };

  return (
    <div className="mb-10 mt-22">
      <div className="w-full mx-auto z-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330 py-10 border-t border-solid border-[#47353521] border-b">
        <Swiper
          className="mySwiper"
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={false}
          breakpoints={breakpoints}
        >
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
                <div className="max-w-35 mx-auto lg:px-3.75 hover:transform hover:-translate-y-2">
                    <img className="w-full h-full object-cover " src={brand1} alt="brand" />
                </div>
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
                <div className="max-w-35 mx-auto lg:px-3.75 hover:transform hover:-translate-y-2">
                    <img className="w-full h-full object-cover " src={brand2} alt="brand" />
                </div>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
             <div className="max-w-35 mx-auto lg:px-3.75 hover:transform hover:-translate-y-2">
                    <img className="w-full h-full object-cover " src={brand3} alt="brand" />
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
             <div className="max-w-35 mx-auto lg:px-3.75 hover:transform hover:-translate-y-2">
                    <img className="w-full h-full object-cover " src={brand4} alt="brand" />
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <div className="max-w-35 mx-auto lg:px-3.75 hover:transform hover:-translate-y-2">
                    <img className="w-full h-full object-cover " src={brand5} alt="brand" />
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <div className="max-w-35 mx-auto lg:px-3.75 hover:transform hover:-translate-y-2">
                    <img className="w-full h-full object-cover " src={brand6} alt="brand" />
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
             <div className="max-w-35 mx-auto lg:px-3.75 hover:transform hover:-translate-y-2">
                    <img className="w-full h-full object-cover " src={brand7} alt="brand" />
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center">
              <div className="max-w-35 mx-auto lg:px-3.75 hover:transform hover:-translate-y-2">
                    <img className="w-full h-full object-cover " src={brand1} alt="brand" />
                </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
