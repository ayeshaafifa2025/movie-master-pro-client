import React from 'react';

const MySingle = ({single}) => {
    console.log(single);
    const{newPopular}=single|| {};
    const{_id,movie,user_name,user_email,user_photo,user_review,user_rating}= newPopular || {};
    return (
        <div className=''>
           <div className="max-w-md  mx-auto bg-white rounded-2xl shadow-xl p-6 mt-6 border border-gray-200 hover:shadow-2xl transition duration-300">
      <div className="flex items-center gap-4">
        <img
          src={user_photo}
          alt={user_name}
          className="w-16 h-16 rounded-full border-2 border-purple-400 shadow"
        />

        <div>
          <h2 className="text-xl font-semibold text-gray-800 capitalize">{user_name}</h2>
          <p className="text-sm text-gray-500">{user_email}</p>
        </div>
      </div>

      <div className="mt-4 border-b border-gray-200"></div>

      <div className="mt-4">
        <p className="text-sm text-gray-500 font-medium">Movie ID:</p>
        <p className="text-gray-800 font-semibold">{movie}</p>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-500 font-medium">Review:</p>
        <p className="text-gray-800 bg-purple-50 p-3 rounded-xl mt-1">
          {user_review}
        </p>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <p className="text-sm text-gray-500 font-medium">Rating:</p>
        <span className="px-4 py-1 bg-yellow-300 text-gray-900 font-semibold rounded-full">
          ⭐ {user_rating}/10
        </span>
      </div>
    </div>
             
            
            
        </div>
    );
};

export default MySingle;