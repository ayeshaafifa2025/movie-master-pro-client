import React, { use } from 'react';


const Counter = ({data,userCountPromise}) => {
    const data1= use(userCountPromise);
    // console.log(data,data1);
  
   
   
    return (
      <div className='bg-amber-100 py-5 mb-10 rounded-xl'>
        <h1 className='text-3xl  text-center text-red-500 font-bold' >Our Total Movies And Users
                </h1>
              <div className="grid grid-cols-1 md:grid-cols-2  px-20 py-5 gap-20 my-[50px]">
               
  
        <div className="rounded-md p-7 text-white h-[100px] bg-amber-400 flex flex-col items-center justify-center">
          <h2 className="font-bold text-3xl">Total Movies</h2>
          <p className="font-semibold text-[26px]">{data.length}</p>
        </div>
        <div className="rounded-md p-7 text-white h-[100px] bg-pink-600 flex flex-col items-center justify-center">
         
          <h2 className="font-bold text-3xl">Total Users</h2>
          <p className="font-semibold text-[26px]">{data1.length}</p>
        </div>
        
      </div>

      </div>

         
            
        
    );
};

export default Counter;