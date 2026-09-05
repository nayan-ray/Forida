import React, {useState} from "react";
import bgTestimonial from "../../assets/bg_testimo.png";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user1.jpg";
import user3 from "../../assets/user2.png";
import user4 from "../../assets/user3.png";
import { FaQuoteLeft } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialItem from "./TestimonialItem";

const Testimonial = () => {
    const [swiper, setSwiper] = useState(null);


 const slides = [
    {
        userImg : user1,
        userName : 'Cristano Ronaldino',
        occupation : 'Ceao Directive',
        company : "Pottery Workshops",
        comment : "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Inventore dolor numquam sit rofficia quibusdam in totam,autem quidem veniam architecto voluptates aliquid soluta, deleniti iure repellat omnis a expedita jerp dersok leloro."
    },
        {
        userImg : user2,
        userName : 'Cristano Ronaldino',
        occupation : 'Ceao Directive',
        company : "Pottery Workshops",
        comment : "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Inventore dolor numquam sit rofficia quibusdam in totam,autem quidem veniam architecto voluptates aliquid soluta, deleniti iure repellat omnis a expedita jerp dersok leloro."
    },
        {
        userImg : user3,
        userName : 'Cristano Ronaldino',
        occupation : 'Ceao Directive',
        company : "Pottery Workshops",
        comment : "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Inventore dolor numquam sit rofficia quibusdam in totam,autem quidem veniam architecto voluptates aliquid soluta, deleniti iure repellat omnis a expedita jerp dersok leloro."
    },
    {
        userImg : user4,
        userName : 'Cristano Ronaldino',
        occupation : 'Ceao Directive',
        company : "Pottery Workshops",
        comment : "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Inventore dolor numquam sit rofficia quibusdam in totam,autem quidem veniam architecto voluptates aliquid soluta, deleniti iure repellat omnis a expedita jerp dersok leloro."
    },

 ]


  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgTestimonial})` }}
        className="max-w-[1915.2px] mx-auto bg-center bg-cover bg-origin-border px-3.75 py-10 bg-no-repeat"
      >
        <div className="w-full mx-auto z-3 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285 xxl:max-w-330 border-10 border-solid border-testBorder text-white p-10">

      <Swiper
          className="w-full h-full"
          slidesPerView={1}
          onSwiper={setSwiper}
          loop={true}
          speed={800}

        
        >
          {slides.map((slide, index) => (

              <SwiperSlide key={index}>
                 <div>
                     <TestimonialItem userImg={slide.userImg} userName={slide.userName} occupation={slide.occupation} company={slide.company} comment={slide.comment} swiper={swiper} />
                 </div>
              </SwiperSlide>
           
          ))}
        </Swiper>

         
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
