import React, { use, useContext } from 'react';
import { ThemeContext } from '../Layouts/ThemeProvider';


const Counter = ({data,userCountPromise}) => {
  const { theme } = useContext(ThemeContext);
    const data1= use(userCountPromise);
 
  
   
   
    return (
      
      <div className={`py-5 mb-10 rounded-xl ${theme === 'light' ? 'bg-blue-200  ' : 'bg-purple-400'}`}>
        <h1 className='text-3xl  text-center text-black font-bold' >Our Total Movies And Users
                </h1>
              <div className="grid grid-cols-1 md:grid-cols-2  px-20 py-5 gap-20 my-[50px]">
               
  
        <div className="rounded-md p-7 text-white h-[100px] bg-amber-400 flex flex-col items-center justify-center">
          <h2 className="font-bold text-black text-3xl">Total Movies</h2>
          <p className="font-semibold text-[26px]">{data.length}</p>
        </div>
        <div className="rounded-md p-7 text-white h-[100px] bg-pink-600 flex flex-col items-center justify-center">
         
          <h2 className="font-bold text-black text-3xl">Total Users</h2>
          <p className="font-semibold text-[26px]">{data1.length}</p>
        </div>
        
      </div>

      </div>

         
            
        
    );
};

export default Counter;