import React from 'react';
import { useRouteError } from 'react-router-dom';
import errorImg from '../../assets/error_bg.png'
const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='h-[100vh] flex items-center justify-center bg-black gap-3'>
            <h3 className='text-center text-7xl text-white'>404 not found</h3>
            <div>
                <img src={errorImg} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;