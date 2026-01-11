import React from 'react';

import { Outlet } from 'react-router';
import NavBar from './NavBar';
// import Footer from './Footer';
import Container from './Container';



const QuickLinks = () => {
    return (
        <Container>
<div>
            
            <NavBar></NavBar>
            <main>
                <Outlet></Outlet>

            </main>
            
            {/* <Footer></Footer> */}
        </div>

        </Container>
              
       
      
    );
};

export default QuickLinks;