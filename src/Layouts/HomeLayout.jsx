import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';



const HomeLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main>
            
               
                <Outlet></Outlet>


            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;