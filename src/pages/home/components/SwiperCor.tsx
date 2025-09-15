import { memo } from 'react';
import image from "../../../assets/swiper.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const SwiperCor = () => {
  return (
    <div className="bg-amber-950 h-[536px]">

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default memo(SwiperCor);
