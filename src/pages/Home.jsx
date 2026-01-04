// import React, { Suspense } from 'react';
// import Counter from '../components/Counter';
// import { useLoaderData } from 'react-router';
// import LatestMovies from '../components/LatestMovies';
// import HighlyRatedMovies from '../components/HighlyRatedMovies';
// import Loading from './Loading';
// import FAQ from '../components/FAQ.JSX';

//  const userCountPromise = fetch("https://movie-master-pro-server-six.vercel.app/users")
//     .then(data=>data.json());

//     const latestMoviePromise =fetch("https://movie-master-pro-server-six.vercel.app/sortedBy-CreateAt/")
//     .then(data=>data.json());
//     const highlyRatedMoviePromise = fetch("https://movie-master-pro-server-six.vercel.app/highly-rated")
//     .then(data=>data.json());


// const Home = () => {
//     const data = useLoaderData();
//     console.log(data);


//     return (
        
//         <div>
            

//            <div className='flex justify-between items-center'>
//             <FAQ></FAQ>
//               <Suspense fallback={<Loading></Loading>}>
//                 <Counter data={data} userCountPromise={userCountPromise} ></Counter>
//             </Suspense>

//            </div>
          
//             <Suspense fallback={<Loading></Loading>}>
//             <LatestMovies latestMoviePromise={latestMoviePromise} ></LatestMovies>
             
//              </Suspense>
//             <Suspense fallback={<Loading></Loading>}>
//             <HighlyRatedMovies highlyRatedMoviePromise={highlyRatedMoviePromise}></HighlyRatedMovies>
            
//             </Suspense>
            

            
            
//         </div>
//     );
// };

// export default Home;



import React, { Suspense } from 'react';
import Counter from '../components/Counter';
import { useLoaderData } from 'react-router';
import LatestMovies from '../components/LatestMovies';
import HighlyRatedMovies from '../components/HighlyRatedMovies';
import Loading from './Loading';
import FAQ from '../components/FAQ.jsx'; // ⚠️ ফাইল এক্সটেনশন ঠিক করা হয়েছে
import FeedBacks from '../components/FeedBacks.jsx';
import UpcomingReleases from '../components/UpcomingReleases.jsx';

// Data Fetching Promises (আগের মতোই থাকবে)
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
            
            {/* ⚠️ নতুন গ্রিড লেআউট: মোবাইল ওপরে-নিচে, MD/LG তে 2/3 এবং 1/3 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 md:p-8">
                
                {/* FAQ সেকশন: MD/LG তে 3 ভাগের 2 ভাগ (col-span-2) */}
                <div className="lg:col-span-2">
                    <FAQ></FAQ>
                </div>
                
                {/* Counter সেকশন: MD/LG তে 3 ভাগের 1 ভাগ (col-span-1) */}
                <div className="lg:col-span-1">
                    <Suspense fallback={<Loading></Loading>}>
                        <Counter data={data} userCountPromise={userCountPromise} ></Counter>
                    </Suspense>
                </div>
            </div>
          
            {/* নিচের সেকশনগুলো গ্রিডের বাইরে থাকবে */}
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