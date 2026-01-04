
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Layouts/ThemeProvider";

const Genre = () => {
  const [genres, setGenres] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://movie-master-pro-server-six.vercel.app/movies")
      .then(res => res.json())
      .then(data => {
        
        const allGenres = data.map(movie => movie.genre);

     
        const uniqueGenres = [...new Set(allGenres)];

     
        setGenres(uniqueGenres);
      });
  }, []);

  return (
  
    <div className={`text-black mb-2 rounded-xl ${theme === 'light' ? 'bg-gray-100  ' : 'bg-gray-400'}`}>
        <aside>
<div style={{ padding: "20px", textAlign: "center" }}>
      <h1 className="text-3xl text-black font-bold mb-5">Our Movie Categories</h1>
<div  >
{genres.map((genre, index) => (
        <p key={index} className="mb-1">
          {index + 1}. {genre}
        </p>
      ))}
</div>
      
    </div>
        </aside>
    </div>
    
  );
};

export default Genre;




