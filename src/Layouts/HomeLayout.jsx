import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import AboutPlatform from '../components/AboutPlatform';
import Hero from '../components/Hero';
import AnimationSection from '../components/AnimationSection';
import Genre from '../components/Genre';
import Container from '../components/Container';






const heroPromise = fetch("https://movie-master-pro-server-six.vercel.app/hero")
.then(data=>data.json());



const HomeLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
        
        <div className="overflow-x-hidden">
             
             <Hero heroPromise={heroPromise}></Hero>
        <Container>
            <div className=''>
    <header>
              
                

            </header>
            <main>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb2">
                    <div className="md:col-span-1">
<aside>
                    
                    <Genre></Genre>
                    
                    
                </aside>
                    </div>
                    <div className="md:col-span-2">
 <AnimationSection></AnimationSection>
                    </div>
 
               
                </div>
               
                
               
            
               
                <Outlet></Outlet>
               
                <AboutPlatform></AboutPlatform>


            </main>
            <footer>
                <Footer></Footer>
            </footer>
</div>

            
        
        </Container>
        </div>
        </div>
        
    );
};

export default HomeLayout;