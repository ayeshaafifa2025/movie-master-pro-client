
import React, { use,useEffect, useState } from 'react';

import MovieDetailsCard from './MovieDetailsCard';
import { Link, useLoaderData } from 'react-router';
import NavBar from './NavBar';
import Footer from './Footer';
import { AuthContext } from '../provider/AuthContext';
import Swal from 'sweetalert2';
import Container from './Container';



const MovieDetails = () => {
    const {user}=use(AuthContext);
    // const collectionModalRef = useRef(null);
    const findMovie=useLoaderData();
    const {_id:movieId,title}=useLoaderData();
    console.log(movieId);
    console.log(findMovie);


    // watchlist:
const [isWatched, setIsWatched] = useState(false);
    useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/watched?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            const already = data.find(item => item.movieId === movieId);
            if (already) {
                setIsWatched(true);
            }
        });
}, [user, movieId]);
 const handleWatchlist =()=>{
        if (isWatched) return;

        const newWatched={

            movieId : movieId,
            movie:title,
            
            user:user.displayName,
            email:user.email,
            photo:user.photoURL
        }
        fetch('http://localhost:3000/watched',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newWatched)
        })
        .then(res=>res.json())
        .then(
            data=>{
                console.log('after choosing',data)
                if(data.insertedId
){
    
    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "movie successfully added to watchlist",
  showConfirmButton: false,
  timer: 1500
});
setIsWatched(true);

}
            }
        )

    }



    return (
        <Container>
            <div className='bg-amber-50'>
            <NavBar></NavBar>

            <main>

                     <MovieDetailsCard findMovie={findMovie}></MovieDetailsCard>
                    
                
            </main>
             <div className=' flex justify-between items-center px-20 '>
                        <button disabled={isWatched} onClick={handleWatchlist}  className="btn btn-primary text-white">
             {isWatched ? "Already in Watchlist" : "Add to Watchlist"}
            </button>

            <button  className='btn btn-primary text-white'>
    <Link to={"/watched"}>
    Go To Your watchlist

    </Link>
                           
                        </button>
                     </div>
            <Footer></Footer>
            
        </div>

        </Container>
        
    );
};

export default MovieDetails;


