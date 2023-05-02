import React, { createContext } from 'react';

export const AuthContext = createContext(null);
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth' 
import app from '../firebase/firebase.config';
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const user = {name:'ni7'}

    //register
    const registerUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //update user info
    const updateUser = (currentUser,name,photoURL) =>{
        return updateProfile(currentUser, {
            displayName:name,
            photoURL:photoURL
        })
    }
    //login
    const login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    //google login
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = ()=>{
        return signInWithPopup(auth,googleProvider);
    }

    //github login
    const githubProvider = new GithubAuthProvider();
    const githubSignIn = ()=>{
        return signInWithPopup(auth,githubProvider);
    }

    const authInfo ={
        user,
        registerUser,
        updateUser,
        login,
        googleSignIn,
        githubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;