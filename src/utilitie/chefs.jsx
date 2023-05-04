
const getChefsData = async()=>{

    const res = await fetch(`https://italian-delicacy-server-jannatunnimenishat.vercel.app/chefs/`)
    const data = await res.json()
    return data;
}
/* const getChefsData = ()=>{

    fetch(`https://italian-delicacy-server-jannatunnimenishat.vercel.app/chefs`)
    .then(res => res.json())
    .then(data => return (data) )
   
} */
export default getChefsData;