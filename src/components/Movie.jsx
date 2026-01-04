// import React from 'react';
// import { Link } from 'react-router';
// import Container from './Container';

// const Movie = ({movie}) => {
//     // console.log(movie);
//     const{_id,posterUrl,title,rating,genre,
// language
// }=movie;
//     return (
//         <Container>
                 

//     <div className="max-w-sm h-full flex flex-col rounded overflow-hidden shadow-lg m-4  p-1">
//   <img
//     className="w-full h-50 object-cover rounded-xl"
//     src={movie.posterUrl}
//     alt={movie.title}
//   />
//   <div className="py-4 flex-grow">
//     <div className="text-base">
//       {movie.title}
//     </div>
//     <div className='flex justify-between items-center'>
//        <p className="text-base">{movie.genre}</p>
//     <p className="text-base">{movie.rating} ⭐</p>

//     </div>
//     <div className='flex justify-between items-center'>
//          <p className="text-base">{movie.language}</p>
//     <p className="text-base">{movie.createdAt}</p>

//     </div>
   
 
//   </div>
//   <button className="btn btn-primary text-white mt-auto">
//     <Link to={`/movies/${movie._id}`}>View Details</Link>
//   </button>
// </div>


//         </Container>
      
//     );
// };

// export default Movie;

import React from 'react';
import { Link } from 'react-router';

// ⚠️ এখানে Container কম্পোনেন্ট বাদ দেওয়া হলো, কারণ গ্রিড নিজেই কন্টেইনারের মধ্যে আছে।

const Movie = ({movie}) => {
    const{_id,posterUrl,title,rating,genre, language, createdAt}=movie;
    
    // createdAt এর স্ট্রিংটিকে শুধুমাত্র সাল বা তারিখ হিসেবে দেখানোর জন্য ছোট করা যেতে পারে
    const date = createdAt ? new Date(createdAt).toLocaleDateString() : 'N/A';

    return (
        // ⚠️ হোভার ইফেক্ট, ট্রানজিশন এবং কম্প্যাক্ট ডিজাইন যোগ করা হলো
        <div 
            className="flex flex-col rounded-lg overflow-hidden shadow-xl 
                       bg-base-200 text-base-content
                       transition duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-2xl 
                       p-2"
        >
            {/* ⚠️ ছবির অনুপাত ঠিক করা হলো (যেমন h-72 বা h-80) */}
            <img
                className="w-full h-80 object-cover rounded-md mb-3"
                src={posterUrl}
                alt={title}
            />
            
            <div className="flex-grow p-1">
                <h3 className="text-lg font-semibold mb-1 truncate" title={title}>
                    {title}
                </h3>
                
                <div className="text-sm  mb-2">
                    <p className="inline-block text-black px-2 py-0.5 rounded-full bg-primary/10 ">
                        {genre}
                    </p>
                </div>
                
                <div className='flex justify-between items-center text-sm'>
                    <p className="font-medium flex items-center">
                        Rating: {rating} ⭐
                    </p>
                    <p className="text-xs">
                        {language}
                    </p>
                </div>
                
                <p className="text-xs text-right  mt-1">
                    {date}
                </p>
            </div>
            
            <Link to={`/movies/${_id}`} className="block w-full">
                <button className="btn btn-primary w-full mt-2 text-white">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default Movie;