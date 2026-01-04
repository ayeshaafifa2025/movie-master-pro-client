import React from "react";

const FeedBackCard = ({ feedback }) => {
  const { userName, testimonial, user_photoURL } = feedback;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200 flex flex-col items-center text-center hover:scale-105 transform transition h-full">
      <div className="w-16 h-16 mb-4">
        <img
          src={user_photoURL}
          alt={userName}
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      <p className="text-gray-700 mb-4 italic flex-grow">"{testimonial}"</p>

      <h3 className="text-lg font-semibold text-gray-900">{userName}</h3>
      <p className="text-sm text-gray-500">Verified Viewer</p>
    </div>
  );
};

export default FeedBackCard;