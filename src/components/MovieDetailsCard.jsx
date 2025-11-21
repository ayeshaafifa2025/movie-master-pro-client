import React from 'react';

const MovieDetailsCard = ({findMovie}) => {
    console.log(findMovie);
    const{cast,country,duration,email,genre,language,plotSummary,posterUrl,rating,releaseYear,title,_id}= findMovie;

    return (
        <div>
             <div className="flex justify-center items-center min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={findMovie.posterUrl}
          alt={findMovie.title}
          className="w-full h-100  "
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            {findMovie.title}
          </h2>
          <p className="text-gray-600 mb-4 text-justify">{findMovie.plotSummary}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 mb-6">
            <p>
              <span className="font-semibold">Genre:</span> {findMovie.genre}
            </p>
            <p>
              <span className="font-semibold">⭐ Rating:</span> {findMovie.rating}
            </p>
            <p>
              <span className="font-semibold">Language :</span>{" "}
              {findMovie.language}
            </p>
            <p>
              <span className="font-semibold"> Country:</span>{" "}
              {findMovie.country}
            </p>
            <p>
              <span className="font-semibold">👤 Casts:</span>{" "}
              {findMovie.cast}
            </p>
            <p>
              <span className="font-semibold">✉️ Added By:</span>{" "}
              {findMovie.email}
            </p>
            <p>
              <span className="font-semibold">Duration:</span>{" "}
              {findMovie.duration}
            </p>
            <p>
              <span className="font-semibold">Release Year:</span>{" "}
              {findMovie.releaseYear}
            </p>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => window.history.back()}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-5 rounded-lg"
            >
              ← Back
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg">
              ADD TO WATCH LIST
            </button>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default MovieDetailsCard;