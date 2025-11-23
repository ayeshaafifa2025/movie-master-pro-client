import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import QuickLinks from "../components/QuickLinks";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";
import AllMovies from "../components/AllMovies";
import MyCollection from "../components/MyCollection";
import AddMovie from "../components/AddMovie";
import UpdateMovie from "../components/UpdateMovie";
import MovieDetails from "../components/MovieDetails";
import Watchlist from "../components/Watchlist";

import PrivateRoute from "../provider/PrivateRoute";
import MyCollectionDetails from "../components/MyCollectionDetails";



const router = createBrowserRouter(
    [
        {
            
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    loader:()=>fetch("http://localhost:3000/movies"),
                    index: true,
                    
                    path: "/",
                    element:<Home></Home>
                }
                
            ]
        },
        {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children:[

             {
        path: "/auth/login",
        element: <Login></Login>
    },
    {
        path: "/auth/register",
        element: <Register></Register>
    },
    
        ]
    },
    {
        loader:()=>fetch("http://localhost:3000/movies"),
        path:"/movies",
        element:<AllMovies></AllMovies>
        
           
        

    },
     {
        
                path:"/my-collection",
                element:<PrivateRoute><MyCollection></MyCollection></PrivateRoute>
            },
     {
        loader:({params})=>fetch(`http://localhost:3000/popular/${params.id}`),
                path:"/popular/:id",
                element:<PrivateRoute><MyCollectionDetails></MyCollectionDetails></PrivateRoute>
            },
            {
                path:"/movies/add",
                element:<PrivateRoute><AddMovie></AddMovie></PrivateRoute>
            },
            {
                loader:({params})=>fetch(`http://localhost:3000/popular/${params.id}`),
                path:"/update/:id",
                element:<PrivateRoute><UpdateMovie></UpdateMovie></PrivateRoute>
            },
            {
                loader:({params})=>fetch(`http://localhost:3000/movies/${params.id}`),
                path:"/movies/:id",
                
                element:<MovieDetails></MovieDetails>
            },
    {
        path: "/quick",
        element: <QuickLinks></QuickLinks>,
        children:[

             {
        path: "/quick/about",
        element: <About></About>
    },
    {
        path: "/quick/contact",
        element: <Contact></Contact>
    },
    {
        path: "/quick/terms",
        element: <Terms></Terms>
    },
    {
        path: "/quick/privacy",
        element: <Privacy></Privacy>
    }
        ]
        
    }
    ,
    
    
   
   {
        // loader:()=>fetch("http://localhost:3000/watched"),
        
        
                path:"/watched",
                element:<PrivateRoute><Watchlist></Watchlist></PrivateRoute>
            },
    {
        path: "/*",
        element: <h3>Error404</h3>
    }


    ]
);

export default router;