import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ThemeProvider from './Layouts/ThemeProvider.jsx'

const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,      
    });
  }, []);

  return (
    <ThemeProvider>
      <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>

    </ThemeProvider>
    
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Root/>
  </StrictMode>
)
