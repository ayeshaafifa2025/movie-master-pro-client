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
                 

    <div className="max-w-sm h-full flex flex-col rounded overflow-hidden shadow-lg m-4 bg-pink-200 p-6">
  <img
    className="w-full h-60 object-cover rounded-xl"
    src={movie.posterUrl}
    alt={movie.title}
  />
  <div className="py-4 flex-grow">
    <div className="font-bold text-xl text-red-500 mb-2">
      Movie Name: {movie.title}
    </div>
    <p className="font-bold text-xl mb-2">Category: {movie.genre}</p>
    <p className="font-bold text-xl mb-2">Rating: {movie.rating} ⭐</p>
    <p className="font-bold text-xl mb-2">Language: {movie.language}</p>
    <p className="font-bold text-xl mb-2">Added At: {movie.createdAt}</p>
  </div>
  <button className="btn btn-primary text-white mt-auto">
    <Link to={`/movies/${movie._id}`}>View Details</Link>
  </button>
</div>


        </Container>
      
    );
};

export default Movie;