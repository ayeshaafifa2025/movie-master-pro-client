

import React, { Suspense } from 'react';
import Counter from '../components/Counter';
import { useLoaderData } from 'react-router';
import LatestMovies from '../components/LatestMovies';
import HighlyRatedMovies from '../components/HighlyRatedMovies';
import Loading from './Loading';
import FAQ from '../components/FAQ.jsx'; 
import FeedBacks from '../components/FeedBacks.jsx';
import UpcomingReleases from '../components/UpcomingReleases.jsx';


const userCountPromise = fetch("https://movie-master-pro-server-six.vercel.app/users")
    .then(data=>data.json());

const latestMoviePromise =fetch("https://movie-master-pro-server-six.vercel.app/sortedBy-CreateAt/")
    .then(data=>data.json());
const highlyRatedMoviePromise = fetch("https://movie-master-pro-server-six.vercel.app/highly-rated")
    .then(data=>data.json());


const Home = () => {
    const data = useLoaderData();
    console.log(data);


    return (
        
        <div>
            
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 md:p-8">
                
               
                <div className="lg:col-span-2">
                    <FAQ></FAQ>
                </div>
                
               
                <div className="lg:col-span-1">
                    <Suspense fallback={<Loading></Loading>}>
                        <Counter data={data} userCountPromise={userCountPromise} ></Counter>
                    </Suspense>
                </div>
            </div>
          
          
            <Suspense fallback={<Loading></Loading>}>
                <LatestMovies latestMoviePromise={latestMoviePromise} ></LatestMovies>
            </Suspense>
            
            <Suspense fallback={<Loading></Loading>}>
                <HighlyRatedMovies highlyRatedMoviePromise={highlyRatedMoviePromise}></HighlyRatedMovies>
            </Suspense>
<FeedBacks></FeedBacks>
<UpcomingReleases></UpcomingReleases>
            
        </div>
    );
};

export default Home;