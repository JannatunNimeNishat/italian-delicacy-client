import React, { createContext } from 'react';

export const AuthContext = createContext(null);
import {getAuth} from 'firebase/auth' 
import app from '../firebase/firebase.config';
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const user = {name:'ni7'}
    const authInfo ={
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;