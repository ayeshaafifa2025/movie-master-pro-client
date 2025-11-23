import React, { use } from 'react';
import HighlyRatedMovie from './HighlyRatedMovie';

const HighlyRatedMovies = ({highlyRatedMoviePromise}) => {
    const topRatedMovies = use(highlyRatedMoviePromise)
    console.log(topRatedMovies);
    return (
        <div className='bg-green-200 py-5 mb-10 rounded-2xl'>
            <h1 className='text-3xl font-bold text-center text-black mb-5'>Top Rated 5 Movie</h1>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 py-10 rounded-xl  mx-auto'>
            {
                topRatedMovies.map(top=><HighlyRatedMovie top={top}></HighlyRatedMovie>)
            }
            
        </div>
        </div>
        
    );
};

export default HighlyRatedMovies;