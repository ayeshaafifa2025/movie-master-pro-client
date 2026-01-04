// import React, { use, useContext } from 'react';
// import LatestMovie from './LatestMovie';
// import { ThemeContext } from '../Layouts/ThemeProvider';


// const LatestMovies = ({latestMoviePromise}) => {
//   const { theme } = useContext(ThemeContext);
//     const LatestMovies = use(latestMoviePromise);
//     console.log(LatestMovies);
    
//     return (


//   <div className={`mb-2 py-5 ${theme === 'light' ? 'bg-blue-200  ' : 'bg-purple-400'}`}>  
//     <h1 className='text-3xl text-black font-bold text-center mb-5'>Latest Added 6 Movie</h1>


// <div
//   className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6
//              gap-8 py-10 rounded-xl mx-auto 
//              justify-items-center"
// >
//   {LatestMovies.map((Latest) => (
//     <LatestMovie Latest={Latest} key={Latest._id} />
//   ))}
// </div>

// </div>
        
//     );
// };

// export default LatestMovies;

import React, { use, useContext } from 'react';
import LatestMovie from './LatestMovie';
import { ThemeContext } from '../Layouts/ThemeProvider';


const LatestMovies = ({latestMoviePromise}) => {
  const { theme } = useContext(ThemeContext);
    const LatestMovies = use(latestMoviePromise);
    
    return (
  <div className={`mb-5 py-8 rounded-2xl bg-base-100`}>  
    <h1 className={`text-3xl font-bold text-center mb-5 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
        Latest Added 6 Movies
    </h1>

<div
  className="    grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
             gap-4 md:gap-6 px-4 py-5 mx-auto justify-items-center"
>
  {LatestMovies.map((Latest) => (
    <LatestMovie Latest={Latest} key={Latest._id} />
  ))}
</div>

</div>
        
    );
};

export default LatestMovies;