import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GoogleAuthProvider,  signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from '../provider/AuthContext';

const Provider = new GoogleAuthProvider();
const Register = () => {
  const handleGoggleSignIn=()=>{
      // console.log(' Trying to sign in with Google')
      signInWithPopup(auth, Provider)
      .then(result =>{
        // console.log(result);
        toast(" You have successfully signed in with Google account");

        const newUser={
        name: result.user.displayName,
        email : result.user.email,
        image: result.user.photoURL
      }
    //   create user in the database
    fetch('http://localhost:3000/users',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log("Data after user",data)
    })

      })
      .catch(error=>{
        // console.log(error)
      })
  
    }


    const{createUser, setUser,updateUser} = use(AuthContext);
    const[passwordError , setPasswordError]= useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleRegister=(e)=>{
        e.preventDefault();
        // console.log(e.target);
        const form= e.target;
        const email = form.email.value;
        const password = form.password.value;
        const upperCaseRegex =/[A-Z]/;
        const lowerCaseRegex =/[a-z]/;


    

        if(password.length<8){
      setPasswordError(" password should be more than eight characters")
      return;
    }
    else if(!upperCaseRegex.test(password)){
      setPasswordError(' Password must contain at least one upper case letter')
return;
    }
     else if (!lowerCaseRegex.test(password)) {
    setPasswordError("Password must contain at least one lower case letter");
    return;
  } 
  else {
    setPasswordError("");

     
  }
    

        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        // console.log({name, photoUrl,email,password});
        createUser(email,password)
        .then((result) => {
          navigate("/");
    
    const user = result.user;
    console.log(user);
    form.reset();
    toast(" Registration successful");
    updateUser({displayName: name , photoURL:photoUrl }).then(()=>{
setUser({...user,displayName: name , photoURL:photoUrl});
    })
    .catch((error)=>{
// console.log(error);
setUser(user)
    });

    
    
    
    
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    toast(errorMessage);
    // ..
  });

        

    }

    const handleTogglePasswordShow = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }
    return (


      <div>

       



        <div>
<div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body bg-blue-200">
        <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">name</label>
          <input type="text"  name="name" className="input" placeholder="name" required />
          {/* photo url */}
          <label className="label">photoUrl</label>
          <input type="text"  name="photoUrl" className="input" placeholder="photoUrl" required />
          {/* email */}
          <label className="label">Email</label>
          <input type="email"  name="email" className="input" placeholder="Email" required />
          {/* password */}
          <label className="label">Password</label>
          {/* <input type="password"  name="password" className="input" placeholder="Password" required /> */}
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
          {
            passwordError && <p className='text-red-600'>{passwordError}</p>
          }
   
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
          
          <p className="font-semibold text-center pt-5">
              Already Have An Account ?{" "}
              <Link className="font-bold text-red-600 link link-hover" to="/auth/login">
                Login
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
      </div>

      </div>
      
      
        
    );
};

export default Register;