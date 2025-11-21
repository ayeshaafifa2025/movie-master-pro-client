import React from 'react';


const Counter = ({data}) => {
    console.log(data);
  
   
   
    return (
        
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] my-[50px]">
        <div className="rounded-md p-7 text-white h-[250px] bg-amber-400 flex flex-col items-center justify-center">
          <h2 className="font-bold text-[35px]">Total Movies</h2>
          <p className="font-semibold text-[26px]">{data.length}</p>
        </div>
        <div className="rounded-md p-7 text-white h-[250px] bg-pink-600 flex flex-col items-center justify-center">
         
          <h2 className="font-bold text-[35px]">Total Users</h2>
          <p className="font-semibold text-[26px]">0</p>
        </div>
        
      </div>
            
        
    );
};

export default Counter;