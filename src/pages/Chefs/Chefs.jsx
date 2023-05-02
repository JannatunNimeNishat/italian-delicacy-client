import React from 'react';
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Chefs = ({ singleChef }) => {
    // console.log(singleChef);
    const { id, picture, chef_name, years_of_experience, num_of_recipes, likes } = singleChef;
    return (
        <div className='border text-white p-5'>
            <div className='overflow-hidden'>
                <img className='object-cover h-[300px]' src={picture} alt="" />
            </div>
            <h3 className='text-2xl mt-4 font-semibold'>{chef_name} </h3>
            <p className='mt-3'>Years of Experience: {years_of_experience}</p>
            <p className=''>Number of Recipes: {num_of_recipes}</p>
            <p className=''>Likes: {likes} <FaHeart className='inline text-red-700' /></p>
            <Link to={`/ChefsRecipe/${id}`}><button className='my-btn mt-3'>View Recipes</button></Link>
        </div>
    );
};

export default Chefs;

