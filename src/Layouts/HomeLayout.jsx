import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import AboutPlatform from '../components/AboutPlatform';
import Hero from '../components/Hero';


const heroPromise = fetch("http://localhost:3000/hero")
.then(data=>data.json());

const HomeLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <NavBar></NavBar>
                </nav>
                <Hero heroPromise={heroPromise}></Hero>

            </header>
            <main>
                
               
            
               
                <Outlet></Outlet>
                <AboutPlatform></AboutPlatform>


            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;