import React from 'react';
import { Link } from 'react-router';

const LatestMovie = ({Latest}) => {
    const{_id,posterUrl,title,rating,genre,createdAt,
language}= Latest;
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-pink-200 px-10 py-10">
      <img
        className="w-full h-70 rounded-4xl "
        src={Latest.posterUrl
}
        alt={Latest.title
}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-red-500 mb-2">Movie Name:{Latest.title
}</div>
        <p className="font-bold text-xl mb-2">Category:{Latest.genre
}</p>
        <p className="font-bold text-xl mb-2">Rating: {Latest.rating} ⭐</p>
        <p className="font-bold text-xl mb-2">Language:{Latest.
language}</p>
        <p className="font-bold text-xl mb-2">Added At:{Latest.createdAt
}</p>

        <button
        
          
          className="btn btn-primary text-white"
        >
            <Link to={`/movies/${_id}`}>View Details</Link> 
          
        </button>
      </div>
    </div>
            
        </div>
    );
};

export default LatestMovie;