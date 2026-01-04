import React, { use, useContext } from 'react';
import Slider from './Slider';
import { ThemeContext } from '../Layouts/ThemeProvider';


const Hero = ({heroPromise}) => {
    const slider = use(heroPromise);
    console.log(slider);
     const { theme } = useContext(ThemeContext);
    return (
      

         <div className={`mb-2 py-10 px-10 ${theme === 'light' ? 'bg-gray-100  ' : 'bg-gray-400'}`}>
      <h1 className={`text-center font-bold text-3xl mb-5 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
        Featured Movies
      </h1>
      <Slider slides={slider} />
    </div>


    );
};

export default Hero;