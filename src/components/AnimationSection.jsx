import React, { useContext } from 'react';
import { ThemeContext } from '../Layouts/ThemeProvider';

const AnimationSection = () => {
  const { theme } = useContext(ThemeContext);
  const features = [
    "40+ enjoyable movies",
    "Filter by genre",
    "User-Friendly Interface",
    "Filter by rating range",
    "Responsive Layout",
    "Interactive Features"
  ];
  const colors = [
    "from-pink-400 via-red-500 to-yellow-500",
    "from-green-400 via-teal-500 to-blue-500",
    "from-purple-400 via-indigo-500 to-pink-500",
    "from-yellow-400 via-orange-500 to-red-500",
    "from-blue-400 via-cyan-500 to-teal-500",
    "from-indigo-400 via-purple-500 to-pink-500"
  ];

  return (
  
      <section  className={`py-8 rounded-xl ${theme === 'light' ? 'bg-blue-200  ' : 'bg-purple-400'}`}>
    
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-3xl font-bold mb-22  text-black">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              className={`p-8 rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105 bg-gradient-to-r ${colors[index]} text-white`}
            >
              <p className="text-xl sm:text-2xl font-semibold">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimationSection;
