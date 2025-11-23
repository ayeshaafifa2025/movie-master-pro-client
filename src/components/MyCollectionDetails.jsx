
import React from 'react';
import { useLoaderData } from 'react-router';
import MyCollectionCard from './MyCollectionCard';
import Container from './Container';

const MyCollectionDetails = () => {
    const findMovie = useLoaderData();
        console.log(findMovie);
    return (
        <Container>
<div className='bg-amber-50'>
           <MyCollectionCard findMovie={findMovie}></MyCollectionCard>
            
        </div>
        </Container>
        
    );
};

export default MyCollectionDetails;