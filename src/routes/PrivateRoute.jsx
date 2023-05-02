import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className='flex items-center justify-center h-[88vh] border'> <progress className="progress w-1/3 bg-white text-center"></progress></div>
    }
    if(user){
        return children;
    }

    return <Navigate state={{from:location}} to='/login'></Navigate>
};

export default PrivateRoute;