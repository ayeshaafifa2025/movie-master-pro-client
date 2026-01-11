import React from 'react';

const Watched = ({one}) => {
    const{movieId, movie,user,email,photo,picture
}=one;
    return (
        
            <div className=''>
           
      <div className=" bg-white gap-5 rounded-2xl shadow-xl p-6 mt-6 border border-gray-200 ">
        {/* <img
          src={one.photo}
          
          alt={one.movie}
          className="w-16 h-16 rounded-full border-2 border-purple-400 shadow"
          
        /> */}
         {/* <h2 className="text-base text-gray-800 capitalize">{one.user}</h2> */}
          {/* <p className="text-xs text-gray-500">{one.email}</p> */}
        
        {/* <p className="text-sm text-gray-500 font-medium">{one.movieId}</p> */}
        <p className="text-sm text-gray-500 font-medium">{one.movie}</p>
       
      </div>

        
      

     
    </div>
             
            
            
        
            
       
    );
};

export default Watched;