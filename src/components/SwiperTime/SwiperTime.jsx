import { Swiper, SwiperSlide } from 'swiper/react';

import "./SwiperTime.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperTime = () => {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[70vh]"
      >
        <SwiperSlide className='cursor-pointer rounded-[20px]'><img src="src/assets/images/image(1).jpg" className='rounded-[20px] w-[100%] h-[100%]' alt="" /></SwiperSlide>
        <SwiperSlide className='cursor-pointer rounded-[20px]'><img src="src/assets/images/image(2).jpg" className='rounded-[20px] w-[100%] h-[100%]' alt="" /></SwiperSlide>
        <SwiperSlide className='cursor-pointer rounded-[20px]'><img src="src/assets/images/image(3).jpg" className='rounded-[20px] w-[100%] h-[100%]' alt="" /></SwiperSlide>
        <SwiperSlide className='cursor-pointer rounded-[20px]'><img src="src/assets/images/image(4).jpg" className='rounded-[20px] w-[100%] h-[100%]' alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperTime;
