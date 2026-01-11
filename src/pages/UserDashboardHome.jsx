import React, { useContext, useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import { ThemeContext } from '../Layouts/ThemeProvider';


import Loading from './Loading';
import Container from '../components/Container';

const PIE_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE', '#00C49F', '#FF00FF', '#00FF00'];
const BASE_URL = 'https://movie-master-pro-server-six.vercel.app';

const UserDashboardHome = () => {
    const { theme } = useContext(ThemeContext);
    const { user, loading: authLoading } = useContext(AuthContext);

    const [stats, setStats] = useState({
        totalCollection: 0,
        totalWatchlist: 0,
        genreStats: [],
        recentWatched: []
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (authLoading) return;
        
        if (!user?.email) {
            setIsLoading(false);
            return;
        }

        const fetchDashboardData = async () => {
            setIsLoading(true);
            setError(null);
            
            try {
                const res = await fetch(`${BASE_URL}/user/dashboard-stats?email=${user.email}`);
                
                if (!res.ok) {
                    throw new Error("Failed to fetch dashboard stats.");
                }
                
                const data = await res.json();
                
                const formattedGenreStats = data.genreStats.map(item => ({
                    name: item._id || "Unspecified",
                    value: item.count,
                })).filter(item => item.value > 0);

                setStats({
                    totalCollection: data.totalCollection,
                    totalWatchlist: data.totalWatchlist,
                    genreStats: formattedGenreStats,
                    recentWatched: data.recentWatched,
                });

            } catch (err) {
                console.error("Dashboard data fetching error:", err);
                setError(err.message || "Could not load dashboard data.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchDashboardData();
    }, [user, authLoading]);

    if (isLoading) {
        return <Loading />;
    }
    
    if (error) {
        return <p className="text-center text-red-500 mt-10">Error: {error}</p>;
    }
    
    const { totalCollection, totalWatchlist, genreStats, recentWatched } = stats;
    const totalUniqueGenres = genreStats.length;

    return (
        <Container>
            <div className={`p-4 sm:p-6 lg:p-8 ${theme === "light" ? "bg-white" : "bg-gray-800 text-gray-100"} min-h-screen transition-colors duration-300`}>
                <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-8 text-center ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                    Dashboard Overview 📊
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    
                    <div className={`stat shadow-2xl rounded-xl p-6 border-b-4 border-indigo-500 ${theme === "light" ? "bg-gray-50 text-base-content" : "bg-gray-700 text-white"}`}>
                        <div className="stat-title text-gray-500 font-medium text-sm sm:text-base">My Collection</div>
                        <div className="stat-value text-3xl sm:text-4xl text-indigo-500 font-extrabold">{totalCollection}</div>
                        <div className="stat-desc text-sm text-gray-500">Movies added by you</div>
                        <Link to="/dashboard/my-collection" className="text-xs text-indigo-400 hover:underline mt-2 inline-block">View Details</Link>
                    </div>
                    
                    <div className={`stat shadow-2xl rounded-xl p-6 border-b-4 border-green-500 ${theme === "light" ? "bg-gray-50 text-base-content" : "bg-gray-700 text-white"}`}>
                        <div className="stat-title text-gray-500 font-medium text-sm sm:text-base">Total Watchlist</div>
                        <div className="stat-value text-3xl sm:text-4xl text-green-500 font-extrabold">{totalWatchlist}</div>
                        <div className="stat-desc text-sm text-gray-500">Items you plan to watch</div>
                        <Link to="/dashboard/watched" className="text-xs text-green-400 hover:underline mt-2 inline-block">View Details</Link>
                    </div>
                    
                    <div className={`stat shadow-2xl rounded-xl p-6 border-b-4 border-amber-500 ${theme === "light" ? "bg-gray-50 text-base-content" : "bg-gray-700 text-white"}`}>
                        <div className="stat-title text-gray-500 font-medium text-sm sm:text-base">Unique Genres</div>
                        <div className="stat-value text-3xl sm:text-4xl text-amber-500 font-extrabold">{totalUniqueGenres}</div>
                        <div className="stat-desc text-sm text-gray-500">Categories tracked</div>
                        <span className="text-xs text-amber-400 mt-2 inline-block">From your collection</span>
                    </div>
                    
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">

                    <div className={`lg:col-span-1 p-4 sm:p-6 rounded-xl shadow-2xl ${theme === "light" ? "bg-white" : "bg-gray-700"}`}>
                        <h3 className={`text-lg sm:text-xl font-semibold mb-4 text-center ${theme === "light" ? "text-gray-700" : "text-white"}`}>Genre Distribution</h3>
                        {genreStats.length > 0 ? (
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={genreStats}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={100} 
                                        innerRadius={50} 
                                        paddingAngle={5}
                                        labelLine={false}
                                        label={({ name, percent }) => percent > 0.05 ? `${name} (${(percent * 100).toFixed(0)}%)` : ''}
                                    >
                                        {genreStats.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip contentStyle={{ backgroundColor: theme === 'light' ? 'white' : '#374151', border: 'none' }} formatter={(value) => [`${value} movies`, 'Count']} />
                                    <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '14px', color: theme === 'light' ? '#374151' : 'white' }} />
                                </PieChart>
                            </ResponsiveContainer>
                        ) : (
                            <p className="text-center text-gray-500 py-10">Add movies to your collection to see the chart. 



[Image of Pie Chart]

</p>
                        )}
                    </div>

                    <div className={`lg:col-span-2 p-4 sm:p-6 rounded-xl shadow-2xl overflow-x-auto ${theme === "light" ? "bg-white" : "bg-gray-700"}`}>
                        <h3 className={`text-lg sm:text-xl font-semibold mb-4 ${theme === "light" ? "text-gray-700" : "text-white"}`}>Recent Watchlist Activity</h3>
                        
                        {recentWatched.length > 0 ? (
                            <table className="table w-full">
                                <thead>
                                    <tr className={`uppercase text-sm ${theme === "light" ? "text-gray-600 bg-gray-100" : "text-gray-300 bg-gray-600"}`}>
                                        <th>#</th>
                                        <th>Movie Name</th>
                                        <th>Added By</th>
                                        <th>Movie ID</th>
                                        <th>User Photo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentWatched.map((item, index) => (
                                        <tr key={item._id} className={`${theme === "light" ? "hover:bg-gray-50 border-b" : "hover:bg-gray-600 border-gray-600 border-b"}`}>
                                            <th>{index + 1}</th>
                                            <td className='font-medium'>{item.movie}</td> 
                                            <td>{item.user}</td> 
                                            <td className='text-xs'>{item.movieId}</td>
                                            <td>
                                                <img 
                                                    src={item.photo} 
                                                    alt={item.user} 
                                                    className="w-8 h-8 rounded-full object-cover"
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className="text-center text-gray-500 py-10">No recent activity in your watchlist.</p>
                        )}
                        
                    </div>
                </div>

                <div className="mt-8 sm:mt-10 text-center">
                    <h3 className={`text-xl font-bold mb-4 ${theme === "light" ? "text-gray-800" : "text-white"}`}>Quick Actions</h3>
                    <div className="flex flex-wrap justify-center space-x-3 sm:space-x-4 space-y-2 sm:space-y-0">
                        
                        <Link to="/dashboard/my-collection" className="btn btn-sm sm:btn-md bg-indigo-500 text-white hover:bg-indigo-600 border-none px-4 sm:px-6">My Collection</Link>
                        <Link to="/dashboard/watched" className="btn btn-sm sm:btn-md bg-green-500 text-white hover:bg-green-600 border-none px-4 sm:px-6">Watchlist</Link>
                        <Link to="/dashboard/movies/add" className="btn btn-sm sm:btn-md bg-amber-500 text-white hover:bg-amber-600 border-none px-4 sm:px-6">Add New Movie</Link>
                        
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default UserDashboardHome
;