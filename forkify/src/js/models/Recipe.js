import axios from 'axios';

export default class Recipe{
    constructor(id){
        this.id = id;
    }

  async  getRecipe(){
      try{
        const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
        this.title = res.data.recipe.title;
        this.author = res.data.recipe.publisher;
        this.img = res.data.recipe.img_url;
        this.img = res.data.recipe.source_url;
        this.ingredients = res.data.recipe.ingredients;
      }catch(err){
          console.log(err);
          alert('Something went wrong :(');
      }
  }

  calcTime(){
      const numIng = this.ingredients.length;
      const periods = math.ceil(numIng/3);
      this.time = periods * 15;
  }

  calcServing(){
      this.serving = 4;
  }
}