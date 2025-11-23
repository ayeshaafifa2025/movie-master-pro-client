import React, { use } from 'react';
import Slider from './Slider';


const Hero = ({heroPromise}) => {
    const slider = use(heroPromise);
    console.log(slider);
    return (
        <div className='mb-10 bg-purple-300 py-10 px-10'>
            <h1 className='text-center text-black  font-bold text-3xl mb-5'>Featured Movies</h1>
           <Slider slides={slider}></Slider>
            
        </div>
    );
};

export default Hero;