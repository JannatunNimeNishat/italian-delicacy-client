import React, { useContext, useEffect } from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
//
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';
const Main = () => {
    const navigation = useNavigation();

    return (

        <div className='bg-black text-white '>

            <Navbar></Navbar>
            {
                navigation.state === 'loading' ? <Loading /> : ''

            }
            <div className='min-h-[calc(100vh-92px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            {/* <ToastContainer /> */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>





    );
};

export default Main;