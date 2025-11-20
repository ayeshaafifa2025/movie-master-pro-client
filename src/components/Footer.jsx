import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div>
            <div className="bg-teal-500 text-gray-100 mt-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

     
      <div>
        <h3 className="text-xl font-bold mb-3">FilmFusion Pro</h3>
        <p className="text-gray-100 text-sm">
  Discover meaningful, family-friendly, and inspiring films from around the world.
  FilmFusion Pro helps you explore movies with clean details, safe content insights,
  and your own personalized collection — all in one place.
</p>

        </div>

        <div>
  <h3 className="text-xl font-bold mb-3">Quick Links</h3>
  

<ul className="space-y-2 text-gray-100">
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
        <h3 className="text-xl font-bold mb-3">Follow Us</h3>
        <div className="flex flex-col space-y-2 text-gray-400">
  <a href="https://facebook.com" className="text-white ">Facebook</a> 
  <a href="https://instagram.com" className="text-white ">Instagram</a>
  <a href="https://twitter.com" className="text-white ">X</a>
  <a href="https://youtube.com" className="text-white ">YouTube</a>
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