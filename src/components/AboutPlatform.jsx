import React from 'react';

const AboutPlatform = () => {
    return (
        <div className="p-6  mt-10 mb-10 mx-auto rounded-2xl bg-purple-400">
            <h1 className="text-3xl font-bold mb-5 text-center">About This Platform</h1>

            <div className=' grid grid-cols-1 md:grid-cols-2 gap-20   justify-between items-center'>
            <div className="w-full  mb-6">
                <img
                    src="https://moviesmedia.ign.com/movies/image/article/121/1216165/9-tron-legacy_1326253207.jpg" 
                    alt="Platform Banner"
                    className="w-full h-80 mb-10 object-cover rounded-xl shadow-md"
                />
                <img
                    src="https://webneel.com/wnet/file/images/11-16/3-jungle-book-movie-poster-design.jpg" 
                    alt="Platform Banner"
                    className="w-full h-80 object-cover rounded-xl shadow-md"
                />
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-5">Platform Features</h2>

            <p className="text-lg leading-relaxed font-semibold mb-5">
                Welcome to our Movie MasterPro platform — a modern and user-friendly movie collection system 
                built to provide clean, accurate, and halal-friendly movie information. The platform is designed 
                for smooth browsing and simple management of personal movie collections.
            </p>
            <ul className="list-disc pl-6 space-y-2 font-semibold text-lg">
                <li>Browse a wide collection of Islamic, historical, and family-friendly movies.</li>
                <li>View complete movie details including cast, genre, rating, and plot summary.</li>
                <li>Add movies to your personal collection or favorites list.</li>
                <li>Search movies quickly using the global search bar.</li>
                <li>Secure user authentication with Login & Register system.</li>
                <li>Beautiful, clean UI designed for smooth navigation.</li>
                <li>Mobile responsive layout for all device sizes.</li>
            </ul>

            <p className="text-lg leading-relaxed mt-4 font-semibold">
                We built this platform with the goal of helping users find meaningful films while enjoying a 
                clean and distraction-free browsing experience.
            </p>
            </div>
            </div>
        </div>
    );
};

export default AboutPlatform;
