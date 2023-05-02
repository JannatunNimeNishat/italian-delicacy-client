import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth' 
import app from '../firebase/firebase.config';
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true);
    //register
    const registerUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //update user info
    const updateUser = (currentUser,name,photoURL) =>{
        setLoading(true);
        return updateProfile(currentUser, {
            displayName:name,
            photoURL:photoURL
        })
    }
    //login
    const login = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }


    //google login
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    //github login
    const githubProvider = new GithubAuthProvider();

    const githubSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }


    //logout
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }



    //auth listener
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false);
        })

        return ()=> {
            unSubscribe();
        }
    },[])
    const authInfo ={
        user,
        registerUser,
        updateUser,
        login,
        googleSignIn,
        githubSignIn,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;