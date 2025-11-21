import React, { use } from 'react';
import Slider from './Slider';


const Hero = ({heroPromise}) => {
    const slider = use(heroPromise);
    console.log(slider);
    return (
        <div>
           <Slider slides={slider}></Slider>
            
        </div>
    );
};

export default Hero;