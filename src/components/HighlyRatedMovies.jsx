import React, { use, useContext } from 'react';
import HighlyRatedMovie from './HighlyRatedMovie';
import { ThemeContext } from '../Layouts/ThemeProvider';

const HighlyRatedMovies = ({highlyRatedMoviePromise}) => {
    const { theme } = useContext(ThemeContext);
    const topRatedMovies = use(highlyRatedMoviePromise)
    console.log(topRatedMovies);
    return (
        
            <div className={`mb-10 py-5 rounded-2xl ${theme === 'light' ? 'bg-blue-200  ' : 'bg-purple-400'}`}>
            <h1 className='text-3xl font-bold text-center text-black mb-5'>Top Rated 5 Movie</h1>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
             gap-8 px-10 py-10 rounded-xl mx-auto 
             justify-items-center'>
            {
                topRatedMovies.map(top=><HighlyRatedMovie top={top}></HighlyRatedMovie>)
            }
            
        </div>
        </div>
        
    );
};

export default HighlyRatedMovies;