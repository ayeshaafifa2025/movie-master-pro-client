import React, { useContext } from 'react';
// import Container from '../Container';
import { ThemeContext } from '../Layouts/ThemeProvider';


const upcomingMoviesData = [
    {
        _id: 'upc1',
        title: 'RAMAYANA',
        genre: 'Religious',
        release_date: 'April 2026',
        poster: 'https://assets.gadgets360cdn.com/pricee/assets/product/202412/Ramayana_Part_1_Poster_1_1734431855.jpg',
    },
    {
        _id: 'upc2',
        title: 'The ODYSSEY',
        genre: 'Mystery, Thriller',
        release_date: 'May 2026',
        poster: 'https://sahinduzgun.com/wp-content/uploads/2025/02/03-4.jpg', 
    },
    {
        _id: 'upc3',
        title: 'DIVORCE ME',
        genre: 'Drama',
        release_date: 'June 2026',
        poster: 'https://am-mediaa.com/wp-content/uploads/2025/12/Tallaani-Movie-768x960.webp', 
    },
    {
        _id: 'upc4',
        title: 'The voice of Hind Rajab',
        genre: 'War',
        release_date: 'July 2026', 
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnn5XGUTuIyLhxXwMgqYlDvDDGVm0YiBJ89g&s',
    },
    {
        _id: 'upc5',
        title: 'HUMRAHI',
        genre: 'Romance',
        release_date: 'August 2026',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QEvC1W8a3aT4cgXUSgykylwWinyDc7Zgmg&s', 
    },
    {
        _id: 'upc6',
        title: 'BORDER 2',
        genre: 'War, Action',
        release_date: 'JANUARY 2026',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJzOMzi4eEST9gFUKr_k0SciFNfWtyiH-Vg&s', 
    },]


const UpcomingMovieCard = ({ movie }) => {

    return (
        <div className="rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-[1.02] bg-white dark:bg-gray-700">
            <img src={movie.poster} alt={movie.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white truncate">{movie.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{movie.genre}</p>
                <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mt-2">
                    Releasing: {movie.release_date}
                </p>
              
            </div>
        </div>
    );
};

const UpcomingReleases = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`py-16 mb-2 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-400'}`}>
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