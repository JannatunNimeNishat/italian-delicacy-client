import React, { useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Login = () => {
    const [loginError, setLoginError] = useState();
    return (
        <div className='my-container mt-10 h-[80vh] '>
            <form className=' w-[450px] px-10 text-center border mx-auto'>
                <h3 className='text-3xl font-bold mt-5'>Please Login</h3>
                <input className='border-b-2 bg-black w-full mt-10 px-2' type="email" name="email" placeholder='please enter your email' />
                <br />
                <input className='border-b-2 bg-black w-full mt-8 px-2' type="password" name="password" placeholder='please enter your password' />
                <br />

                <input className='mt-8 my-btn w-1/3 cursor-pointer' type="submit" value="Login" />

                {
                    loginError && <p className='mt-4 text-red-700 font-semibold text-center'>{loginError}</p>
                }


                <p className='mt-4'><small>Don't have an account ? <span className='primary-color font-semibold'>
                    <Link to='/register'>register</Link>
                    </span></small></p>


                <div className='mt-4 flex justify-center items-center gap-3'>
                    <div className='h-1 bg-white w-1/2'></div>
                    <p className='text-xl'>or</p>
                    <div className='h-1 bg-white w-1/2'></div>
                </div>

                <div className='mt-4 border w-full rounded-lg  '>
                    <button className='flex items-center gap-5 h-[40px] w-1/1 mx-auto'>
                        <FaGoogle className='h-6 w-6 ' />
                        <p>Continue with Google</p>
                    </button>
                </div>
                <div className='mt-4 border w-full rounded-lg  mb-10'>
                    <button className='flex items-center gap-5 h-[40px] w-1/1 mx-auto'>
                        <FaGithub className='h-6 w-6 ' />
                        <p>Continue with Github</p>
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Login;