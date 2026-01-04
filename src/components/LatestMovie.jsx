// import React from 'react';
// import { Link } from 'react-router';

// const LatestMovie = ({Latest}) => {
//     const{_id,posterUrl,title,rating,genre,createdAt,
// language}= Latest;
//     return (
//         <div>
//     <div className="max-w-sm h-full flex flex-col rounded overflow-hidden shadow-lg m-4 bg-pink-200 p-6">
//   <img
//     className="w-full h-60 object-cover rounded-xl"
//     src={Latest.posterUrl}
//     alt={Latest.title}
//   />
//   <div className="py-4 flex-grow">
//     <div className="text-base">
//        {Latest.title}
//     </div>
//     <p className="text-base"> {Latest.genre}</p>
//     <p className="text-base"> {Latest.rating} ⭐</p>
//     <p className="text-base"> {Latest.language}</p>
//     <p className="text-base"> {Latest.createdAt}</p>
//   </div>
//   <button className="btn btn-primary text-white mt-auto">
//     <Link to={`/movies/${_id}`}>View Details</Link>
//   </button>

// </div>

//         </div>
//     );
// };

// export default LatestMovie;

import React from 'react';
import { Link } from 'react-router';

const LatestMovie = ({Latest}) => {
    const{_id,posterUrl,title,rating,genre,createdAt, language}= Latest;
    
    const date = createdAt ? new Date(createdAt).toLocaleDateString() : 'N/A';
    
    return (
        <div 
            className="flex flex-col w-full rounded-lg overflow-hidden shadow-xl 
                       bg-base-200 text-base-content
                       transition duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-2xl 
                       p-2"
        >
            
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

export default LatestMovie;