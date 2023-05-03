

const getLikedRecipes = async() => {
    const res = await fetch('http://localhost:5000/recipes/')
    const data = await res.json()

    let detailsLikedRecipe = [];
   
      let likedRecipesFromLocal;
        const getLocalSData = localStorage.getItem('likedRecipes')
        if(getLocalSData){
            likedRecipesFromLocal = JSON.parse(getLocalSData);
        }

        for(let likedRecipe in likedRecipesFromLocal){
          
            const singleLikedRecipe =    data.find(singleRecipe => singleRecipe.id === parseInt(likedRecipe))
            detailsLikedRecipe.push(singleLikedRecipe)   
           
        }
      


   return detailsLikedRecipe;

}



export default getLikedRecipes