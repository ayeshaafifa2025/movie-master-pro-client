import React, { useContext, useState } from 'react';
import { ThemeContext } from '../Layouts/ThemeProvider';

// Single FAQ Item Component
const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`border-b
         ${isOpen ? 'bg-gray-200' : 'bg-white'}`}>
            {/* Question (Clickable Accordion Header) */}
            <button
                className="flex justify-between items-center w-full p-5 text-lg font-semibold text-left text-gray-800 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                {/* Arrow Icon */}
                <svg
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>

            {/* Answer (Content) */}
            {isOpen && (
                <div className="p-5 pt-0 text-gray-600">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

// Main FAQ Component
const FAQ = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const faqData = [
        {
            question: "1. What kind of platform is FilmFusion Pro?",
            answer: "FilmFusion Pro is a modern movie collection and recommendation platform designed to provide a seamless system for smooth browsing and managing personal movie collections."
        },
        {
            question: "2. How can I search or filter the movies?",
            answer: "You can search for movies directly by title using the dedicated search bar. On the 'All Movies' page, you can use advanced filtering options by genre, rating range, and language."
        },
        {
            question: "3. How are movie ratings determined?",
            answer: "Movie ratings are based on the average ratings submitted by users on the platform. You can contribute your own rating to any movie after you log in."
        },
        {
            question: "4. Can I save my favorite movies?",
            answer: "Yes. After logging in, you will find an 'Add to Favorite' button on each movie's 'View Details' page, allowing you to save the movie to your personal dashboard."
        },
        {
            question: "5. When are new movies added to the platform?",
            answer: "We regularly update our collection with new and popular movies. Please follow the 'Latest Added Movies' section on the homepage for the most recent additions."
        },
        {
            question: "6. Is there any subscription fee to use the platform?",
            answer: "The platform is currently free to use for browsing the movie collection and viewing information. There are no paid subscription features at this time."
        },
        {
            question: "7. What should I do if I have trouble logging in or signing up?",
            answer: "If you encounter any issues during login or sign-up, please ensure you are using the correct credentials. If the problem persists, please check your network connection or contact us using the information in the Footer."
        },
        {
            question: "8. Is the platform accessible on mobile devices?",
            answer: "Absolutely! FilmFusion Pro uses a fully responsive design, ensuring an optimized and user-friendly experience across all devices, including desktops, tablets, and mobiles."
        },
        {
            question: "9. How do I explore movies by genre?",
            answer: "You can find a list of available genres in the 'Our Movie Categories' section on the homepage. Additionally, the 'All Movies' page features a dedicated genre filter dropdown."
        },
        {
            question: "10. Does this platform provide streaming services?",
            answer: "FilmFusion Pro primarily functions as a movie database and collection management tool. It provides detailed movie information and tracking features, but it does not host or offer direct streaming of the films."
        }
    ];

    return (
        <div className={`py-10 ${theme === "light" ? "bg-gray-100" : "bg-gray-400"}`}>
            {/* <Container> */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-center text-black">
                        Frequently Asked Questions (FAQ)
                    </h2>
                    <div className="shadow-xl rounded-lg overflow-hidden">
                        {faqData.map((item, index) => (
                            <FaqItem key={index} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </div>
            {/* </Container> */}
        </div>
    );
};

export default FAQ;