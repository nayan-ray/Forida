import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../assets/slider21-244.jpg";
import slider2 from "../../assets/slider22-526.jpg";
import slider3 from "../../assets/slider23-766.jpg";
import HeroBox from "./HeroBox";

const slides = [
  {
    id: 1,
    title: "Sale up to 50% off",
    description: "Hand make cups",
    image: slider2,
  },

  {
    id: 2,
    title: "We make things with love",
    description: "Branding & designing.",
    image: slider3,
  },
  {
    id: 3,
    title: "Our 2026 style",
    description: "Branding & designing.",
    image: slider1,
  },
];
const Hero = () => {
  const [swiper, setSwiper] = useState(null);
  return (
    <section className="group">
      <div className="max-w-[1915.2px] h-[calc(100vh+100px)] mx-auto relative">
        <div
          className="absolute hidden z-11 left-5 top-1/2 -translate-y-1/2 p-2 border-2 border-white hover:bg-[#f70b38] hover:transition-all hover:duration-500 hover:border-[#f70b38] group-hover:block"
          onClick={() => swiper?.slidePrev()}
        >
          <ChevronLeft size={30} color="#fff"/>
        </div>

        <div
          className="absolute hidden z-11 right-5 top-1/2 -translate-y-1/2 p-2 border-2 border-white hover:bg-[#f70b38] hover:transition-all hover:duration-500 hover:border-[#f70b38] group-hover:block"
          onClick={() => swiper?.slideNext()}
        >
          <ChevronRight size={30} color="#fff" />
        </div>

        <Swiper
          className="w-full h-full"
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          onSwiper={setSwiper}
          loop={true}
          speed={800}
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {slides.map((slide, index) => (
            <div>
              <SwiperSlide key={slide.id}>
                <div
                  className="relative h-full bg-cover bg-center "
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="w-full h-full relative z-5">
                    <HeroBox slide={slide} index={index} />
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
