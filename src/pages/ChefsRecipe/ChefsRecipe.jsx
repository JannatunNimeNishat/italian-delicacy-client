import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { FaHeart } from 'react-icons/fa'
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

    console.log('chefs', chefsInfo);
    console.log('recipes', recipes);

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
                    recipes && recipes.map(singleRecipe => (
                        <div className='border p-4 flex flex-col'>
                            <h3 className='text-xl font-bold'>{singleRecipe.recipe_name}</h3>
                            <p className='mt-3 font-semibold'>Ingredients: </p>
                            {

                                singleRecipe.ingredients.map((ingredient, index) => <p>{index}. {ingredient}</p>)
                            }
                            <p className='mt-3 font-semibold'>Cooking Method:</p>
                            <p >{singleRecipe.cooking_method}</p>
                            <p className='mt-3'>Rating: {singleRecipe.rating}</p>
                            <div className='flex-1 flex items-end mt-3 '>
                                <button className=' w-full my-btn'>Like the recipe <FaHeart className='inline ml-3 text-red-700' /></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ChefsRecipe;


/**Each recipe info should contain the recipe name, ingredients (at least 5), cooking method, rating, and a Favorite button. Show at least 3 recipes. for each chef. If needed, you can have duplicate recipes for each chef
 * 
 * 
 * Banner - chef picture, chef name, a short bio/description, likes, number of recipes, and years of experience.

Think about a section displaying the information of the selected chef's recipes in a tabular form or in a card group.

 */
