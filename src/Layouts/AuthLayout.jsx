import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Container from '../components/Container';

const AuthLayout = () => {
    return (

        <Container>
  <div className=''>
             <div>
            <header>
                
                <NavBar></NavBar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
            
        </div>
        </Container>
       
    );
       
};

export default AuthLayout;