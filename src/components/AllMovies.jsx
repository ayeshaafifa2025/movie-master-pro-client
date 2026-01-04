
import React, { useState, useEffect, useContext } from 'react';

import Movie from './Movie';
import NavBar from './NavBar';
import Footer from './Footer';
import { useLoaderData } from 'react-router';
import Container from './Container';
import { ThemeContext } from '../Layouts/ThemeProvider';

const AllMovies = () => {
    const { theme } = useContext(ThemeContext);
    const initialData = useLoaderData(); 
    
    const [movies, setMovies] = useState(initialData);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [ratingRange, setRatingRange] = useState('');
    useEffect(() => {
        filterMovies();
    }, [initialData, selectedGenre, ratingRange]);

    const filterMovies = () => {
        let filtered = initialData;

        if (selectedGenre) {
            filtered = filtered.filter(movie => movie.genre === selectedGenre);
        }

        if (ratingRange) {
             const [min, max] = ratingRange.split('-').map(Number);
            
            filtered = filtered.filter(movie => {
                return movie.rating >= min && movie.rating <= max;
            });
        }
        setMovies(filtered);
    };
    return (

        <Container>

 <div className={` ${theme === 'light' ? 'bg-gray-100  ' : 'bg-gray-400'}`}>
            <NavBar />
            <div className='p-4 flex justify-between items-center'>
                <label className="mr-4 text-black">
                    <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} className="border p-2 ml-2">
                        <option value="">ALL</option>
                        <option value="Historical">Historical</option>
                        <option value="War">War</option>
                        <option value="Biography">Biography</option>
                        <option value="Scientific">Scientific</option>
                        <option value="Religious">Religious</option>
                        <option value="Drama">Drama</option>
                        <option value="Horror">Horror</option>
                        <option value="Detective">Detective</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Psychological Thriller">Psychological Thriller</option>
                        <option value="Romantic Comedy">Romantic Comedy</option>
                        
                        
                    </select>
                </label>
                
                <label>
                    <select value={ratingRange} onChange={(e) => setRatingRange(e.target.value)} className="border text-black p-2 ml-2"> 
                        <option value="">All</option>
                         <option value="4-5">4-5</option>
                        <option value="5-6">5-6</option>
                        <option value="6-7">6-7</option>
                        <option value="7-8">7-8</option>
                        <option value="8-9">8-9</option>
                        <option value="9-10">9-10</option>
                        
                    </select>
                </label>
            </div>

            {/* <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6
              px-10 py-10 rounded-xl mx-auto gap-8
             '>
                {
                    movies.map(movie => <Movie key={movie._id} movie={movie} />)
                }
            </div> */}
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6
             px-4 py-8 rounded-xl mx-auto gap-4 md:gap-6
             '>
    {
        movies.map(movie => <Movie key={movie._id} movie={movie} />)
    }
</div>
            <Footer />
        </div>
        </Container>
        
    );
};

export default AllMovies;


                
//               import React, { useState, useEffect, useContext } from 'react';

// import Movie from './Movie';
// import NavBar from './NavBar';
// import Footer from './Footer';
// import { useLoaderData } from 'react-router';
// import Container from './Container';
// import { ThemeContext } from '../Layouts/ThemeProvider';
// // ⚠️ axios বাদ দেওয়া হলো

// const AllMovies = () => {
//     const { theme } = useContext(ThemeContext);
//     const initialData = useLoaderData(); 
    
//     // initialData শুধু প্রথমবার ব্যবহৃত হবে
    
//     const [movies, setMovies] = useState(initialData);
//     const [selectedGenre, setSelectedGenre] = useState('');
//     const [ratingRange, setRatingRange] = useState('');
//     const [searchTerm, setSearchTerm] = useState('');
//     const [loading, setLoading] = useState(false);
    
//     // ⚠️ useEffect: ফিল্টার বা সার্চ টার্ম পরিবর্তন হলে নতুন মুভি লোড করা হবে
//     useEffect(() => {
//         const fetchFilteredMovies = async () => {
//             setLoading(true);
            
//             // প্যারামিটার তৈরি করা হচ্ছে
//             const [minRating, maxRating] = ratingRange ? ratingRange.split('-').map(Number) : [null, null];
            
//             // URLSearchParams ব্যবহার করে query string তৈরি
//             const params = new URLSearchParams();
//             if (searchTerm) params.append('search', searchTerm);
//             if (selectedGenre) params.append('genre', selectedGenre);
//             if (minRating !== null) params.append('minRange', minRating);
//             if (maxRating !== null) params.append('maxRange', maxRating);
            
//             const url = `https://movie-master-pro-server-six.vercel.app/movies?${params.toString()}`;
            
//             try {
//                 const response = await fetch(url);
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setMovies(data);
//             } catch (error) {
//                 console.error("Error fetching filtered movies:", error);
//                 setMovies([]);
//             } finally {
//                 setLoading(false);
//             }
//         };
        
//         fetchFilteredMovies();
        
//     }, [selectedGenre, ratingRange, searchTerm]);

//     return (

//         <Container>

//             <div className={` ${theme === 'light' ? 'bg-gray-100  ' : 'bg-gray-400'}`}>
//                 <NavBar />
                
//                 <div className='p-4 flex flex-col md:flex-row justify-between items-center'>
                    
//                     {/* ⚠️ সার্চ ইনপুট */}
//                     <div className="mb-4 md:mb-0 w-full md:w-1/3">
//                         <input
//                             type="text"
//                             placeholder="Search by title..."
//                             value={searchTerm}
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             className="w-full border p-2 rounded-lg text-black focus:ring-primary focus:border-primary"
//                         />
//                     </div>
                    
//                     {/* ⚠️ জেনর ফিল্টার */}
//                     <label className="mr-4 text-black flex items-center mb-2 md:mb-0">
//                         <span className="font-semibold mr-2">Genre:</span>
//                         <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} className="border p-2 rounded-lg">
//                             <option value="">ALL</option>
//                             <option value="Historical">Historical</option>
//                             <option value="War">War</option>
//                             <option value="Biography">Biography</option>
//                             <option value="Scientific">Scientific</option>
//                             <option value="Religious">Religious</option>
//                             <option value="Drama">Drama</option>
//                             <option value="Horror">Horror</option>
//                             <option value="Detective">Detective</option>
//                             <option value="Thriller">Thriller</option>
//                             <option value="Mystery">Mystery</option>
//                             <option value="Adventure">Adventure</option>
//                             <option value="Science Fiction">Science Fiction</option>
//                             <option value="Psychological Thriller">Psychological Thriller</option>
//                             <option value="Romantic Comedy">Romantic Comedy</option>
//                         </select>
//                     </label>
                    
//                     {/* ⚠️ রেটিং ফিল্টার */}
//                     <label className='flex items-center text-black'>
//                          <span className="font-semibold mr-2">Rating:</span>
//                         <select value={ratingRange} onChange={(e) => setRatingRange(e.target.value)} className="border p-2 rounded-lg">
//                             <option value="">All</option>
//                             <option value="4-5">4-5</option>
//                             <option value="5-6">5-6</option>
//                             <option value="6-7">6-7</option>
//                             <option value="7-8">7-8</option>
//                             <option value="8-9">8-9</option>
//                             <option value="9-10">9-10</option>
//                         </select>
//                     </label>
//                 </div>

//                 {loading ? (
//                     <div className="flex justify-center items-center h-48">
//                         <span className="loading loading-spinner loading-lg text-primary"></span>
//                     </div>
//                 ) : (
//                     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6
//                          gap-4 md:gap-6 px-4 py-8 mx-auto justify-items-center
//                          '>
//                         {movies.length > 0 ? (
//                             movies.map(movie => <Movie key={movie._id} movie={movie} />)
//                         ) : (
//                              <div className="md:col-span-6 text-center py-10 text-xl font-semibold text-gray-500">
//                                 No movies found matching the criteria.
//                             </div>
//                         )}
//                     </div>
//                 )}
//                 <Footer />
//             </div>
//         </Container>
//     );
// };

// export default AllMovies;


// import React, { useState, useEffect, useContext } from 'react';

// import Movie from './Movie';
// import NavBar from './NavBar';
// import Footer from './Footer';
// import { useLoaderData } from 'react-router';
// import Container from './Container';
// import { ThemeContext } from '../Layouts/ThemeProvider';

// // ⚠️ ডিবাউন্স ফাংশন (সাধারণত বাইরে রাখা হয়)
// const useDebounce = (value, delay) => {
//     const [debouncedValue, setDebouncedValue] = useState(value);
    
//     useEffect(() => {
//         const handler = setTimeout(() => {
//             setDebouncedValue(value);
//         }, delay);
        
//         return () => {
//             clearTimeout(handler);
//         };
//     }, [value, delay]);
    
//     return debouncedValue;
// };


// const AllMovies = () => {
//     const { theme } = useContext(ThemeContext);
//     const initialData = useLoaderData(); 
    
//     const [movies, setMovies] = useState(initialData);
//     const [selectedGenre, setSelectedGenre] = useState('');
//     const [ratingRange, setRatingRange] = useState('');
//     const [searchTerm, setSearchTerm] = useState('');
//     const [loading, setLoading] = useState(false);
    
//     // ⚠️ ডিবাউন্সড সার্চ টার্ম ব্যবহার
//     const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms ডিলে
    
    
//     useEffect(() => {
//         const fetchFilteredMovies = async () => {
//             setLoading(true);
            
//             // প্যারামিটার তৈরি করা হচ্ছে
//             const [minRating, maxRating] = ratingRange ? ratingRange.split('-').map(Number) : [null, null];
            
//             // URLSearchParams ব্যবহার করে query string তৈরি
//             const params = new URLSearchParams();
//             // ⚠️ debouncedSearchTerm ব্যবহার করা হচ্ছে
//             if (debouncedSearchTerm) params.append('search', debouncedSearchTerm);
//             if (selectedGenre) params.append('genre', selectedGenre);
//             if (minRating !== null) params.append('minRange', minRating);
//             if (maxRating !== null) params.append('maxRange', maxRating);
            
//             const url = `https://movie-master-pro-server-six.vercel.app/movies?${params.toString()}`;
            
//             try {
//                 const response = await fetch(url);
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setMovies(data);
//             } catch (error) {
//                 console.error("Error fetching filtered movies:", error);
//                 setMovies([]);
//             } finally {
//                 setLoading(false);
//             }
//         };
        
//         // ⚠️ API কল শুরু
//         fetchFilteredMovies();
        
//     }, [selectedGenre, ratingRange, debouncedSearchTerm]); // ⚠️ debouncedSearchTerm ডিপেন্ডেন্সিতে যোগ করা হলো

//     return (

//         <Container>

//             <div className={` ${theme === 'light' ? 'bg-gray-100  ' : 'bg-gray-400'}`}>
//                 <NavBar />
                
//                 <div className='p-4 flex flex-col md:flex-row justify-between items-center'>
                    
//                     {/* ⚠️ সার্চ ইনপুট */}
//                     <div className="mb-4 md:mb-0 w-full md:w-1/3">
//                         <input
//                             type="text"
//                             placeholder="Search by title..."
//                             value={searchTerm}
//                             // ⚠️ এখানে searchTerm আপডেট হবে, debouncedSearchTerm নয়
//                             onChange={(e) => setSearchTerm(e.target.value)}
//                             className="w-full border p-2 rounded-lg text-black focus:ring-primary focus:border-primary"
//                         />
//                     </div>
                    
//                     {/* ⚠️ জেনর ফিল্টার */}
//                     <label className="mr-4 text-black flex items-center mb-2 md:mb-0">
//                         <span className="font-semibold mr-2">Genre:</span>
//                         <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} className="border p-2 rounded-lg">
//                             <option value="">ALL</option>
//                             <option value="Historical">Historical</option>
//                             <option value="War">War</option>
//                             <option value="Biography">Biography</option>
//                             <option value="Scientific">Scientific</option>
//                             <option value="Religious">Religious</option>
//                             <option value="Drama">Drama</option>
//                             <option value="Horror">Horror</option>
//                             <option value="Detective">Detective</option>
//                             <option value="Thriller">Thriller</option>
//                             <option value="Mystery">Mystery</option>
//                             <option value="Adventure">Adventure</option>
//                             <option value="Science Fiction">Science Fiction</option>
//                             <option value="Psychological Thriller">Psychological Thriller</option>
//                             <option value="Romantic Comedy">Romantic Comedy</option>
//                         </select>
//                     </label>
                    
//                     {/* ⚠️ রেটিং ফিল্টার */}
//                     <label className='flex items-center text-black'>
//                          <span className="font-semibold mr-2">Rating:</span>
//                         <select value={ratingRange} onChange={(e) => setRatingRange(e.target.value)} className="border p-2 rounded-lg">
//                             <option value="">All</option>
//                             <option value="4-5">4-5</option>
//                             <option value="5-6">5-6</option>
//                             <option value="6-7">6-7</option>
//                             <option value="7-8">7-8</option>
//                             <option value="8-9">8-9</option>
//                             <option value="9-10">9-10</option>
//                         </select>
//                     </label>
//                 </div>

//                 {loading ? (
//                     <div className="flex justify-center items-center h-48">
//                         <span className="loading loading-spinner loading-lg text-primary"></span>
//                     </div>
//                 ) : (
//                     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6
//                          gap-4 md:gap-6 px-4 py-8 mx-auto justify-items-center
//                          '>
//                         {movies.length > 0 ? (
//                             movies.map(movie => <Movie key={movie._id} movie={movie} />)
//                         ) : (
//                              <div className="md:col-span-6 text-center py-10 text-xl font-semibold text-gray-500">
//                                 No movies found matching the criteria.
//                             </div>
//                         )}
//                     </div>
//                 )}
//                 <Footer />
//             </div>
//         </Container>
//     );
// };

// export default AllMovies;
















