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
// import PrivateRoute from "../provider/PrivateRoute";



const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [
                {
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
        
    },
   
   
    {
        path: "/*",
        element: <h3>Error404</h3>
    }


    ]
);

export default router;