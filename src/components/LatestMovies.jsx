import React, { use } from 'react';
import LatestMovie from './LatestMovie';


const LatestMovies = ({latestMoviePromise}) => {
    const LatestMovies = use(latestMoviePromise);
    console.log(LatestMovies);
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
            {
                LatestMovies.map(Latest=><LatestMovie Latest={Latest} ></LatestMovie>)

               
            }
            
        </div>
    );
};

export default LatestMovies;