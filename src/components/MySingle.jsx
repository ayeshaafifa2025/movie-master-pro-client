
import React from 'react';
import { Link } from 'react-router';

const MySingle = ({ single, handleDelete }) => {
  return (


<div className="flex flex-col w-full rounded-lg overflow-hidden shadow-xl 
                       bg-base-200 text-base-content
                       transition duration-300 ease-in-out transform hover:scale-[1.03] hover:shadow-2xl 
                       p-2">
  <img
    className="w-full h-60 object-cover rounded-xl"
    src={single.posterUrl}
    alt={single.title}
  />

  <div className="py-4 flex-grow">
    <div className="font-bold text-xs  mb-2">
      {single.title}
    </div>
    <p className="text-xs mb-2">{single.genre}</p>
    <p className="text-xs mb-2">{single.rating} ⭐</p>
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


