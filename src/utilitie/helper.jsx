// import { useParams } from "react-router-dom"

const getChefsRecipe = (chefsId) => {

    console.log('chefs id', chefsId);
    let chefsRecipe = [];
    let chefsData={};
    fetch(`http://localhost:5000/chef/${chefsId}`)
        .then(res => res.json())
        .then(data => console.log(data) )
    
     let recipe;
    fetch(`http://localhost:5000/recipes/${chefsId}`)
    .then(res => res.json())
    .then(data => console.log('recipes',data)) 

    console.log(chefsData);
    return 0;

}

export default getChefsRecipe;