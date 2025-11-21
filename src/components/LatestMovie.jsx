import React from 'react';
import { Link } from 'react-router';

const LatestMovie = ({Latest}) => {
    const{_id,posterUrl,title,rating,genre,
language}= Latest;
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <img
        className="w-full h-70 "
        src={Latest.posterUrl
}
        alt={Latest.title
}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-red-500 mb-2">Movie Name:{Latest.title
}</div>
        <p className="text-gray-900 font-semibold mb-1">Category:{Latest.genre
}</p>
        <p className="text-yellow-500 mb-2">Rating: {Latest.rating} ⭐</p>
        <p className="text-pink-600 mb-2">Language:{Latest.
language}</p>
        <button
        
          
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            <Link to={`/movies/${_id}`}>View Details</Link> 
          
        </button>
      </div>
    </div>
            
        </div>
    );
};

export default LatestMovie;