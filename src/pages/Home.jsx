import React from 'react';
import Counter from '../components/Counter';
import { useLoaderData } from 'react-router';
 const userCountPromise = fetch("http://localhost:3000/users")
    .then(data=>data.json());
const Home = () => {
    const data = useLoaderData();
    console.log(data);
   
    
  
    

    return (
        
        <div>
            <Counter data={data} userCountPromise={userCountPromise} ></Counter>
        </div>
    );
};

export default Home;