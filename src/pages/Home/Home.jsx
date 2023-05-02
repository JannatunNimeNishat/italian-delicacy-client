import React from 'react';
import banner from '../../assets/banner.jpg'
import Chefs from '../Chefs/Chefs';
import { FaMapMarkerAlt, FaEnvelope, FaMobileAlt, FaFacebook, FaYoutube, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { useLoaderData } from 'react-router-dom';

//images
import c1 from '../../assets/c1.jpg'
import c2 from '../../assets/c2.jpg'
import c3 from '../../assets/c3.jpg'
import c4 from '../../assets/c4.jpg'
import c5 from '../../assets/c5.jpg'

/** */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
/** */

// react rating
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


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
                    <p className='mt-3'>Since 2002 we've been serving our customers the best quality italian food recipes, which are traditionally made and presented with care.</p>
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
            <div className='mt-36'>
                <h3 className='text-3xl  font-bold mt-5 mb-10'>Reviews</h3>
                <div className='px-20 border  flex items-center'>
                    <>
                        <Swiper
                           
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide className='p-8 '>
                                <div className='w-full  px-8 text-center'>

                                    <img className='w-[140px] h-[140px] rounded-full mx-auto mt-8' src={c1} alt="" />
                                    <p className='mt-5'>"I absolutely love this food recipe website! The variety of recipes is amazing, and they're all so easy to follow. I've made several dishes from here, and they've all turned out delicious. I especially love the step-by-step instructions and helpful tips for beginners. Highly recommend!"</p>
                                    <div className='mt-5 w-full  flex justify-center mb-8'>
                                        <Rating className='text-center ' style={{ maxWidth: 200 }} value={5} readOnly />
                                    </div>
                                   
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='p-8 '>
                                <div className='w-full  px-8 text-center'>

                                    <img className='w-[140px] h-[140px] rounded-full mx-auto mt-8' src={c2} alt="" />
                                    <p className='mt-5'>"I stumbled upon this food recipe website when I was looking for a new recipe to try. I was impressed with the layout and the beautiful food photography. The recipe I tried was a hit with my family, and I've been hooked ever since. The website is easy to navigate, and I love that they have a search feature to find specific recipes."</p>
                                    <div className='mt-5 w-full  flex justify-center mb-8'>
                                        <Rating className='text-center ' style={{ maxWidth: 200 }} value={5} readOnly />
                                    </div>
                                   
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='p-8 '>
                                <div className='w-full  px-8 text-center'>

                                    <img className='w-[140px] h-[140px] rounded-full mx-auto mt-8' src={c3} alt="" />
                                    <p className='mt-5'>"I've been following this food recipe website for a few months now, and it's become my go-to source for meal inspiration. The recipes are creative and unique, and the website has a great mix of healthy options and indulgent treats. The reviews and comments from other users are helpful too, as they give me ideas for modifications to the recipes."</p>
                                    <div className='mt-5 w-full  flex justify-center mb-8'>
                                        <Rating className='text-center ' style={{ maxWidth: 200 }} value={4.5} readOnly />
                                    </div>
                                   
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='p-8 '>
                                <div className='w-full  px-8 text-center'>

                                    <img className='w-[140px] h-[140px] rounded-full mx-auto mt-8' src={c4} alt="" />
                                    <p className='mt-5'>"As someone who is not very confident in the kitchen, I appreciate how user-friendly this food recipe website is. The recipes are straightforward, and the ingredients are easy to find. I've been able to make some impressive dishes thanks to this website, and my friends and family have been impressed too!"</p>
                                    <div className='mt-5 w-full  flex justify-center mb-8'>
                                        <Rating className='text-center ' style={{ maxWidth: 200 }} value={5} readOnly />
                                    </div>
                                   
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='p-8 '>
                                <div className='w-full  px-8 text-center'>

                                    <img className='w-[140px] h-[140px] rounded-full mx-auto mt-8' src={c5} alt="" />
                                    <p className='mt-5'>"I love how this food recipe website offers recipes from all over the world. I've been able to try new cuisines and flavors that I wouldn't have otherwise. The recipes are authentic and delicious, and the website offers helpful tips and techniques for cooking with unfamiliar ingredients. Highly recommend for foodies and adventurous eaters!"</p>
                                    <div className='mt-5 w-full  flex justify-center mb-8'>
                                        <Rating className='text-center ' style={{ maxWidth: 200 }} value={4.5} readOnly />
                                    </div>
                                   
                                </div>
                            </SwiperSlide>
                           
                        </Swiper>
                    </>
                </div>
            </div>



            {/* contact us */}
            <div className='mt-40'>
                <h3 className='text-3xl  font-bold mt-3 mb-12'>Contact us</h3>


                <div className=' grid grid-cols-3 '>

                    <div className='col-span-1 border bg-[#2C2C2C] p-5 flex flex-col '>


                        <h3 className='text-2xl  font-bold mb-3'>Address</h3>
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