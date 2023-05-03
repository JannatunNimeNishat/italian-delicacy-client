import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { FaHeart } from 'react-icons/fa'

import Recipe from '../Recipe/Recipe';


const ChefsRecipe = () => {
    const { id } = useParams()

    const [chefsInfo, setChefsInfo] = useState(null);
    const [recipes, setRecipes] = useState(null);
 

    useEffect(() => {
        fetch(`http://localhost:5000/chef/${id}`)
            .then(res => res.json())
            .then(data => {

                setChefsInfo(data)
            })

    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/recipes/${id}`)
            .then(res => res.json())
            .then(data => {

                setRecipes(data)
            })

    }, [])

   

    return (
        <div className='my-container mt-5 '>
            <div>
                {
                    chefsInfo &&
                    <div className='md:grid grid-cols-2 gap-8 p-5 h-[60vh] '>
                        <div className='overflow-hidden col-span-1'>
                            <img className=' object-cover w-full h-full ' src={chefsInfo.picture} alt="" />
                        </div>
                        <div className='col-span-1 flex flex-col justify-center '>
                            <h3 className='text-3xl font-bold'>{chefsInfo.chef_name}</h3>
                            <p className='mt-3'>Bio: {chefsInfo.short_bio}</p>
                            <p>Likes: {chefsInfo.likes} <FaHeart className='inline text-red-700 ml-1' /></p>
                            <p>Number of recipes: {chefsInfo.num_of_recipes}</p>
                            <p>Years of experience: {chefsInfo.years_of_experience}</p>
                        </div>
                    </div>
                }
            </div>
            {/* recipes */}
            <h3 className='mt-12 text-3xl font-bold'>Best Recipes</h3>
            <div className='mt-8  grid grid-cols-3 gap-8'>
                {
                    recipes && recipes.map(singleRecipe => <Recipe key={singleRecipe.id} singleRecipe={singleRecipe}></Recipe>)
                }
            </div>
        </div>
    );
};

export default ChefsRecipe;


