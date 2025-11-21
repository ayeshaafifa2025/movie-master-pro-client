import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Slider = ({slides}) => {
    
    return (
        <div>
            <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={2}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  loop={true}
>
   {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={slide.posterUrl}
                        alt={slide.title}
                        className="w-full h-[400px] sm:h-[600px] md:h-[400px] lg:h-[600px]  rounded-lg"
                    />
                </SwiperSlide>
            ))}
  
</Swiper>

            
        </div>
    );
};

export default Slider;