import React, { useContext } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import Container from '../Container'; 

import "swiper/css";
import "swiper/css/pagination";

import FeedBackCard from "./FeedBackCard";
import { ThemeContext } from "../Layouts/ThemeProvider";

const feedbacksData = [
  {
    userName: "Amit Ray",
    testimonial: "The search filters are incredibly precise! Found a hidden gem from the 80s instantly. Absolutely brilliant platform for movie lovers.",
    user_photoURL: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    userName: "Priya Sen",
    testimonial: "The 'Top Rated' section is my new go-to. It saved me hours of scrolling and helped me discover fantastic films!",
    user_photoURL: "https://randomuser.me/api/portraits/women/77.jpg",
  },
  {
    userName: "Tariq Mahmood",
    testimonial: "The details page for each movie is comprehensive, including ratings and genre info. Highly recommend FilmFusion Pro!",
    user_photoURL: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    userName: "Jannat Mirza",
    testimonial: "Adding movies to my personal favorites list is so easy. Perfect for tracking what I want to watch next.",
    user_photoURL: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    userName: "Naim Islam",
    testimonial: "Responsive layout across all my devices. The UI is clean, intuitive, and distraction-free. Great work!",
    user_photoURL: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    userName: "Shabana Begum",
    testimonial: "I appreciate how quickly the 'Latest Added' movies show up. Always something new to browse here.",
    user_photoURL: "https://randomuser.me/api/portraits/women/40.jpg",
  },
  {
    userName: "Rana Chowdhury",
    testimonial: "The statistics section showing total users gives a lot of confidence. This community is growing fast!",
    user_photoURL: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    userName: "Fariha Noor",
    testimonial: "As someone who loves exploring different genres, the category filter is a lifesaver. Simple and effective.",
    user_photoURL: "https://randomuser.me/api/portraits/women/61.jpg",
  },
  {
    userName: "Imran Khan",
    testimonial: "The loading speed is fantastic. No lag when jumping between movie pages. A smooth user experience overall.",
    user_photoURL: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    userName: "Sonia Afroz",
    testimonial: "The best place to keep track of movies I've watched and want to watch. Much better than maintaining a spreadsheet!",
    user_photoURL: "https://randomuser.me/api/portraits/women/8.jpg",
  },
];

const FeedBacks = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section className={`py-20 mb-5 ${theme === "light" ? "bg-gray-100" : "bg-gray-400"} `}>
{/*       <Container> */}
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
          What Our Viewers Say
        </h2>

        <Swiper
          loop={true}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3500, 
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
        >
          {feedbacksData.map((feedback, idx) => (
            <SwiperSlide key={idx}>
              <FeedBackCard feedback={feedback} />
            </SwiperSlide>
          ))}
        </Swiper>
{/*       </Container> */}
    </section>
  );
};

export default FeedBacks;