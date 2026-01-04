

// import React, { useContext, useEffect, useState } from 'react';
// import { Link, NavLink, Outlet, useNavigate } from 'react-router'; // *** useNavigate আমদানি করা হয়েছে ***
// import { AuthContext } from '../provider/AuthContext';
// import { ThemeContext } from '../Layouts/ThemeProvider';
// import userImg from '../assets/user 1.png'; 
// import { toast } from 'react-toastify'; 


// // -----------------------------------------------------------------------------------
// // ProfileDropdown কম্পোনেন্ট 
// // (এই কম্পোনেন্টটি এখন useNavigate ব্যবহার করার জন্য তৈরি, তাই একে বাইরে রাখতে হবে)
// // -----------------------------------------------------------------------------------
// const ProfileDropdown = ({ user, logOut }) => {
//     // useNavigate হুক ব্যবহার করা হলো
//     const navigate = useNavigate(); 
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     // ড্রপডাউন বন্ধ করার ফাংশন
//     const closeDropdown = () => {
//         // সামান্য বিলম্ব (যেমন onBlur ইভেন্টের জন্য)
//         setTimeout(() => {
//             setDropdownOpen(false);
//         }, 100);
//     };

//     // লোগআউট হ্যান্ডলার
//     const handleLogOut = () => {
//         setDropdownOpen(false); // ড্রপডাউন বন্ধ করো
//         logOut()
//             .then(() => {
//                 toast.success('Successfully logged out!');
//                 // সফলভাবে লোগআউট হওয়ার পর নেভিগেট করো
//                 navigate('/'); 
//             })
//             .catch(error => {
//                 console.error("Logout Failed:", error);
//                 toast.error('Logout failed: ' + error.message);
//             });
//     }

//     // লিঙ্কে ক্লিক করলে ড্রপডাউন বন্ধ করার হ্যান্ডলার
//     const handleLinkClick = () => {
//         closeDropdown();
//     };

//     return (
//         <div className="relative">
//             <img
//                 onClick={() => setDropdownOpen(!dropdownOpen)}
//                 onBlur={closeDropdown} 
//                 className="w-10 h-10 rounded-full cursor-pointer object-cover border-2 border-primary"
//                 src={user?.photoURL || userImg}
//                 alt="User Avatar"
//                 tabIndex={0}
//             />
            
//             {dropdownOpen && (
//                 <div className="absolute right-0 top-12 w-56 bg-base-100 rounded-box shadow-xl p-3 z-[100] border border-gray-200">
//                     <p className="font-semibold text-gray-800 break-words">{user?.displayName || 'User'}</p>
//                     <p className="text-sm text-gray-500 mb-2 break-words">{user?.email}</p>
                    
//                     <div className='divider my-1'></div>
                    
//                     {/* Link এ onClick={handleLinkClick} যোগ করা হয়েছে */}
//                     <Link 
//                         to="/dashboard/my-profile" 
//                         onClick={handleLinkClick} 
//                         className='btn btn-ghost btn-sm w-full justify-start text-sm hover:bg-base-200'
//                     >
//                         Profile
//                     </Link>
//                     <Link 
//                         to="/dashboard" 
//                         onClick={handleLinkClick} 
//                         className='btn btn-ghost btn-sm w-full justify-start text-sm hover:bg-base-200'
//                     >
//                         Dashboard Home
//                     </Link>
                    
//                     {/* Log Out বাটনে onClick={handleLogOut} ব্যবহার করা হয়েছে */}
//                     <button 
//                         onClick={handleLogOut} 
//                         className='btn btn-ghost btn-sm w-full justify-start text-sm hover:bg-base-200 text-error mt-1'
//                     >
//                         Log Out
//                     </button>
                    
//                     {/* আপনার দেওয়া অতিরিক্ত 'Close' বাটনটি প্রয়োজন নেই, তবে যদি রাখেন, তবে এটি ঠিক আছে। */}
//                     {/* <button 
//                         onClick={closeDropdown}
//                         className='btn btn-ghost btn-sm w-full justify-start text-sm hover:bg-base-200 text-error mt-1'
//                     >
//                         Close
//                     </button> */}
//                 </div>
//             )}
//         </div>
//     );
// }
// // -----------------------------------------------------------------------------------
// // মূল DashboardLayout কম্পোনেন্ট 
// // -----------------------------------------------------------------------------------

// const DashboardLayout = () => {
//     const { theme, toggleTheme } = useContext(ThemeContext);
//     const { user, logOut, loading } = useContext(AuthContext); 
    
//     // লোডিং স্টেট হ্যান্ডেল করা যেতে পারে, যদিও এটি অপশনাল
//     if (loading) {
//         return <div className="min-h-screen flex items-center justify-center"><progress className="progress w-56"></progress></div>;
//     }

//     const userSidebarLinks = (
//         <>
//             <li>
//                 <NavLink to="/dashboard" end className="flex items-center space-x-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2v-11z" /></svg>
//                     <span>Dashboard Home</span>
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink to="/dashboard/my-profile" className="flex items-center space-x-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
//                     <span>Profile</span>
//                 </NavLink>
//             </li>
            
//             <li>
//                 <NavLink to="/dashboard/my-collection" className="flex items-center space-x-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
//                     <span>My Collection</span>
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink to="/dashboard/watched" className="flex items-center space-x-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
//                     <span>Watchlist</span>
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink to="/dashboard/movies/add" className="flex items-center space-x-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
//                     <span>Add Movie</span>
//                 </NavLink>
//             </li>

//             <div className='divider my-2'></div>
//             <li>
//                 <Link to="/" className="flex items-center space-x-2">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" /></svg>
//                     <span>Go to Home</span>
//                 </Link>
//             </li>
//         </>
//     );

//     return (
//         <div>
//             <div className='drawer lg:drawer-open min-h-screen'>
//                 <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
//                 <div className="drawer-content flex flex-col">
                    
//                     <nav className={`navbar sticky top-0 z-10 shadow-md ${theme === "light" ? "bg-base-100" : "bg-base-200"}`}>
//                         <div className="flex-1 px-4 sm:px-6 lg:px-8">
//                             <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost lg:hidden" aria-label="open sidebar">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                                 </svg>
//                             </label>
                            
//                             <span className="text-xl font-bold ml-2">FilmFusion Pro Dashboard</span>
//                         </div>
                        
//                         <div className="flex-none flex items-center gap-2 mr-4">
//                             <input
//                                 type="checkbox"
//                                 checked={theme === 'dark'}
//                                 onChange={toggleTheme}
//                                 className="toggle toggle-sm"
//                             />

//                             {/* ProfileDropdown কে ব্যবহার করা হয়েছে */}
//                             {user && <ProfileDropdown user={user} logOut={logOut} />}
//                         </div>
//                     </nav>

//                     <main className={`flex-1 p-4 sm:p-6 lg:p-8 ${theme === "light" ? "bg-gray-50" : "bg-gray-800 text-white"}`}>
//                         <Outlet />
//                     </main>
//                 </div>

//                 <div className="drawer-side">
//                     <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
//                     <div className="flex flex-col w-64 min-h-full bg-base-200 text-base-content overflow-y-auto shadow-xl">
                        
//                         <div className="px-4 py-4 mb-2 border-b border-base-300">
//                             <Link to="/" className="text-2xl font-bold text-primary">FilmFusion Pro</Link>
//                         </div>

//                         <ul className="menu p-4 w-full space-y-2">
//                             {userSidebarLinks}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DashboardLayout;







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




