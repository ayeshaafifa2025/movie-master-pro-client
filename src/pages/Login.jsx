import React, { use, useRef, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { toast } from 'react-toastify';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from '../provider/AuthContext';


const Provider = new GoogleAuthProvider();
const Login = () => {
  const handleGoggleSignIn=()=>{
    // console.log(' Trying to sign in with Google')
    signInWithPopup(auth, Provider)
    .then(result =>{
      // console.log(result);
      toast(" You have successfully signed in with Google account");
    })
    .catch(error=>{
      // console.log(error)
    })

  }
  
  const[error,setError] =useState("");
  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const {signIn} = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const handleLogin = (e) =>{
  
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
        const password = form.password.value;
        // console.log({email,password});
        signIn(email,password)
        .then(result=>{
          const user = result.user;
          // console.log(user);
          form.reset();
          toast("Login successful! Welcome back.");
          // if(!result.user.emailVerified){
          //   alert (' Please verify your email address')

          // }
          navigate(`${location.state?location.state:"/"}`)
          
        })
        .catch((error) => {
         const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setError(errorCode)
      });
  };
const handleTogglePasswordShow = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

   
    return (
<div>
 

      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body bg-emerald-200">
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input name="email" type="email" ref={emailRef}  className="input" placeholder="Email" required />
          {/* password */}
          <label className="label">Password</label>
          {/* <input type="password" name="password" className="input" placeholder="Password" required /> */}
          <div className='relative'>
                   <input
                       type={showPassword ? 'text' : 'password'}
                       name='password'
                                                  className="input" placeholder="Password" />
                   <button
                  onClick={handleTogglePasswordShow}
                  className="btn btn-xs top-2 right-5 absolute">
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                                              </button>
                                          </div>
          
          <div ><a className="link link-hover">Forgot password?</a></div>

          {
            error && <p className='text-red-700 text-center'>{error}</p>
          }
          <button type='submit' className="btn btn-neutral  mt-4">Login</button>
          

          <p className="font-semibold text-center pt-5">
              Don’t Have An Account ?{" "}
              <Link className=" font-bold text-red-600 link link-hover" to="/auth/register">
                Register
              </Link>
            </p>
        </fieldset>
        </form>
        
      </div>
    </div>
    <button onClick={handleGoggleSignIn} type='submit' className="btn btn-neutral  mt-4">Goggle Login</button>
  </div>
  
</div>

</div>
      

      
      

        

 
 
           
        
    );
};

export default Login;