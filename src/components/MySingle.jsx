



import React from 'react';
import { Link } from 'react-router';

const MySingle = ({ single, handleDelete }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-pink-200 px-10 py-10">
      <img
        className="w-full h-70 rounded-4xl"
        src={single.posterUrl}
        alt={single.title}
       
      />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          Movie Name: {single.title}
        </div>

        <p className="font-bold text-xl mb-2">
          Category: {single.genre}
        </p>

        <p className="font-bold text-xl mb-2">
          Rating: {single.rating} ⭐
        </p>
<div className='flex justify-between items-center'>
 <button className="btn btn-primary text-white">
          <Link to={`/popular/${single._id}`}>View Details</Link>
        </button>

        <button
          onClick={() => handleDelete(single._id)}
          className="btn btn-primary text-white "
        >
          Delete
        </button>
</div>
       
      </div>
    </div>
  );
};

export default MySingle;


