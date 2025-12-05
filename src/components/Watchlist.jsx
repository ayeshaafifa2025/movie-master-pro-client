
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Watched from "./Watched";
import Container from "./Container";
import { ThemeContext } from "../Layouts/ThemeProvider";

const Watchlist = () => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const [watchlist, setWatchlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://movie-master-pro-server-six.vercel.app/watched?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setWatchlist(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) return <p>Loading...</p>;

  return (

    <Container>
{/* <div className=""> */}
 <div className={` ${theme === 'light' ? 'bg-blue-400  ' : 'bg-purple-200'}`}>
      <NavBar />
      <menu className="px-10 py-10 ">
        <h1 className="text-3xl text-black text-center font-bold">My Watchlist: {watchlist.length}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {watchlist.map(one => (
            <Watched key={one._id} one={one} />
          ))}
        </div>
      </menu>
      <Footer />
    </div>
    </Container>
    
  );
};

export default Watchlist;





