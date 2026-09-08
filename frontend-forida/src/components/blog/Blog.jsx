import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import blog4 from "../../assets/blog4.jpg";
import { ChevronRightIcon } from "lucide-react";

const Blog = () => {
  const breakpoints = {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  };
  return (
    <div className="my-22">
      <div className="  w-full mx-auto z-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330 mb-15">
       <div className="text-center 3.75">
            <h2><span className="cursor-pointer text-[32px] font-poppins font-semibold uppercase text-[#111] hover:text-[#f70b38] relative after:content[''] after:absolute after:w-1/5 after:h-0.5 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-300 after:ease-in-out after:bg-[#f70b38] after:invisible hover:after:visible hover:after:w-5/5">Our Blog</span></h2>
            <p className="mt-4 mb-10 text-[15px]">Lorem ipsuet adipisicing elit, sed det adipisicing elit, sed sed det adipisicing elit.</p>
       </div>
      <div className="relative z-20 w-full h-full mt-7.5 bg-white mb-3 ">
        <Swiper
          className="mySwiper w-full h-full"
          slidesPerView={1}
          breakpoints={breakpoints}
        >
          <SwiperSlide>
            <div className="w-full h-full px-3.75  ">
              <div className="w-full shadow-[5px_5px_10px_0_rgba(0,0,0,0.1)] group hover:shadow-[5px_5px_10px_0_rgba(0,0,0,0.15)] hover:transition-all hover:duration-15 relative mb-2 cursor-pointer">
                <div className="truncate w-full">
                  <img
                    className="w-full h-full object-cover scale-[1.0] group-hover:scale-[1.2] group-hover:transition-all group-hover:duration-300"
                    src={blog1}
                    alt="blog1"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[16px] font-poppins font-medium text=[#111] mb-2 hover:text-[#f70b38] hover:transition-all hover:duration-15">
                    lorem ipsum dolor sit amet, consectetur text.
                  </h3>
                  <div className="text-blog text-[13px] font-light mt-2 mb-3 ml-1.25 mr-0">
                    <span>By MartinFrank</span> / <span>January 1, 2023</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#666] mb-4">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex items-center">
                    <span className="text-[14px] font-medium font-poppins text-[#111] group-hover:text-[#f70b38]">
                      Read More
                    </span>{" "}
                    <div className="flex items-center ml-1">
                      <ChevronRightIcon
                        size={14}
                        className="-mr-1 group-hover:text-[#f70b38]"
                      />{" "}
                      <ChevronRightIcon
                        size={14}
                        className="group-hover:text-[#f70b38]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full px-3.75  ">
              <div className="w-full shadow-[5px_5px_10px_0_rgba(0,0,0,0.1)] group hover:shadow-[5px_5px_10px_0_rgba(0,0,0,0.15)] hover:transition-all hover:duration-15 relative mb-2 cursor-pointer">
                <div className="truncate w-full">
                  <img
                    className="w-full h-full object-cover scale-[1.0] group-hover:scale-[1.2] group-hover:transition-all group-hover:duration-300"
                    src={blog2}
                    alt="blog2"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[16px] font-poppins font-medium text=[#111] mb-2 hover:text-[#f70b38] hover:transition-all hover:duration-15">
                    lorem ipsum dolor sit amet, consectetur text.
                  </h3>
                  <div className="text-blog text-[13px] font-light mt-2 mb-3 ml-1.25 mr-0">
                    <span>By MartinFrank</span> / <span>January 1, 2023</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#666] mb-4">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex items-center">
                    <span className="text-[14px] font-medium font-poppins text-[#111] group-hover:text-[#f70b38]">
                      Read More
                    </span>{" "}
                    <div className="flex items-center ml-1">
                      <ChevronRightIcon
                        size={14}
                        className="-mr-1 group-hover:text-[#f70b38]"
                      />{" "}
                      <ChevronRightIcon
                        size={14}
                        className="group-hover:text-[#f70b38]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full px-3.75  ">
              <div className="w-full shadow-[5px_5px_10px_0_rgba(0,0,0,0.1)] group hover:shadow-[5px_5px_10px_0_rgba(0,0,0,0.15)] hover:transition-all hover:duration-15 relative mb-2 cursor-pointer">
                <div className="truncate w-full">
                  <img
                    className="w-full h-full object-cover scale-[1.0] group-hover:scale-[1.2] group-hover:transition-all group-hover:duration-300"
                    src={blog3}
                    alt="blog3"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[16px] font-poppins font-medium text=[#111] mb-2 hover:text-[#f70b38] hover:transition-all hover:duration-15">
                    lorem ipsum dolor sit amet, consectetur text.
                  </h3>
                  <div className="text-blog text-[13px] font-light mt-2 mb-3 ml-1.25 mr-0">
                    <span>By MartinFrank</span> / <span>January 1, 2023</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#666] mb-4">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex items-center">
                    <span className="text-[14px] font-medium font-poppins text-[#111] group-hover:text-[#f70b38]">
                      Read More
                    </span>{" "}
                    <div className="flex items-center ml-1">
                      <ChevronRightIcon
                        size={14}
                        className="-mr-1 group-hover:text-[#f70b38]"
                      />{" "}
                      <ChevronRightIcon
                        size={14}
                        className="group-hover:text-[#f70b38]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full px-3.75  ">
              <div className="w-full shadow-[5px_5px_10px_0_rgba(0,0,0,0.1)] group hover:shadow-[5px_5px_10px_0_rgba(0,0,0,0.15)] hover:transition-all hover:duration-15 relative mb-2 cursor-pointer">
                <div className="truncate w-full">
                  <img
                    className="w-full h-full object-cover scale-[1.0] group-hover:scale-[1.2] group-hover:transition-all group-hover:duration-300"
                    src={blog4}
                    alt="blog4"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[16px] font-poppins font-medium text=[#111] mb-2 hover:text-[#f70b38] hover:transition-all hover:duration-15">
                    lorem ipsum dolor sit amet, consectetur text.
                  </h3>
                  <div className="text-blog text-[13px] font-light mt-2 mb-3 ml-1.25 mr-0">
                    <span>By MartinFrank</span> / <span>January 1, 2023</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#666] mb-4">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="flex items-center">
                    <span className="text-[14px] font-medium font-poppins text-[#111] group-hover:text-[#f70b38]">
                      Read More
                    </span>{" "}
                    <div className="flex items-center ml-1">
                      <ChevronRightIcon
                        size={14}
                        className="-mr-1 group-hover:text-[#f70b38]"
                      />{" "}
                      <ChevronRightIcon
                        size={14}
                        className="group-hover:text-[#f70b38]"
                      />
                    </div>
                  </div>
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

export default Blog;
