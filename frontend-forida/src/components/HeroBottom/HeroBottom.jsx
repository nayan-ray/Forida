import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import thumb1 from "../../assets/HeroBottom-thumb (1).jpg";
import thumb2 from "../../assets/HeroBottomthumb2.jpg";
import thumb3 from "../../assets/HeroBottom_thumb3.jpg";


const HeroBottom = () => {
  const breakpoints = {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  };
  return (
    <div>
      <div className="  w-full mx-auto z-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330">
        <div className="relative z-20 w-full h-full mt-7.5 mb-15  lg:-mt-20 bg-white lg:p-7.5 ">
          <Swiper
            className="mySwiper"
            slidesPerView={1}
            breakpoints={breakpoints}
          >
            <SwiperSlide>
              <div className="w-full h-full px-3.75  ">
                <div className="max-w-92.5 mx-auto group relative cursor-pointer">
                  <img
                    src={thumb1}
                    alt="Thumb 1"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute z-22 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-center">
                    <h3 className="text-[22px] font-poppins font-medium min-w-40 px-3.75 py-3 relative bg-white z-24 group-hover:bg-transparent group-hover:text-white after:content['']
                     after:absolute after:-z-23 after:w-full after:h-full after:top-0 after:-left-1/1 after:bg-[#f70b38] after:opacity-0 group-hover:after:opacity-80 group-hover:after:left-0 group-hover:after:transition-all group-hover:after:duration-300  
                    ">Accessories</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full px-3.75">
                <div className="max-w-92.5 mx-auto group cursor-pointer relative">
                  <img
                    src={thumb2}
                    alt="Thumb 2"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute z-22 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-center">
                    <h3 className="text-[22px] font-poppins font-medium min-w-40 px-3.75 py-3 relative bg-white z-24 group-hover:bg-transparent group-hover:text-white after:content['']
                     after:absolute after:-z-23 after:w-full after:h-full after:top-0 after:-left-1/1 after:bg-[#f70b38] after:opacity-0 group-hover:after:opacity-80 group-hover:after:left-0 group-hover:after:transition-all group-hover:after:duration-300  
                    ">LifeStyle</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-full px-3.75">
                <div className="max-w-92.5 mx-auto group cursor-pointer relative">
                  <img
                    src={thumb3}
                    alt="Thumb 3"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute z-22 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-center">
                    <h3 className="text-[22px] font-poppins font-medium min-w-40 px-3.75 py-3 relative bg-white z-24 group-hover:bg-transparent group-hover:text-white after:content['']
                     after:absolute after:-z-23 after:w-full after:h-full after:top-0 after:-left-1/1 after:bg-[#f70b38] after:opacity-0 group-hover:after:opacity-80 group-hover:after:left-0 group-hover:after:transition-all group-hover:after:duration-300  
                    ">Chairs</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
