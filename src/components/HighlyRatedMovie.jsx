import React from 'react';
import { Link } from 'react-router';

const HighlyRatedMovie = ({top}) => {
    const{_id,posterUrl,title,rating,genre,
language}=top;
    
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-pink-200 px-10 py-10 ">
      <img
        className="w-full h-70 rounded-4xl "
        src={top.posterUrl
}
        alt={top.title
}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Movie Name:{top.title
}</div>
        <p className="font-bold text-xl mb-2">Category:{top.genre
}</p>
        <p className="font-bold text-xl mb-2">Rating: {top.rating} ⭐</p>
        <p className="font-bold text-xl mb-2">Language:{top.
language}</p>
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

export default HighlyRatedMovie;