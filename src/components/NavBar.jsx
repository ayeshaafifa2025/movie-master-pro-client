

import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import userImg from '../assets/user 1.png';
import { AuthContext } from '../provider/AuthContext';
import { ThemeContext } from '../Layouts/ThemeProvider';

const NavBar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const html = document.querySelector('html');
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleLogOut = () => {
        setDropdownOpen(false);
        logOut()
            .then(() => {
                toast.success('Successfully logged out!');
                navigate('/');
            })
            .catch(error => {
                toast.error('Logout failed: ' + error.message);
            });
    };

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/movies">All Movies</NavLink></li>
            <li><NavLink to="/quick/about">About Us</NavLink></li>
            <li><NavLink to="/quick/terms">Terms & Conditions</NavLink></li>
            <li><NavLink to="/quick/privacy">Privacy Policy</NavLink></li>
            {user && <li><NavLink to="/dashboard">Dashboard</NavLink></li>}
        </>
    );

    return (
        <div className={`sticky top-0 mb-2 z-50 shadow-md ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-400'}`}>
            <div className="navbar mx-auto px-5 md:px-10 lg:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={theme === 'dark'}
                            onChange={toggleTheme}
                            className="toggle toggle-sm mr-3"
                        />
                        <span className="text-xl font-bold">
                            <span className="text-purple-700">FilmFusion</span>{' '}
                            <span className="text-pink-700">Pro</span>
                        </span>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold space-x-2">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end gap-2">
                    {user ? (
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleLogOut}
                                className="btn btn-sm btn-error hidden md:inline-flex"
                            >
                                Log Out
                            </button>

                            <div className="relative">
                                <img
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="w-10 h-10 rounded-full cursor-pointer object-cover border-2 border-primary"
                                    src={user?.photoURL || userImg}
                                    alt="User Avatar"
                                />

                                {dropdownOpen && (
                                    <div className="absolute right-0 top-12 w-56 bg-base-100 rounded-box shadow-xl p-3 z-[100] border border-gray-200">
                                        <p className="font-semibold text-gray-500 break-words">
                                            {user?.displayName || 'User'}
                                        </p>
                                        <p className="text-sm text-gray-500 mb-2 break-words">
                                            {user?.email}
                                        </p>
                                        <div className="divider my-1"></div>
                                        <button
                                            onClick={handleLogOut}
                                            className="btn btn-ghost btn-sm w-full justify-start text-sm hover:bg-base-200 md:hidden"
                                        >
                                            Log Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Link className="btn btn-sm btn-primary" to="/auth/login">Log in</Link>
                            <Link className="btn btn-sm btn-primary hidden sm:inline-flex" to="/auth/register">Register</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;



