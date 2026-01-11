







import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import { ThemeContext } from '../Layouts/ThemeProvider';
import userImg from '../assets/user 1.png';
import { toast } from 'react-toastify';

const ProfileDropdown = ({ user, logOut }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const handleLogOut = () => {
        setOpen(false);
        logOut()
            .then(() => {
                toast.success('Successfully logged out!');
                navigate('/');
            })
            .catch(err => toast.error(err.message));
    };

    return (
        <div className="relative" ref={ref}>
            <img
                onClick={() => setOpen(!open)}
                className="w-10 h-10 rounded-full cursor-pointer object-cover border-2 border-primary"
                src={user?.photoURL || userImg}
                alt="user"
            />

            {open && (
                <div className="absolute right-0 top-12 w-56 bg-base-100 rounded-box shadow-xl p-3 z-[100]">
                    <p className="font-semibold break-words">{user?.displayName || 'User'}</p>
                    <p className="text-sm opacity-70 break-words mb-2">{user?.email}</p>

                    <div className="divider my-1"></div>

                    <Link
                        to="/dashboard/my-profile"
                        // onClick={() => setOpen(false)}
                        className="btn btn-ghost btn-sm w-full justify-start"
                    >
                        Profile
                    </Link>

                    <Link
                        to="/dashboard"
                        // onClick={() => setOpen(false)}
                        className="btn btn-ghost btn-sm w-full justify-start"
                    >
                        Dashboard Home
                    </Link>

                    <button
                        onClick={handleLogOut}
                        className="btn btn-ghost btn-sm w-full justify-start text-error mt-1"
                    >
                        Log Out
                    </button>
                </div>
            )}
        </div>
    );
};

const DashboardLayout = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { user, logOut, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <progress className="progress w-56"></progress>
            </div>
        );
    }

    return (
        <div className="drawer lg:drawer-open min-h-screen">
            <input id="drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col">
                <nav className={`navbar sticky top-0 z-10 ${theme === 'light' ? 'bg-base-100' : 'bg-base-200'}`}>
                    <div className="flex-1 px-4">
                        <label htmlFor="drawer" className="btn btn-ghost btn-square lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <span className="text-xl font-bold ml-2">FilmFusion Pro Dashboard</span>
                    </div>

                    <div className="flex items-center gap-2 mr-4">
                        <input
                            type="checkbox"
                            checked={theme === 'dark'}
                            onChange={toggleTheme}
                            className="toggle toggle-sm"
                        />
                        {user && <ProfileDropdown user={user} logOut={logOut} />}
                    </div>
                </nav>

                <main className={`flex-1 p-4 ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800 text-white'}`}>
                    <Outlet />
                </main>
            </div>

            <div className="drawer-side">
                <label htmlFor="drawer" className="drawer-overlay"></label>
                <div className="w-64 min-h-full bg-base-200 shadow-xl">
                    <div className="p-4 border-b">
                        <Link to="/" className="text-2xl font-bold text-primary">FilmFusion Pro</Link>
                    </div>

                    <ul className="menu p-4 space-y-2">
                        <li><NavLink to="/dashboard" end>Dashboard Home</NavLink></li>
                        <li><NavLink to="/dashboard/my-profile">Profile</NavLink></li>
                        <li><NavLink to="/dashboard/my-collection">My Collection</NavLink></li>
                        <li><NavLink to="/dashboard/watched">Watchlist</NavLink></li>
                        <li><NavLink to="/dashboard/movies/add">Add Movie</NavLink></li>
                        <div className="divider"></div>
                        <li><Link to="/">Go to Home</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;




