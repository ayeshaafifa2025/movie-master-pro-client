import React, { useContext } from 'react';
// import Container from '../Container';
import { ThemeContext } from '../Layouts/ThemeProvider';

// ডেমো ডেটা: আপকামিং মুভির তথ্য 
const upcomingMoviesData = [
    {
        _id: 'upc1',
        title: 'Echoes of Time',
        genre: 'Science Fiction',
        release_date: 'April 2026',
        poster: 'https://m.media-amazon.com/images/M/MV5BYjIzNTE5ZjktYTgxNS00OTRkLWE4NjYtYTVhMDJjYjQxNjhhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', // কাল্পনিক পোস্টার URL
    },
    {
        _id: 'upc2',
        title: 'The Silent Witness',
        genre: 'Mystery, Thriller',
        release_date: 'May 2026',
        poster: 'https://m.media-amazon.com/images/M/MV5BNDFlOTgxNmYtNGRiNy00NzIxLTg0YTItOGUzZmZmNGJkMjYwXkEyXkFqcGc@._V1_.jpg', // কাল্পনিক পোস্টার URL
    },
    {
        _id: 'upc3',
        title: 'Desert Wind',
        genre: 'Adventure, Drama',
        release_date: 'June 2026',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjAzNTA0MzEwOV5BMl5BanBnXkFtZTYwMzA2Mjc5._V1_.jpg', // কাল্পনিক পোস্টার URL
    },
    {
        _id: 'upc4',
        title: 'City of Shadows',
        genre: 'Detective',
        release_date: 'July 2026',
        poster: 'https://m.media-amazon.com/images/M/MV5BNjQ1OTFkNWQtMGM3Zi00MmY1LTlmNDUtMDg0OGZmOTlkNmJjXkEyXkFqcGc@._V1_.jpg', // কাল্পনিক পোস্টার URL
    },
    {
        _id: 'upc5',
        title: 'Royal Deceit',
        genre: 'Historical',
        release_date: 'August 2026',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjE0ODk5Mjc2Nl5BMl5BanBnXkFtZTcwNDE2ODUxMQ@@._V1_.jpg', // কাল্পনিক পোস্টার URL
    },
    {
        _id: 'upc6',
        title: 'Zero Hour',
        genre: 'War, Action',
        release_date: 'September 2026',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXQWYcOsGX0ui0kmi-cYtW94W0p5bkgOMfw&s', // কাল্পনিক পোস্টার URL
    },]

// মুভি কার্ডের জন্য ডামি কম্পোনেন্ট (আপনার আসল Movie কম্পোনেন্টের অনুরূপ হতে পারে)
const UpcomingMovieCard = ({ movie }) => {
    // এখানে আপনার Movie কম্পোনেন্টের মতো ডিজাইন ব্যবহার করুন,
    // তবে শুধু প্রয়োজনীয় তথ্য (টাইটেল, জেনর, রিলিজ ডেট) দেখানো উচিত।
    return (
        <div className="rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-[1.02] bg-white dark:bg-gray-700">
            <img src={movie.poster} alt={movie.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white truncate">{movie.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{movie.genre}</p>
                <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mt-2">
                    Releasing: {movie.release_date}
                </p>
                {/* ডিটেইলস বাটনটি প্রয়োজন নাও হতে পারে, কারণ মুভিটি এখনো রিলিজ হয়নি */}
            </div>
        </div>
    );
};

const UpcomingReleases = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`py-16 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'}`}>
            {/* <Container> */}
                <h2 className={`text-3xl font-extrabold text-center mb-10 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    🎬 Coming Soon to FilmFusion Pro
                </h2>
                <p className={`text-center mb-12 text-lg ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                    Get ready for these exciting upcoming titles!
                </p>

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4'>
                    {upcomingMoviesData.map(movie => (
                        <UpcomingMovieCard key={movie._id} movie={movie} />
                    ))}
                </div>
            {/* </Container> */}
        </section>
    );
};

export default UpcomingReleases;