import React from 'react';
import { Link } from 'react-router';
import Container from './Container';

const Movie = ({movie}) => {
    // console.log(movie);
    const{_id,posterUrl,title,rating,genre,
language
}=movie;
    return (
        <Container>
                 <div className="max-w-sm rounded-4xl overflow-hidden shadow-lg m-4 bg-pink-200 px-10 py-10">
      <img
        className="w-full h-70 rounded-4xl "
        src={movie.posterUrl
}
        alt={movie.title
}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Movie Name:  {movie.title
}</div>
        <p className=" font-bold text-xl mb-2">Category:{movie.genre
}</p>
        <p className="font-bold text-xl mb-2">Rating:   {movie.rating}</p>
        <p className="font-bold text-xl mb-2">Language:   {movie.
language}</p>
        <button
        
          
          className="btn btn-primary text-white"
        >
            <Link to={`/movies/${movie._id}`}>View Details</Link> 
          
        </button>
      </div>
    </div>

        </Container>
      
    );
};

export default Movie;