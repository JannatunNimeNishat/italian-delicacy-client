import React from 'react';
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-32  border-t-2'>
            <div className='px-12  md:grid grid-cols-5 gap-3 '>
                <div className='col-span-3 pt-5'>
                    <h3 className='text-xl font-bold'>About us</h3>
                    <p className='mt-4 w-5/6'>Italian-delicacy is a digital cookbook and cooking guide alike, available on all platforms, that helps home cooks of every level discover, save and organize the world’s best recipes, while also helping them become better, more competent cooks.</p>
                </div>
                <div className='col-span-1'>

                    <div className=''>
                    <h3 className='text-xl font-bold mt-8 mb-4'>Navigate</h3>
                        <p>Home</p>
                        <p>Blog</p>
                    </div>

                    <h3 className='text-xl font-bold mt-8 mb-3'>Learn More</h3>
                    <p>Our Cooks</p>
                    <p>See our Features</p>
                    <p>FAQ</p>
                    <p>Tools and Saving</p>
                </div>
                <div className='col-span-1'>
                    <h3 className='text-xl font-bold mt-8 mb-4'>Recipes</h3>
                    <p>What to Cook this week</p>
                    <p>Weekend Night</p>
                    <p>Pasta</p>
                    <p>Dinner</p>
                    <p>Healthy</p>
                    <p>Vegetarian</p>
                    <p>Vegan</p>
                </div>

            </div>
            <p className='mx-8  mt-3 '><small className='flex items-center gap-1 text-slate-200'><FaCopyright/> Italian-delicacy</small></p>
          
        </div>
    );
};

export default Footer;