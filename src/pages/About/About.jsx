import React from 'react';
import cucumbers_background from '../../assets/cucumbers_background.jpg'
// import cucumbers_background from '../../src/assets/cucumber-slice-bg.jpg'

const About = () => {
    return (
        <div className='my-container'>
            <h3 className='text-4xl font-semibold mt-12'>About US</h3>
            <h3 className='text-2xl font-semibold mt-20'>Who We Are</h3>
            <p className='mt-3'>Welcome to italian-delicacy, the ultimate online destination for authentic Italian recipes and culinary inspiration. We are passionate about sharing the richness and diversity of Italian cuisine with food lovers around the world.</p>
            <h3 className='text-2xl font-semibold mt-10'>Our goals</h3>
            <p className='mt-3'>At italian-delicacy, we are committed to providing our visitors with a comprehensive collection of traditional and modern Italian recipes that are easy to follow and recreate in your own kitchen. Our team of experienced Italian chefs and home cooks brings a wealth of knowledge and expertise to the table, and we are dedicated to helping you achieve the perfect taste and texture in every dish.
                We believe that food is a universal language that connects people across cultures, and Italian cuisine is one of the most beloved and widely recognized culinary traditions in the world. From classic pasta dishes like spaghetti alla carbonara and fettuccine alfredo to hearty soups like minestrone and ribollita, our recipes showcase the best of Italian cooking.

                In addition to our extensive recipe collection, we also provide cooking tips and techniques, ingredient guides, and entertaining ideas to help you take your Italian cooking to the next level. Our goal is to inspire and empower our community to create delicious and authentic Italian meals that bring people together.

                Whether you're a seasoned home cook or a beginner, italian-delicacy has something for everyone. We invite you to explore our website and join our community of passionate Italian food lovers. Buon appetito!</p>


            <div className={` h-[60vh] bg-cover bg-center mt-20 `} style={{ backgroundImage: `url("${cucumbers_background}")` }}>

                <div className={` w-full h-full flex justify-center items-center backdrop-brightness-50`}>
                    <div className=' bg-white text-black  mx-12 py-12 grid grid-cols-2 gap-2'>
                        <div className='px-10  pt-5 '>
                            <p className='text-2xl font-semibold mb-2'>Want more deliciousness ?</p>
                            <p>
                                Subscribe here and we’ll send you an email as new recipes are published !
                            </p>
                        </div>
                       <div className='p-3'>
                        <p className='font-semibold'>Enter your email</p>
                       <input className='bg-white  py-2 border px-12 mt-2' type="email" name="" id=""  />
                       <button className='mt-2  my-btn'>Submit</button>
                       </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;