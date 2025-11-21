import React, { use } from 'react';
import HighlyRatedMovie from './HighlyRatedMovie';

const HighlyRatedMovies = ({highlyRatedMoviePromise}) => {
    const topRatedMovies = use(highlyRatedMoviePromise)
    console.log(topRatedMovies);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
            {
                topRatedMovies.map(top=><HighlyRatedMovie top={top}></HighlyRatedMovie>)
            }
            
        </div>
    );
};

export default HighlyRatedMovies;