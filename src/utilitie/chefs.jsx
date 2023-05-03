
const getChefsData = async()=>{

    const res = await fetch(`http://localhost:5000/chefs/`)
    const data = await res.json()
    return data;
}
/* const getChefsData = ()=>{

    fetch(`http://localhost:5000/chefs`)
    .then(res => res.json())
    .then(data => return (data) )
   
} */
export default getChefsData;