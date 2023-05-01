import React from 'react';
import banner from '../../assets/banner.jpg'
const Home = () => {
    return (
        <div className='my-container  mt-8    h-[68vh] '>
            <div className='md:grid grid-cols-2 gap-8 p-4'>
                <div className='overflow-hidden col-span-1'>
                    <img className=' object-cover w-full h-full  rounded-lg' src={banner} alt="" />
                </div>
                <div className='col-span-1 mt-8'>
                    <h3 className='text-3xl font-bold'>Welcome to <span className='primary-color'>Italian delicacy</span></h3>
                    <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam adipisci vitae reiciendis voluptas at molestias enim distinctio qui nostrum debitis velit iure sint consectetur ad, eaque voluptatum dolor ducimus?</p>
                </div>
            </div>
        </div>
    );
};

export default Home;