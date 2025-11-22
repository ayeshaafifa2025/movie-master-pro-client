import React from 'react';
import { useLoaderData } from 'react-router';
import MySingle from './MySingle';

const MyCollection = () => {
    const my = useLoaderData();
    console.log(my);
    return (
        <div>
            <h1>My Total:{my.length}</h1>
            <div >
            {
                my.map(single=><MySingle single={single}></MySingle>)
            }
            </div>
            
        </div>
    );
};

export default MyCollection;