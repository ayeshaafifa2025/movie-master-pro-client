import React, { Suspense } from 'react';
import Counter from '../components/Counter';
import { useLoaderData } from 'react-router';
import LatestMovies from '../components/LatestMovies';
import HighlyRatedMovies from '../components/HighlyRatedMovies';
import Loading from './Loading';
 const userCountPromise = fetch("http://localhost:3000/users")
    .then(data=>data.json());

    const latestMoviePromise =fetch("http://localhost:3000/sortedBy-CreateAt/")
    .then(data=>data.json());
    const highlyRatedMoviePromise = fetch("http://localhost:3000/highly-rated")
    .then(data=>data.json());


const Home = () => {
    const data = useLoaderData();
    console.log(data);
   
    

    

    return (
        
        <div>
           
            <Suspense fallback={<Loading></Loading>}>
                <Counter data={data} userCountPromise={userCountPromise} ></Counter>
            </Suspense>
            <Suspense fallback={<Loading></Loading>}>
            <LatestMovies latestMoviePromise={latestMoviePromise} ></LatestMovies>
             
             </Suspense>
            <Suspense fallback={<Loading></Loading>}>
            <HighlyRatedMovies highlyRatedMoviePromise={highlyRatedMoviePromise}></HighlyRatedMovies>
            
            </Suspense>
            
            
        </div>
    );
};

export default Home;