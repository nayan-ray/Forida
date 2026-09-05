import React from 'react'
import user1 from "../../assets/user1.png";
import { FaQuoteLeft } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialItem = ({userImg, userName, occupation, company, comment, swiper}) => {
  return (
     <div className="flex flex-col justify-center md:flex-row">
            <div className="flex flex-col items-center justify-center gap-5 md:w-1/3">
              <div className="w-25 h-25 rounded-full truncate">
                <img
                  className="w-full h-full object-cover"
                  src={userImg}
                  alt="user"
                />
              </div>
              <div className="text-center">
                <h4 className="mb-2 font-poppins font-semibold text-[20px] hover:text-[#f70b38] cursor-default">
                  {userName}
                </h4>
                <p className="cursor-default text-[15px]">{occupation}</p>
              </div>
            </div>
            <div className="mt-4.5 text-[18px] text-center md:text-left md:w-2/3">
              <div className="flex items-center justify-center md:justify-start">
                <FaQuoteLeft className="w-8 h-8" />
              </div>
              <p className="uppercase text-[18px] tracking-wider mt-5">
               {company}
              </p>
              <p className="text-[15px] my-3 md:text-justify">
               {comment}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-8.5 mt-5">
                <div className="p-2 border-2 border-white hover:bg-[#f70b38] hover:transition-all hover:duration-500 hover:border-[#f70b38]"
                onClick={() => swiper?.slidePrev()}             
                >
                  <ChevronLeft size={20} color="#fff" />
                </div>
                <div className="p-2 border-2 border-white hover:bg-[#f70b38] hover:transition-all hover:duration-500 hover:border-[#f70b38]"
                 onClick={() => swiper?.slideNext()}
                >
                  <ChevronRight size={20} color="#fff" />
                </div>
              </div>
            </div>
          </div>
  )
}

export default TestimonialItem