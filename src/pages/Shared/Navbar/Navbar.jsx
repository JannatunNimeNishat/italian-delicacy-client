import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { FaBars, FaUserAlt } from 'react-icons/fa'
import { BsXLg } from "react-icons/bs";
import { AuthContext } from '../../../providers/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [open, setOpen] = useState(false);
    // console.log(user.photoURL); 
    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <>

            <div className='md:hidden' onClick={() => setOpen(!open)}>
                <span>
                    {
                        open ?
                            <BsXLg className='h-6 w-6 mb-3' />
                            :
                            <FaBars className='h-6 w-6 mb-3' />
                    }
                </span>
            </div>
            <nav className={`my-container mt-2  md:mt-0  md:flex absolute md:static duration-500  
        ${open ? 'top-6' : '-top-40'}   justify-between items-center  py-4 `}>


                <Link to='/'><h3 className='text-3xl primary-color font-bold'>Italian-delicacy</h3></Link>
                <div className='flex gap-8 mr-32  '>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >Home</NavLink>
                    <NavLink
                        to='/blog'
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >Blog</NavLink>
                    <NavLink
                        to='/my_favorite_recipes'
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >My Favorite Recipes</NavLink>
                </div>
                <div className='md:flex items-center gap-8'>
                    {
                        user ?
                            <>
                                <Link >
                                    <button onClick={handleLogout} className='my-btn primary-color'>Logout</button>
                                </Link>

                                {
                                    user.photoURL ?
                                        <img title={user.displayName} className='w-[45px]    object-cover rounded-full' src={user.photoURL} />
                                        :
                                        <FaUserAlt title={user.displayName} className='w-[45px]  h-[25px]   ' />
                                }




                            </>
                            :
                            <>
                                <Link to='/login'>
                                    <button className='my-btn'>Login</button>
                                </Link>
                            </>
                    }
                    {/* <Link to='/login'>
                        <button className='my-btn'>Login</button>
                    </Link> */}
                </div>
            </nav>
        </>
    );
};

export default Navbar;