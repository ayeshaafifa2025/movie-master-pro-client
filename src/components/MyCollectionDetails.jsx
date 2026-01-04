
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import MyCollectionCard from './MyCollectionCard';
import Container from './Container';
import { ThemeContext } from '../Layouts/ThemeProvider';

const MyCollectionDetails = () => {
    const { theme } = useContext(ThemeContext);
    const findMovie = useLoaderData();
        console.log(findMovie);
    return (
        <Container>

 <div className={` ${theme === 'light' ? 'bg-gray-100  ' : 'bg-gray-400'}`}>
           <MyCollectionCard findMovie={findMovie}></MyCollectionCard>
            
        </div>
        </Container>
        
    );
};

export default MyCollectionDetails;