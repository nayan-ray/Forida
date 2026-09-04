import React from "react";
import banner21 from "../../assets/banner21.jpg";
import banner22 from "../../assets/banner22.jpg";
import product1 from "../../assets/viverra-non-semper1.jpg";
import product2 from "../../assets/viverra-non-semper2.jpg";
import product3 from "../../assets/lorem-ipsum-dolor (1).jpg";
import product4 from "../../assets/lorem-ipsum-dolor (2).jpg";
import product5 from "../../assets/suspendisse-urna1.jpg";
import product6 from "../../assets/suspendisse-urna2.jpg";
import product7 from "../../assets/posuere-a-pede1.jpg";
import product8 from "../../assets/posuere-a-pede2.jpg";
import FeaturedItem from "./FeaturedItem";
import { Swiper, SwiperSlide } from "swiper/react";


const FeaturedProduct = () => {

const breakpoints = {
    576: {
      slidesPerView: 2,
    },
    
  };

  return (
    <div className="mb-10">
      <div className="w-full mx-auto z-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8">

          <div className="px-3.75 ">
            <div className="relative max-w-142.5 mx-auto group">
              <img
                className="w-full relative z-1 h-full object-cover"
                src={banner21}
                alt="banner"
              />
              <div className="absolute z-2 inset-3.75 bg-bannerCover transition-all duration-1000 ease transform scale-0 group-hover:scale-100"></div>
            </div>
          </div>

         <div>

           <Swiper
              className="mySwiper"
              slidesPerView={1}
              breakpoints={breakpoints}
            >
             <SwiperSlide>
                <FeaturedItem baseImg={product1} hoverImg={product2} title={"Top T-shirt"} newPrice={"$56"} oldPrice={"$100"}/>
             </SwiperSlide>
              <SwiperSlide>
                <FeaturedItem baseImg={product3} hoverImg={product4} title={"Suspendisse urna"} newPrice={"$56"} oldPrice={"$100"}/>
             </SwiperSlide>
              <SwiperSlide>
                <FeaturedItem baseImg={product5} hoverImg={product6} title={"Lorem ipsum dolor"} newPrice={"$56"} oldPrice={"$100"}/>
             </SwiperSlide>
              <SwiperSlide>
                 <FeaturedItem baseImg={product7} hoverImg={product8} title={"Viverra non, semper"} newPrice={"$56"} oldPrice={"$100"}/> 
             </SwiperSlide>
            
            </Swiper>
        
        </div>

        <div>

           <Swiper
              className="mySwiper"
              slidesPerView={1}
              breakpoints={breakpoints}
            >
             <SwiperSlide>
                   <FeaturedItem baseImg={product5} hoverImg={product6} title={"Lorem ipsum dolor"} newPrice={"$56"} oldPrice={"$100"}/>
             </SwiperSlide>
              <SwiperSlide>
                 <FeaturedItem baseImg={product7} hoverImg={product8} title={"Viverra non, semper"} newPrice={"$56"} oldPrice={"$100"}/> 
             </SwiperSlide>
              <SwiperSlide>
                <FeaturedItem baseImg={product3} hoverImg={product4} title={"Suspendisse urna"} newPrice={"$56"} oldPrice={"$100"}/>
             </SwiperSlide>
              <SwiperSlide>
                  <FeaturedItem baseImg={product1} hoverImg={product2} title={"Top T-shirt"} newPrice={"$56"} oldPrice={"$100"}/>
             </SwiperSlide>
            
            </Swiper>
        
        </div>
        

          <div className="px-3.75 ">
            <div className="relative max-w-142.5 mx-auto group">
              <img
                className="w-full relative z-1 h-full object-cover"
                src={banner22}
                alt="banner"
              />
              <div className="absolute z-2 inset-3.75 bg-bannerCover transition-all duration-1000 ease transform scale-0 group-hover:scale-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
