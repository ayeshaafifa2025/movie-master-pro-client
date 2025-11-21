import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null);
    
    const [loading , setLoading] = useState(true);
    console.log(user,loading);

    const createUser=(email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)

    };
    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

   
    const logOut=()=>{
        return signOut(auth);
    }
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);

        });
        return ()=>{
            unsubscribe();

        }

    },[])
    const authData ={
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        

    }
    return (
       <AuthContext value={authData}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;