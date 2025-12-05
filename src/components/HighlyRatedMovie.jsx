import React from 'react';
import { Link } from 'react-router';

const HighlyRatedMovie = ({top}) => {
    const{_id,posterUrl,title,rating,genre,
language}=top;
    
    return (
        <div>
           


    <div className="max-w-sm h-full flex flex-col rounded overflow-hidden shadow-lg m-4 bg-pink-200 p-6">
  <img
    className="w-full h-60 object-cover rounded-xl"
    src={top.posterUrl}
    alt={top.title}
  />
  <div className="py-4 flex-grow">
    <div className="font-bold text-xl text-red-500 mb-2">
      Movie Name: {top.title}
    </div>
    <p className="font-bold text-xl mb-2">Category: {top.genre}</p>
    <p className="font-bold text-xl mb-2">Rating: {top.rating} ⭐</p>
    <p className="font-bold text-xl mb-2">Language: {top.language}</p>
    <p className="font-bold text-xl mb-2">Added At: {top.createdAt}</p>
  </div>
  <button className="btn btn-primary text-white mt-auto">
    <Link to={`/movies/${_id}`}>View Details</Link>
  </button>
</div>






    
            
        </div>
    );
};

export default HighlyRatedMovie;