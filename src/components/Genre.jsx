import React from 'react';

const Genre = ({genres}) => {

    return (
         <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1 className='text-2xl font-bold mb-4'>Our Movie Categories</h1>
            {genres.map((genre, index) => (
                <p key={index} className='mb-1'>
                    {index + 1}. {genre}
                </p>
            ))}
        </div>
    );
};

export default Genre;