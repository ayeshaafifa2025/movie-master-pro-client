import React from 'react';
import Counter from '../components/Counter';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    // console.log(data);
  
    

    return (
        
        <div>
            <Counter data={data} ></Counter>
        </div>
    );
};

export default Home;