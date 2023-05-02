import React, { createContext } from 'react';

export const AuthContext = createContext(null);
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile} from 'firebase/auth' 
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
    const authInfo ={
        user,
        registerUser,
        updateUser,
        login
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;