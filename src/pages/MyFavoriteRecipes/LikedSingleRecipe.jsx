import React from 'react';

const LikedSingleRecipe = ({ likedRecipe,index,handleDeleteLikedRecipes }) => {

    

    return (
        
            <>
            <tr className='w-full border'>
                <th>{index+1}</th>
                <td>
                    <img className='h-[120px] w-[120px]' src={likedRecipe.img} alt="" />
                </td>
                <td>{likedRecipe.recipe_name}</td>
                <td>
                    <button onClick={()=> handleDeleteLikedRecipes(likedRecipe.id)} className='px-3 py-1 bg-red-700 rounded-lg'>Delete</button>
                </td>
                
            </tr>
           
            </>
        
    );
};

export default LikedSingleRecipe;