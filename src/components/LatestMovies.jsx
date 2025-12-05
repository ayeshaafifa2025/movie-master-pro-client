import React, { use, useContext } from 'react';
import LatestMovie from './LatestMovie';
import { ThemeContext } from '../Layouts/ThemeProvider';


const LatestMovies = ({latestMoviePromise}) => {
  const { theme } = useContext(ThemeContext);
    const LatestMovies = use(latestMoviePromise);
    console.log(LatestMovies);
    
    return (


  <div className={`mb-10 py-5 ${theme === 'light' ? 'bg-blue-200  ' : 'bg-purple-400'}`}>  
    <h1 className='text-3xl text-black font-bold text-center mb-5'>Latest Added 6 Movie</h1>


<div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
             gap-8 px-10 py-10 rounded-xl mx-auto 
             justify-items-center"
>
  {LatestMovies.map((Latest) => (
    <LatestMovie Latest={Latest} key={Latest._id} />
  ))}
</div>

</div>
        
    );
};

export default LatestMovies;