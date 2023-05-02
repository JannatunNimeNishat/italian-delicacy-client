import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa'
//
import { ToastContainer, toast } from 'react-toastify';
const Recipe = ({ singleRecipe }) => {
    const [liked, setLiked] = useState(false);
    const handleLiked = () => {
        toast('Like added');
        setLiked(true);
    }
    return (
        <div className='border p-4 flex flex-col '>
            <h3 className='text-xl font-bold'>{singleRecipe.recipe_name}</h3>
            <p className='mt-3 font-semibold'>Ingredients: </p>
            {

                singleRecipe.ingredients.map((ingredient, index) => <p key={index}>{index}. {ingredient}</p>)
            }
            <p className='mt-3 font-semibold'>Cooking Method:</p>
            <p >{singleRecipe.cooking_method}</p>
            <p className='mt-3'>Rating: {singleRecipe.rating}</p>

            <div className='flex-1 flex items-end mt-3 '>
                <button onClick={handleLiked}
                    className={`${liked ? 'opacity-50' : ''} w-full my-btn `}
                    disabled={liked == true ? true : false}
                >
                    Like the recipe

                    <FaHeart className='inline ml-3 text-red-700'
                    />
                </button>

            </div>
        </div>
    );
};

export default Recipe;