import React from 'react';
import banner from '../../assets/banner.jpg'
import Chefs from '../Chefs/Chefs';
import { FaMapMarkerAlt, FaEnvelope, FaMobileAlt, FaFacebook, FaYoutube, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
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
            <div className='mt-28 '>
                <h3 className='text-3xl  font-bold mt-5 mb-10'>Our Chefs</h3>
                <div className='md:grid grid-cols-3 gap-8'>
                    {
                        allChef.map(singleChef =>
                            <Chefs key={singleChef.id} singleChef={singleChef}
                            >
                            </Chefs>)
                    }
                </div>
            </div>

            {/* customer review */}
            <div className='mt-32'>
                <h3 className='text-3xl  font-bold mt-5 mb-10'>Reviews</h3>

            </div>



            {/* contact us */}
            <div className='mt-32'>
                {/* <h3 className='text-3xl  font-bold mt-3 mb-12'>Contact us</h3> */}


                <div className=' grid grid-cols-3 '>

                    <div className='col-span-1 border bg-[#2C2C2C] p-5 flex flex-col '>


                        <h3 className='text-2xl  font-bold mb-3'>Contact us</h3>
                        <p className='flex items-center gap-3 mt-8'><FaMapMarkerAlt className='h-4 w-4' /> Modena, Province of Modena, Italy</p>
                        <p className='flex items-center gap-3 mt-5'><FaEnvelope className='h-4 w-4' /> italian-delicacy@gmail.com</p>
                        <p className='flex items-center gap-3 mt-5'><FaMobileAlt className='h-5 w-4' /> +8801700000000</p>


                        <div className='flex-grow '>
                            <div className='flex  items-end w-full h-full  justify-between px-3'>
                                <FaFacebook className='h-6 w-6 hover:text-blue-600' />
                                <FaYoutube className='h-6 w-6 hover:text-red-600' />
                                <FaTwitter className='h-6 w-6 hover:text-sky-500' />
                                <FaLinkedinIn className='h-6 w-6 hover:text-[#0e76a8]' />
                            </div>
                        </div>

                    </div>


                    <div className='col-span-2 border py-5 px-16   '>

                        <h3 className='text-2xl  font-bold mb-3'>Get in Touch</h3>
                        <input type="email" className='w-full mt-5 py-2 pl-2' placeholder='Enter your email' name="" id="" />
                        <input type="text" className='w-full mt-5 py-2 pl-2' placeholder='Subject' name="" id="" />
                        <input type="text" className='w-full mt-5 py-4 pl-2' placeholder='Enter your text here...' name="" id="" />
                        <input type="submit" className='my-btn w-full mt-5 py-4 pl-2' placeholder='Enter your text here...' name="" id="" />


                    </div>
                </div>

            </div>


        </div>
    );
};

export default Home;