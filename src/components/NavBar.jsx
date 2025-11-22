


import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import { toast } from 'react-toastify';
import Loading from '../pages/Loading';
import userImg from '../assets/user 1.png';
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsThreeDotsVertical } from 'react-icons/bs';


const NavBar = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);  
  const [sidebarOpen, setSidebarOpen] = useState(false);    
  const [threeDotOpen, setThreeDotOpen] = useState(false); 

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast('You Logged Out successfully');
        setDropdownOpen(false);
        setThreeDotOpen(false);
        setSidebarOpen(false);
      })
      .catch((err) => {});
  };

  return (
    <div>
      <nav className="relative flex items-center justify-between px-4 py-4 bg-pink-200 shadow-md">
        <button className="md:hidden text-white text-2xl" onClick={() => setSidebarOpen(true)}>
          <GiHamburgerMenu />
        </button>

        <h2 className="text-2xl font-extrabold text-white tracking-wide mx-auto md:mx-0">
            <span className='text-purple-700'>FilmFusion</span> <span className='text-pink-700'>Pro</span>
          
        </h2>

        
        {!loading && (
          <div className="hidden md:flex gap-5 mx-auto">
            <NavLink className="nav-link link link-hover font-extrabold text-blue-600" to="/">Home</NavLink>
            <NavLink className="nav-link link link-hover font-extrabold text-blue-600" to="/movies">All Movies</NavLink>
            <NavLink className="nav-link link link-hover font-extrabold text-blue-600" to="/my-collection">My Collection</NavLink>
          </div>
        )}

       
        {!loading && (
          <div className="hidden md:flex items-center gap-3 relative">
            {user ? (
              <div>
                <img
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-12 h-12 rounded-full cursor-pointer border-2 border-white object-cover"
                  src={user.photoURL || userImg}
                  alt="User"
                />
                {dropdownOpen && (
                  <div className="absolute right-0 mt-16 w-56 bg-white rounded-lg shadow-lg p-3 z-50">
                    <p className="font-semibold">{user.displayName || 'User'}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                    {/* <Link to="/person/profile">
                      <button className="w-full py-1 bg-purple-500 text-white rounded-md mt-2">My Profile</button>
                    </Link> */}
                    <button onClick={handleLogOut} className="w-full py-1 bg-red-500 text-white rounded-md mt-2">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <img className="w-12 h-12 rounded-full" src={userImg} alt="Demo" />
                <Link to="/auth/login" className="btn btn-primary px-4">Login</Link>
                <Link to="/auth/register" className="btn btn-primary px-4">Register</Link>
              </>
            )}
          </div>
        )}

      
        <div className="md:hidden relative">
          <button className="text-white text-2xl" onClick={() => setThreeDotOpen(!threeDotOpen)}><BsThreeDotsVertical /></button>
          {threeDotOpen && (
            <div className="absolute right-0 mt-12 w-56 bg-white rounded-lg shadow-lg p-3 z-50">
              {user ? (
                <>
                  <img className="w-12 h-12 rounded-full mb-2" src={user.photoURL || userImg} alt="User" />
                  <p className="font-semibold">{user.displayName || 'User'}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  {/* <Link to="/person/profile">
                    <button onClick={() => setThreeDotOpen(false)} className="w-full py-1 bg-purple-500 text-white rounded-md mt-2">My Profile</button>
                  </Link> */}
                  <button onClick={handleLogOut} className="w-full py-1 bg-red-500 text-white rounded-md mt-2">Logout</button>
                </>
              ) : (
                <>
                  <img className="w-12 h-12 rounded-full mb-2" src={userImg} alt="Demo" />
                  <Link to="/auth/login" onClick={() => setThreeDotOpen(false)} className="btn btn-primary w-full mb-2">Login</Link>
                  <Link to="/auth/register" onClick={() => setThreeDotOpen(false)} className="btn btn-primary w-full">Register</Link>
                </>
              )}
            </div>
          )}
        </div>
      </nav>

      
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 z-50 p-5
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button className="text-2xl mb-4" onClick={() => setSidebarOpen(false)}><IoMdClose /></button>
        <nav className="flex flex-col gap-3 text-lg">
          <NavLink className='font-bold text-green-600 link link-hover' onClick={() => setSidebarOpen(false)} to="/">Home</NavLink>
          <NavLink className='font-bold text-green-600 link link-hover' onClick={() => setSidebarOpen(false)} to="/movies">All Movies</NavLink>
          <NavLink className='font-bold text-green-600 link link-hover' onClick={() => setSidebarOpen(false)} to="/my-collection">My Collection</NavLink>
        </nav>
      </div>

     
      {sidebarOpen && <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setSidebarOpen(false)}></div>}
    </div>
  );
};

export default NavBar;









