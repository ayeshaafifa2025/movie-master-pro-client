import React, { use, useContext } from 'react';
import { ThemeContext } from '../Layouts/ThemeProvider';


const Counter = ({data,userCountPromise}) => {
  const { theme } = useContext(ThemeContext);
    const data1= use(userCountPromise);
 
  
   
   
    return (
      
      <div className={`py-5 mb-2 rounded-xl  ${theme === "light" ? "bg-gray-100" : "bg-gray-400"}`}>
        <h1 className='text-3xl  text-center text-black font-bold' >Total Movies And Users
                </h1>
              <div className="grid grid-cols-1  px-20 py-5 gap-20 my-[50px]">
               
  
        <div className="rounded-md p-7 text-black h-[250px] bg-gray-50 flex flex-col items-center justify-center">
          <h2 className="font-bold text-black text-3xl">Total Movies</h2>
          <p className="font-semibold text-[26px]">{data.length}</p>
        </div>
        <div className="rounded-md p-7 text-black h-[250px] bg-gray-50  flex flex-col items-center justify-center">
         
          <h2 className="font-bold text-black text-3xl">Total Users</h2>
          <p className="font-semibold text-[26px]">{data1.length}</p>
        </div>
        
      </div>

      </div>

         
            
        
    );
};

export default Counter;