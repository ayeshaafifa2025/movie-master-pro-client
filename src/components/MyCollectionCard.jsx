import React from 'react';
import Swal from 'sweetalert2';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router';

const MyCollectionCard = ({findMovie}) => {
    const {cast,country,duration,email,genre,language,plotSummary,posterUrl,rating,releaseYear,title,director_id,createdAt} = findMovie;

    return (

<div>
  <NavBar></NavBar>

    <div>
<div className="flex justify-center items-center min-h-screen  ">
      <div className="max-w-3xl bg-white rounded-2xl shadow-xl py-10 px-10 overflow-hidden border border-gray-200">

        <img
          src={findMovie.posterUrl}
          alt={findMovie.title}
          className="w-full h-100 rounded-4xl"
        />

        <div className="p-6">
        
          <h2 className="text-4xl font-bold text-black mb-6 text-center">
            Movie Name :  
            {findMovie.title}
          </h2>

        
          <p className="text-gray-700 mb-6 leading-relaxed font-bold text-justify">Movie Story :  
            {findMovie.plotSummary}
          </p>

          
          <div className="overflow-x-auto rounded-xl border shadow-sm">
            <table className="w-full border-collapse">
              <tbody>

                <tr className="border-b">
                  <th className="bg-gray-500 p-3 text-left w-40 font-semibold">Genre</th>
                  <td className="p-3 bg-gray-400">{findMovie.genre}</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-gray-500 p-3 text-left w-40 font-semibold">createdAt</th>
                  <td className="p-3 bg-gray-400">{findMovie.createdAt}</td>
                </tr>

                <tr className="border-b">
                  <th className="bg-gray-500 p-3 text-left font-semibold">Rating</th>
                  <td className="p-3 bg-gray-400">{findMovie.rating}</td>
                </tr>

                <tr className="border-b">
                  <th className="bg-gray-500 p-3 text-left font-semibold">Language</th>
                  <td className="p-3 bg-gray-400">{findMovie.language}</td>
                </tr>
                <tr className="border-b">
                  <th className="bg-gray-500 p-3 text-left font-semibold">Director</th>
                  <td className="p-3 bg-gray-400">{findMovie.director}</td>
                </tr>
    
                <tr className="border-b">
                  <th className="bg-gray-500 p-3 text-left font-semibold">Country</th>
                  <td className="p-3 bg-gray-400">{findMovie.country}</td>
                </tr>

                <tr className="border-b">
                  <th className="bg-gray-500 p-3 text-left font-semibold">Cast</th>
                  <td className="p-3 bg-gray-400">{findMovie.cast}</td>
                </tr>

                <tr className="border-b">
                  <th className="bg-gray-500 p-3 text-left font-semibold">Added By</th>
                  <td className="p-3 bg-gray-400">{findMovie.email}</td>
                </tr>

                <tr className="border-b">
                  <th className="bg-gray-500 p-3 text-left font-semibold">Duration</th>
                  <td className="p-3 bg-gray-400">{findMovie.duration} min</td>
                </tr>

                <tr>
                  <th className="bg-gray-500 p-3 text-left font-semibold">Release Year</th>
                  <td className="p-3 bg-gray-400">{findMovie.releaseYear}</td>
                </tr>

              </tbody>
            </table>
          </div>

       
          <div className="flex justify-evenly items-center mt-6">
           
            <button  className='btn btn-primary'><Link to={`/update/${findMovie._id}`} >update this movie</Link></button>
       
          </div>
        </div>

      </div>
    </div>



   </div>

   <Footer></Footer>

</div>

 
            
        
    );
};

export default MyCollectionCard;