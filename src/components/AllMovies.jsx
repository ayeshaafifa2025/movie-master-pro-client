import React  from 'react';
import {  useLoaderData } from 'react-router';
import Movie from './Movie';
import NavBar from './NavBar';
import Footer from './Footer';


const AllMovies = () => {
    const data= useLoaderData();
    console.log(data);

      

    return (
        <div>
            <NavBar></NavBar>

            



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