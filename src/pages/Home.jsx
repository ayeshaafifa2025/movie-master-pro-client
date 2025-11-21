import React from 'react';
import Counter from '../components/Counter';
import { useLoaderData } from 'react-router';
import LatestMovies from '../components/LatestMovies';
import Genre from '../components/Genre';
import HighlyRatedMovies from '../components/HighlyRatedMovies';
 const userCountPromise = fetch("http://localhost:3000/users")
    .then(data=>data.json());

    const latestMoviePromise =fetch("http://localhost:3000/sortedBy-CreateAt/")
    .then(data=>data.json());
    const highlyRatedMoviePromise = fetch("http://localhost:3000/highly-rated")
    .then(data=>data.json());


const Home = () => {
    const data = useLoaderData();
    console.log(data);
   
    
  const allGenres =data.map(movie=>movie.genre);
        const uniqueGenres=[...new Set(allGenres)];
    

    return (
        
        <div>
            <Genre genres={uniqueGenres}></Genre>
            <Counter data={data} userCountPromise={userCountPromise} ></Counter>
            <LatestMovies latestMoviePromise={latestMoviePromise} ></LatestMovies>
            <HighlyRatedMovies highlyRatedMoviePromise={highlyRatedMoviePromise}></HighlyRatedMovies>
        </div>
    );
};

export default Home;