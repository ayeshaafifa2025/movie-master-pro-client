import React from 'react';
import { Link } from 'react-router';

const Movie = ({movie}) => {
    // console.log(movie);
    const{_id,posterUrl,title,rating,genre,
language
}=movie;
    return (
       <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <img
        className="w-full h-70 "
        src={movie.posterUrl
}
        alt={movie.title
}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-red-500 mb-2">Movie Name:{movie.title
}</div>
        <p className="text-gray-900 font-semibold mb-1">Category:{movie.genre
}</p>
        <p className="text-yellow-500 mb-2">Rating: {movie.rating} ⭐</p>
        <p className="text-pink-600 mb-2">Language:{movie.
language}</p>
        <button
        
          
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            <Link to={`/movies/${_id}`}>View Details</Link> 
          
        </button>
      </div>
    </div>
    );
};

export default Movie;