import React, { useEffect, useState } from 'react';
import { json, useLoaderData } from 'react-router-dom';

import LikedSingleRecipe from './LikedSingleRecipe';
const MyFavoriteRecipes = () => {
    const getLikedRecipes = useLoaderData();
    const [likedRecipes, setLikedRecipes] = useState(getLikedRecipes);




    const handleDeleteLikedRecipes = (id) => {
        console.log(id);
        const newLikedRecipes = likedRecipes.filter(newLiked => newLiked.id !== id);
        setLikedRecipes(newLikedRecipes);
        removeFromLocalStorage(id)

    }

    const removeFromLocalStorage = (id) => {
        let likedRecipesFromLocal;
        const getLocalSData = localStorage.getItem('likedRecipes')
        if (getLocalSData) {
            likedRecipesFromLocal = JSON.parse(getLocalSData);
        }

        //removing form object
        const likedItem = likedRecipesFromLocal[id]
        if (likedItem) {
            delete likedRecipesFromLocal[id];
        }

        localStorage.setItem('likedRecipes', JSON.stringify(likedRecipesFromLocal));

    }


    return (
        <div className='my-container mt-28'>
            {
                likedRecipes &&
                <>
                    <h3 className='text-2xl font-semibold mb-5'>Liked recipes: {likedRecipes.length}</h3>
                    <div className="overflow-x-auto">
                        <table className="table w-full" >

                            <tbody className=''>

                                {
                                    likedRecipes.map((likedRecipe, index) => <LikedSingleRecipe key={likedRecipe.id} likedRecipe={likedRecipe}
                                        handleDeleteLikedRecipes={handleDeleteLikedRecipes}
                                        index={index}
                                    ></LikedSingleRecipe>)

                                }

                            </tbody>
                        </table>

                    </div>

                </>
            }
        </div>
    );
};

export default MyFavoriteRecipes;