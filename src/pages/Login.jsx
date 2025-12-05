

import React, { useRef, useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from '../provider/AuthContext';
import { ThemeContext } from '../Layouts/ThemeProvider';

const Provider = new GoogleAuthProvider();

const Login = () => {
    const {theme} = useContext(ThemeContext)
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef();

    const redirectAfterLogin = () => {
        if (location.state?.from) {
            navigate(location.state.from, { replace: true, state: location.state });
        } else {
            navigate("/", { replace: true });
        }
    };

    const handleGoggleSignIn = () => {
        signInWithPopup(auth, Provider)
            .then(result => {
                toast("You have successfully signed in with Google account");

                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    image: result.user.photoURL
                };
                fetch('https://movie-master-pro-server-six.vercel.app/users', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(newUser)
                }).then(() => {
                    redirectAfterLogin();
                });
            })
            .catch(err => console.log(err));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                toast("Login successful! Welcome back.");

                const newUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    image: result.user.photoURL
                };
                fetch('https://movie-master-pro-server-six.vercel.app/users', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(newUser)
                }).then(() => {
                    redirectAfterLogin();
                });

                form.reset();
            })
            .catch(err => setError(err.code));
    };

    const handleTogglePasswordShow = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    return (
        // <div className="hero bg-base-200 min-h-screen">
         <div className={` hero min-h-screen ${theme === 'light' ? 'bg-blue-400  ' : 'bg-purple-200'}`}>
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body bg-white">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label text-black">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    ref={emailRef}
                                    className="input"
                                    placeholder="Email"
                                    required
                                />
                                <label className="label text-black">Password</label>
                                <div className='relative'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        className="input"
                                        placeholder="Password"
                                        required
                                    />
                                    <button
                                        onClick={handleTogglePasswordShow}
                                        className="btn btn-xs top-2 right-5 absolute"
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                                <div><a className="link link-hover text-black">Forgot password?</a></div>
                                {error && <p className='text-red-700 text-center'>{error}</p>}
                                <button type='submit' className="btn btn-neutral mt-4">Login</button>
                                <p className="font-semibold text-center text-black pt-5">
                                    Don’t Have An Account?{" "}
                                    <Link className="font-bold text-red-600 link link-hover" to="/auth/register">
                                        Register
                                    </Link>
                                </p>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <button onClick={handleGoggleSignIn} className="btn btn-neutral mt-4">Google Login</button>
            </div>
        </div>
    );
};

export default Login;




