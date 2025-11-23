import React, { use } from 'react';
import LatestMovie from './LatestMovie';


const LatestMovies = ({latestMoviePromise}) => {
    const LatestMovies = use(latestMoviePromise);
    console.log(LatestMovies);
    
    return (

<div className='bg-blue-200 mb-10  py-5'>   
    <h1 className='text-3xl font-bold text-center mb-5'>Latest Added 6 Movie</h1>
    <div className='grid grid-cols-1   px-10 py-10 rounded-xl md:grid-cols-2 lg:grid-cols-3 mx-auto'>
            
            {
                LatestMovies.map(Latest=><LatestMovie Latest={Latest} ></LatestMovie>)

               
            }
            
        </div>
</div>
        
    );
};

export default LatestMovies;