

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import 'swiper/css/effect-cards'; 
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';

const Slider = ({slides}) => {
    
 
    const handleScroll = () => {
        
        document.getElementById('next-section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="py-12 relative"> 
            <Swiper
                 modules={[Navigation, Pagination, Autoplay, EffectCards]}
                 effect={'cards'} 
                
                 effectCards={{
                    perSlideOffset: 20, 
                    perSlideRotate: 6, 
                    rotate: true,
                    slideShadows: true,
                 }}
                
                 grabCursor={true}
                 slidesPerView={1} 
                
               
                 navigation
                
                
                 pagination={{ 
                    type: 'fraction', 
                    el: '.swiper-pagination-fraction', 
                    clickable: true 
                 }}
                
                 autoplay={{ delay: 1000, disableOnInteraction: false }}
                 loop={true}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                         
                        <div className="flex justify-center items-center h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
                            <img
                                src={slide.posterUrl}
                                alt={slide.title}
                                className="w-full h-full object-contain" 
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            <div className="swiper-pagination-fraction text-center mt-6 font-semibold text-xl text-primary"></div>
           
            <div 
                className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer" 
                style={{ bottom: '-60px', zIndex: 10 }} 
            >
                <button
                    onClick={handleScroll}
                    title="Scroll Down to Explore"

                    className="p-3 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 flex flex-col items-center overflow-hidden"
                >
                  
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
                         className="w-6 h-6 animate-[bounce_1.5s_infinite]" // কাস্টম অ্যানিমেশন ক্লাস
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>
                    {/* দ্বিতীয় তীর: সামান্য দেরিতে বাউন্স করবে (ঐচ্ছিক, সৌন্দর্যের জন্য) */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
                         className="w-6 h-6 -mt-3 animate-[bounce_1.5s_infinite_0.5s]" 
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg> */}
                </button>
            </div>


        </div>
    );
};

export default Slider;

