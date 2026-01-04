
import React from 'react';
import { Link } from 'react-router';

const MySingle = ({ single, handleDelete }) => {
  return (


<div className="max-w-sm h-full flex flex-col rounded overflow-hidden shadow-lg m-4 bg-gray-300 p-6">
  <img
    className="w-full h-60 object-cover rounded-xl"
    src={single.posterUrl}
    alt={single.title}
  />

  <div className="py-4 flex-grow">
    <div className="font-bold text-xl text-red-500 mb-2">
      Movie Name: {single.title}
    </div>
    <p className="font-bold text-xl mb-2">Category: {single.genre}</p>
    <p className="font-bold text-xl mb-2">Rating: {single.rating} ⭐</p>
  </div>

  <div className="flex justify-between mt-auto">
    <button className="btn btn-primary text-white">
      <Link to={`/popular/${single._id}`}>View Details</Link>
    </button>

    <button
      onClick={() => handleDelete(single._id)}
      className="btn btn-primary text-white"
    >
      Delete
    </button>
  </div>
</div>

  );
};

export default MySingle;


