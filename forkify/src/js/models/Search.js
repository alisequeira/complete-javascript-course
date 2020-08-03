/*
export default 'I am an export string'; //when only want to export one thing from a module.
*/
//when create recipe.js const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);

//////////////////////////////////////////////////////////////////////////////////////////////////
 /*
    axios work the same way as fetch 
    axios automatically returns Json
*/
import axios from 'axios'; 

export default class Search{
    constructor(query){
        this.query = query;
    }
   
    async getResults(){
        try{
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
    
        }catch(err){
            alert(err);
        }
    }
}