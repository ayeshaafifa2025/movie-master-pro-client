

import React, { useEffect, useState } from "react";

const Genre = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then(res => res.json())
      .then(data => {
        
        const allGenres = data.map(movie => movie.genre);

     
        const uniqueGenres = [...new Set(allGenres)];

     
        setGenres(uniqueGenres);
      });
  }, []);

  return (
    <div className="bg-purple-800 text-white rounded-xl">
        <aside>
<div style={{ padding: "20px", textAlign: "center" }}>
      <h1 className="text-3xl font-bold mb-5">Our Movie Categories</h1>
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




