// import React from 'react';
// import { Link } from 'react-router';

// const HighlyRatedMovie = ({top}) => {
//     const{_id,posterUrl,title,rating,genre,
// language}=top;
    
//     return (
//         <div>
           


//     <div className="max-w-sm h-full flex flex-col rounded overflow-hidden shadow-lg m-4  p-6">
//   <img
//     className="w-full h-60 object-cover rounded-xl"
//     src={top.posterUrl}
//     alt={top.title}
//   />
//   <div className="py-4 flex-grow">
//     <div className=" text-base">
//        {top.title}
//     </div>
//     <p className=" text-base "> {top.genre}</p>
//     <p className=" text-base"> {top.rating} ⭐</p>
//     <p className=" text-base "> {top.language}</p>
//     <p className="text-base"> {top.createdAt}</p>
//   </div>
//   <button className="btn btn-primary text-white mt-auto">
//     <Link to={`/movies/${_id}`}>View Details</Link>
//   </button>
// </div>






    
            
//         </div>
//     );
// };

// export default HighlyRatedMovie;

import React from 'react';
import { Link } from 'react-router';

const HighlyRatedMovie = ({top}) => {
    const{_id,posterUrl,title,rating,genre, language, createdAt}=top;
    
    // createdAt এর স্ট্রিংটিকে শুধুমাত্র তারিখ হিসেবে দেখানোর জন্য ছোট করা হলো
    const date = createdAt ? new Date(createdAt).toLocaleDateString() : 'N/A';
    
    return (
        // ⚠️ আধুনিক কার্ড ডিজাইন এবং হোভার ইফেক্ট যোগ করা হলো
        <div 
            className="flex flex-col w-full rounded-lg overflow-hidden shadow-xl 
                       bg-base-200 text-base-content
                       transition duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-2xl 
                       p-2"
        >
            {/* ⚠️ ছবির অনুপাত ঠিক করা হলো (h-80) */}
            <img
                className="w-full h-80 object-cover rounded-md mb-3"
                src={posterUrl}
                alt={title}
            />
            
            <div className="flex-grow p-1">
                <h3 className="text-lg font-semibold mb-1 truncate" title={title}>
                    {title}
                </h3>
                
                <div className="text-sm mb-2">
                    {/* জেনর ট্যাগ যোগ করা হলো */}
                    <p className="inline-block text-black px-2 py-0.5 rounded-full bg-primary/10">
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
                
                <p className="text-xs text-right mt-1">
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

export default HighlyRatedMovie;