import React from 'react';
import banner from '../../assets/banner.jpg'
import Chefs from '../Chefs/Chefs';
import { useLoaderData } from 'react-router-dom';
const Home = () => {
    const allChef = useLoaderData();

    return (
        <div className='my-container  mt-8  '>
            {/* banner */}
            <div className='md:grid grid-cols-2 gap-8 p-4 h-[80vh] '>
                <div className='overflow-hidden col-span-1'>
                    <img className=' object-cover w-full h-full  rounded-lg' src={banner} alt="" />
                </div>
                <div className='col-span-1 flex flex-col justify-center '>
                    <h3 className='text-3xl font-bold'>Welcome to <span className='primary-color'>Italian delicacy</span></h3>
                    <p className='mt-3'>Since 2002 we've been serving our customers the best quality italian food, traditionally made and presented with care.</p>
                </div>
            </div>
            {/* chefs section */}
            {/* <Chefs/> */}
            <div className='mt-12 '>
                <h3 className='text-2xl text-center font-bold mt-5 mb-5'>Our Chefs</h3>
                <div className='md:grid grid-cols-3 gap-8'>
                    {
                        allChef.map(singleChef =>
                            <Chefs key={singleChef.id} singleChef={singleChef}
                            >
                            </Chefs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;