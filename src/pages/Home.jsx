import React from 'react';
import Counter from '../components/Counter';
import { useLoaderData } from 'react-router';
import LatestMovies from '../components/LatestMovies';
 const userCountPromise = fetch("http://localhost:3000/users")
    .then(data=>data.json());

    const latestMoviePromise =fetch("http://localhost:3000/sortedBy-CreateAt/")
    .then(data=>data.json());

const Home = () => {
    const data = useLoaderData();
    console.log(data);
   
    
  
    

    return (
        
        <div>
            <Counter data={data} userCountPromise={userCountPromise} ></Counter>
            <LatestMovies latestMoviePromise={latestMoviePromise} ></LatestMovies>
        </div>
    );
};

export default Home;