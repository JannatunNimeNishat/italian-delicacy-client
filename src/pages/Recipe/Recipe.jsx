import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa'
//
import { ToastContainer, toast } from 'react-toastify';
const Recipe = ({ singleRecipe }) => {
    const [liked, setLiked] = useState(false);

    const handleLiked = (id) => {
        console.log('recipe id: ', id);
        toast.success('Like added');
        setLiked(true);

        //store liked items to local storage
        let likedRecipesFromLocal = {};
        const getLocalSData = localStorage.getItem('likedRecipes')
        if (getLocalSData) {
            likedRecipesFromLocal = JSON.parse(getLocalSData);
        }

        const check = likedRecipesFromLocal[id];
        if (!check) {
            likedRecipesFromLocal[id] = id;
        }

        localStorage.setItem('likedRecipes', JSON.stringify(likedRecipesFromLocal));


    }
    return (
        <div className='border p-6 flex flex-col  '>
            <div className='mb-3'>
                <img className='' src={singleRecipe.img} alt="" />
            </div>
            <h3 className='text-xl font-bold'>{singleRecipe.recipe_name}</h3>
            
            <p className='mt-3 font-semibold'>Ingredients: </p>
            {

                singleRecipe.ingredients.map((ingredient, index) => <p key={index}>{index}. {ingredient}</p>)
            }
            <p className='mt-3 font-semibold'>Cooking Method:</p>
            <p >{singleRecipe.cooking_method}</p>


            <div className='flex items-center gap-3 mt-3  '>
                <p className=''>Rating: {singleRecipe.rating}</p>
                <Rating className=' inline' style={{ maxWidth: 130 }} value={singleRecipe.rating} readOnly />
            </div>




            <div className='flex-1 flex items-end mt-3 '>
                <button onClick={() => handleLiked(singleRecipe.id)}
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