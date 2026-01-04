// import React, { use, useContext } from 'react';
// import HighlyRatedMovie from './HighlyRatedMovie';
// import { ThemeContext } from '../Layouts/ThemeProvider';

// const HighlyRatedMovies = ({highlyRatedMoviePromise}) => {
//     const { theme } = useContext(ThemeContext);
//     const topRatedMovies = use(highlyRatedMoviePromise)
//     console.log(topRatedMovies);
//     return (
        
//             <div className={`mb-2 py-5 rounded-2xl ${theme === 'light' ? 'bg-blue-200  ' : 'bg-purple-400'}`}>
//             <h1 className='text-3xl font-bold text-center text-black mb-5'>Top Rated 5 Movie</h1>
// <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6
//              gap-8  py-10 rounded-xl mx-auto 
//              justify-items-center'>
//             {
//                 topRatedMovies.map(top=><HighlyRatedMovie top={top}></HighlyRatedMovie>)
//             }
            
//         </div>
//         </div>
        
//     );
// };

// export default HighlyRatedMovies;

import React, { use, useContext } from 'react';
import HighlyRatedMovie from './HighlyRatedMovie';
import { ThemeContext } from '../Layouts/ThemeProvider';

const HighlyRatedMovies = ({highlyRatedMoviePromise}) => {
    const { theme } = useContext(ThemeContext);
    const topRatedMovies = use(highlyRatedMoviePromise)
    // console.log(topRatedMovies); // কনসোল লগ কমেন্ট করা হলো
    
    return (
        // ⚠️ ডার্ক/লাইট মোডের জন্য থিম ক্লাস ব্যবহার করা হলো
        <div className={`mb-5 py-8 rounded-2xl bg-base-100`}>
            {/* ⚠️ টেক্সটের রং থিম অনুযায়ী সেট করা হলো */}
            <h1 className={`text-3xl font-bold text-center mb-5 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
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