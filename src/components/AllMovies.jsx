
import React, { useState, useEffect } from 'react';

import Movie from './Movie';
import NavBar from './NavBar';
import Footer from './Footer';
import { useLoaderData } from 'react-router';
import Container from './Container';

const AllMovies = () => {
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
<div className='bg-pink-100'>
            <NavBar />
            <div className='p-4'>
                <label className="mr-4">
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
                    <select value={ratingRange} onChange={(e) => setRatingRange(e.target.value)} className="border p-2 ml-2">
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

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
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




















