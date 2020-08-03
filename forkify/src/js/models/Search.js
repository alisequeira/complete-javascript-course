/*
export default 'I am an export string'; //when only want to export one thing from a module.
*/
//when create recipe.js const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
/*
    axios work the same way as fetch 
    axios automatically returns Json
*/
import axios from 'axios';
async function getResults(query){
    try{
        const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
        console.log(res);
    
    }catch(err){
        alert(err);
    }
}
getResults('pasta');