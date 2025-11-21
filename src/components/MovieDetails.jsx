import React from 'react';

import MovieDetailsCard from './MovieDetailsCard';
import { useLoaderData } from 'react-router';
import NavBar from './NavBar';
import Footer from './Footer';


const MovieDetails = () => {
    
    const findMovie=useLoaderData();
    console.log(findMovie);
    
    
   
    return (
        <div>
            <NavBar></NavBar>
            <main>

                
                     
                     <MovieDetailsCard findMovie={findMovie}></MovieDetailsCard>
                     

                
            </main>
            <Footer></Footer>
            
        </div>
    );
};

export default MovieDetails;