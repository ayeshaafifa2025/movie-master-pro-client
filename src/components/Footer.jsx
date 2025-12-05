import React, { useContext } from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';
import { NavLink } from 'react-router';
import { ThemeContext } from '../Layouts/ThemeProvider';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
    return (
        <div>
          
            <div className={`mt-10 py-5 ${theme === 'light' ? 'bg-blue-200  ' : 'bg-purple-400'}`}>
              <h1 className='text-3xl mb-5 font-bold mt-5 text-center text-black '>Our Details</h1>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

     
      <div>
        <h3 className="text-xl font-bold text-black mb-3">FilmFusion Pro</h3>
        <p className="text-black text-sm">
  Discover meaningful, family-friendly, and inspiring films from around the world.
  FilmFusion Pro helps you explore movies with clean details, safe content insights,
  and your own personalized collection — all in one place.
</p>

        </div>

        <div>
  <h3 className="text-xl font-bold mb-3 text-black">Quick Links</h3>
  

<ul className="space-y-2 text-black">
  <li>
    <NavLink to="/quick/about" className="nav-link">
      About Us
    </NavLink>
  </li>
  <li>
    <NavLink to="/quick/contact" className="nav-link">
      Contact Us
    </NavLink>
  </li>
  <li>
    <NavLink to="/quick/terms" className="nav-link">
      Terms & Conditions
    </NavLink>
  </li>
  <li>
    <NavLink to="/quick/privacy" className="nav-link">
      Privacy Policy
    </NavLink>
  </li>
</ul>


</div>
     

      
      <div>
        <h3 className="text-xl font-bold mb-3 text-black">Follow Us</h3>
        <div className="flex flex-col space-y-2 text-gray-400">
          <div className='flex '>
            <button className='mr-3'><FaFacebookSquare /></button>
            <a href="https://facebook.com" className="text-black ">Facebook</a>
          </div>
          <div className='flex'>
            <button className='mr-3'><FaInstagramSquare /></button>
            <a href="https://instagram.com" className="text-black ">Instagram</a>
          </div>
          <div className='flex'>
            <button className='mr-3'><FaXTwitter /></button>
            <a href="https://twitter.com" className="text-black ">X</a>
          </div>
          <div className='flex'>
            <button className='mr-3'><IoLogoYoutube /></button>
            <a href="https://youtube.com" className="text-black ">YouTube</a>
          </div>
   
  
  
  
</div>
      </div>

    </div>
    
    <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-100 text-sm">
      &copy; {new Date().getFullYear()} FilmFusion Pro. All rights reserved.
    </div>
  </div>
</div>
        </div>
    );
};

export default Footer;