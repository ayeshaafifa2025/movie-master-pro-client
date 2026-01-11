

import React, { use, useContext } from 'react';
import HighlyRatedMovie from './HighlyRatedMovie';
import { ThemeContext } from '../Layouts/ThemeProvider';

const HighlyRatedMovies = ({highlyRatedMoviePromise}) => {
    const { theme } = useContext(ThemeContext);
    const topRatedMovies = use(highlyRatedMoviePromise)
    
    
    return (
        
        <div className={`mb-2 py-4 rounded-2xl bg-base-100`}>
          
            <h1 className={`text-3xl font-bold text-center mb-5 ${theme === 'light' ? 'text-black' : 'text-gray-400'}`}>
                Top Rated 5 Movies
            </h1>
            
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
             gap-4 md:gap-6 px-4 py-5 mx-auto justify-items-center'>
                {
                    topRatedMovies.map(top=><HighlyRatedMovie key={top._id} top={top}></HighlyRatedMovie>)
                }
            </div>
        </div>
    );
};

export default HighlyRatedMovies;