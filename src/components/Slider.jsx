

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// CSS আমদানি করুন
import 'swiper/css';
import 'swiper/css/navigation';
// ⚠️ Pagination এর জন্য নতুন CSS আমদানি
import 'swiper/css/pagination'; 
// ⚠️ Cards Effect এর জন্য CSS আমদানি
import 'swiper/css/effect-cards'; 

// ⚠️ EffectCards মডিউল আমদানি করুন
import { Navigation, Pagination, Autoplay, EffectCards } from 'swiper/modules';

const Slider = ({slides}) => {
    
    return (
        <div className="py-12">
            <Swiper
                // মডিউল
                modules={[Navigation, Pagination, Autoplay, EffectCards]}
                
                // ইফেক্ট: Cards
                effect={'cards'} 
                
                // Cards সেটিংস
                effectCards={{
                    perSlideOffset: 20, // অফসেট বাড়ানো হলো যাতে কার্ডগুলো আরও দূরে থাকে
                    perSlideRotate: 6, // ঘোরার ডিগ্রি বাড়ানো হলো
                    rotate: true,
                    slideShadows: true,
                }}
                
                // স্লাইড সেটিংস
                grabCursor={true}
                slidesPerView={1} 
                
                // Navigation (Arrow)
                navigation
                
                // ⚠️ Advanced Pagination: Fraction
                pagination={{ 
                    type: 'fraction', // এই টাইপটি (1/10, 2/10) দেখাবে, যা খুব প্রফেশনাল
                    el: '.swiper-pagination-fraction', // নিচে অতিরিক্ত কাস্টম ক্লাস যোগ করা হয়েছে
                    clickable: true 
                }}
                
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                loop={true}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        {/* পোস্টার কন্টেইনার */}
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
            
            {/* ⚠️ অ্যাডভান্সড ফ্র্যাকশন পেজিনেশন দেখানোর জন্য কাস্টম এলিমেন্ট */}
            <div className="swiper-pagination-fraction text-center mt-6 font-semibold text-xl text-primary"></div>

        </div>
    );
};

export default Slider;



