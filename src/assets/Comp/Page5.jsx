import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';

const Page5 = () => {
  return (
    <div className='h-[50vh] w-full flex justify-center'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='h-full w-full flex justify-center items-center'><SlideOne/></SwiperSlide>
        <SwiperSlide className='h-full w-full flex justify-center items-center'><SlideTwo/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Page5