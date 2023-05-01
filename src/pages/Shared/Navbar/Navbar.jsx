import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { FaBars } from 'react-icons/fa'
import { BsXLg } from "react-icons/bs";
const Navbar = () => {
    const [user,setUser] = useState()
    const [open, setOpen] = useState(false);
    return (
        <>
       
       <div className='md:hidden' onClick={() => setOpen(!open)}>
           <span>
               {
                   open ?
                       <BsXLg className='h-6 w-6 mb-3' />
                       :
                       <FaBars  className='h-6 w-6 mb-3'/>
               }
           </span>
       </div>
        <nav className={`my-container mt-2  md:mt-0  md:flex absolute md:static duration-500  
        ${open ? 'top-6' : '-top-40'}   justify-between items-center  py-3 `}>


            <Link to='/'><h3 className='text-3xl'>Italian-delicacy</h3></Link>
            <div className='flex gap-5'>
                <NavLink
                    to='/'
                    className={({ isActive }) => isActive ? 'active' : ''}
                >Home</NavLink>
                <NavLink
                    to='/blog'
                    className={({ isActive }) => isActive ? 'active' : ''}
                >Blog</NavLink>
            </div>
            <div className='md:flex items-center gap-8'>
                {
                    user ?
                        <>
                            <p>img</p>

                            <Link to='logout'>
                                <button className='my-btn primary-color'>Logout</button>
                            </Link>
                        </>
                        :
                        <>
                            <Link to='/login'>
                                <button className='my-btn'>Login</button>
                            </Link>
                        </>
                }
            </div>
        </nav>
        </>
    );
};

export default Navbar;