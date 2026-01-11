
import React, { useContext, useEffect, useState } from 'react';
import MovieDetailsCard from './MovieDetailsCard';
import { useLoaderData, useNavigate, useLocation, Link } from 'react-router';
import NavBar from './NavBar';
// import Footer from './Footer';
import { AuthContext } from '../provider/AuthContext';
import Swal from 'sweetalert2';
import Container from './Container';
import { ThemeContext } from '../Layouts/ThemeProvider';

const MovieDetails = () => {
    const { theme } = useContext(ThemeContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const findMovie = useLoaderData();
    const { _id: movieId, title } = useLoaderData();

    const [isWatched, setIsWatched] = useState(false);

   
    useEffect(() => {
        if (!user?.email) return;
        fetch(`https://movie-master-pro-server-six.vercel.app/watched?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                const already = data.find(item => item.movieId === movieId);
                if (already) setIsWatched(true);
            });
    }, [user, movieId]);

    
    useEffect(() => {
        if (
            user?.email &&
            location.state?.addToWatchlist &&
            location.state?.movieId === movieId
        ) {
           
            fetch(`https://movie-master-pro-server-six.vercel.app/watched?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    const already = data.find(item => item.movieId === movieId);
                    if (!already) handleWatchlist(true); // auto add without re-redirect
                    setIsWatched(already ? true : false);
                    navigate(location.pathname, { replace: true, state: {} });
                });
        }
    }, [user]);

    const handleWatchlist = (skipRedirect = false) => {
        if (!user?.email) {
         
            navigate("/auth/login", {
                state: { from: location.pathname, addToWatchlist: true, movieId },
            });
            return;
        }

        if (isWatched) return;

        const newWatched = {
            movieId,
            movie: title,
            user: user.displayName,
            email: user.email,
            photo: user.photoURL,
        };

        fetch('https://movie-master-pro-server-six.vercel.app/watched', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newWatched)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Movie successfully added to watchlist",
                    showConfirmButton: false,
                    timer: 1500
                });
                setIsWatched(true);
                if (!skipRedirect) navigate("/dashboard/watched"); 
            }
        });
    };

    return (
        <Container>
         
             <div className={`mb-10 px-10 py-10 ${theme === "light" ? "bg-gray-100" : "bg-gray-400"}`}>
                <NavBar />
                <main>
                    <MovieDetailsCard findMovie={findMovie} />
                </main>

                <div className='flex justify-between items-center px-20 mt-4'>
                    <button
                        disabled={isWatched}
                        onClick={() => handleWatchlist()}
                        className="btn btn-primary text-white"
                    >
                        {isWatched ? "Already in Watchlist" : "Add to Watchlist"}
                    </button>

                    {user && (
                        <Link to={"/dashboard/watched"} className='btn btn-primary'>GO TO YOUR WATCHLIST</Link>
                    )}
                </div>

                {/* <Footer /> */}
            </div>
        </Container>
    );
};

export default MovieDetails;











