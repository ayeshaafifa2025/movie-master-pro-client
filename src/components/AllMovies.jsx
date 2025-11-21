import React  from 'react';
import {  useLoaderData } from 'react-router';
import Movie from './Movie';
import NavBar from './NavBar';
import Footer from './Footer';
import Genre from './Genre';

const AllMovies = () => {
    const data= useLoaderData();
    console.log(data);

      const allGenres =data.map(movie=>movie.genre);
        const uniqueGenres=[...new Set(allGenres)];

    return (
        <div>
            <NavBar></NavBar>

            <Genre genres={uniqueGenres}></Genre>



             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
            
                {
                    data.map(movie=><Movie movie={movie}></Movie>)

                    
                }
                
               
          
        </div>
         <Footer></Footer>
            
        </div>
    );
};

export default AllMovies;