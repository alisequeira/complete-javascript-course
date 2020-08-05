//global app controler
/*
//there's three ways of import files from modules:
import string from './models/Search';//importing the entire module
import {add , multiply, ID} from './views/searchView';//importing functions from a module
import * as searchView from './views/searchView';//importing all functions from a module

//console.log(`using imported functions ! ${add(ID, 2)} and ${multiply(3,5)}, ${string}`);
console.log(`using imported functions ! ${searchView.add(ID, 2)} and ${searchView.multiply(3,5)}, ${string}`);
*/

import Search from './models/Search';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import Recipe from './models/Recipe';
import Likes from './models/Likes';
import {elements, renderLoader, clearLoader} from './views/base';
import List from './models/List';

/**GLOBAL STATE OF THE APP
 * -Search object
 * -Current recipe object
 * -Shopping list object
 * -Like recipe
 */
    const state = {};

    /**
        SEARCH CONTROLLER
     */

    const controlSearch = async () => {
        //1) Get the query from the view
        const query = searchView.getInput();
        console.log(query)

        if(query){
            //2) New Search object and add to state
            state.search = new Search(query);

            //3) Prepare UI for result 
            searchView.clearInput();
            searchView.clearResults();
            renderLoader(elements.searchRes);
            //4) Search for recipes
            try{
                await state.search.getResults();
                //5) render result on UI
                clearLoader();
               searchView.renderResults(state.search.result);
            }catch(err){
                alert('Something wrong with the search...');
                clearLoader();
            }
        }
    }
    elements.searchForm.addEventListener('submit', e => {
        e.preventDefault();
        controlSearch();

    });

    //event delegation
        elements.searchResPages.addEventListener('click', e => {
            //Element.closest() return the closest ancestor of the current element (or the current element itself)
            // which matches the selector given in parameters.
            const btn = e.target.closest('.btn-inline');
            if(btn){
                const goToPage = parseInt(btn.dataset.goto, 10);
                searchView.clearResults();
                searchView.renderResults(state.search.result, goToPage);
            }
        });


    /**
        RECIPE CONTROLLER
     */

     const controlRecipe = async () => {
         //get the id from the URL
         const id = window.location.hash.replace('#', "");
         console.log(id);

         if(id){
            //prepare the UI for changes
            recipeView.clearRecipe();
            renderLoader(elements.recipe);
            //highlight selected search item
            if(state.search) searchView.highlightselected(id);
            //Create new recipe object
            state.recipe = new Recipe(id);
            //get recipe data
            try{
                //get parse ingredientes
                await state.recipe.getRecipe();
                state.recipe.parseIngredients();
            }catch(err){
                alert('error processing recipe!');
            }
            //calculate servings and time 
            state.recipe.calcTime();
            state.recipe.calcServing();
            //render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);
         }
     }

    
     ['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

/**
 * LIST CONTROLLER
 */

     const controlList = () => {
         //create a new list in none yet

         if(!state.list) state.list = new List();

         //Add each ingredient to the list and UI
         state.recipe.ingredients.forEach(el => {
            const item =  state.list.addItem(el.count, el.unit, el.ingredient);
            listView.renderItem(item);
         });
     };

     //handle delete and update list item events
     
        elements.shopping.addEventListener('click', e => {
            const id = e.target.closest('.shopping__item').dataset.itemid;

            //handle delete button
            if(e.target.matches('.shoppin__delete, .shopping__delete *')){
                //delete from the state
                state.list.deleteItem(id);

                //Delete from UI
                    listView.deleteItem(id);

            //handle count object
            }else if(e.target.matches('.shopping__count-value')){
                const val = parseFloat(e.target.value,10);
                state.list.updateCount(id,val);
            }
        });

    /**
 * LIKE CONTROLLER
 */
        const controlLike = () => {
            if (!state.likes) state.likes = new Likes();

            const currentID = state.recipe.id;

            //user has not yet like current recipe
            if(!state.likes.isLiked(currentID)){
                // Add like to the state
                const newLike = state.likes.isLiked(
                    currentID,
                    state.recipe.title,
                    state.recipe.author,
                    state.recipe.img
                );
                //Toggle the like button

                //Add like to the ui list
                console.log(state.likes);

              //user has not yet like current recipe
            }else{
                //remove like from the 
                    state.likes.deleteLike(currentID);
                //toggle the like button

                //remove like from UI list
                console.log(state.likes);
            }
        }

     //handling recipe button clicks

        elements.recipe.addEventListener('click', e => {
            if(e.target.matches('.btn-decrease, .btn-decrease *')){
                //decrease is clicket
                if(state.recipe.servings > 1){
                    state.recipe.updateServings('dec');
                    recipeView.updateServingsIngredients(state.recipe);
                }
            }else if(e.target.matches('.btn-increase, .btn-increase *')){
                //increase is clicked
                state.recipe.updateServings('inc');
                recipeView.updateServingsIngredients(state.recipe);
            }else if (e.target.matches('.recipe__btn--add *')){
                //Add ingredients to shopping list
                controlList();
            }else if(e.target.matches('.recipe__love, .recipe__love *')) {
                // Like controller
                controlLike();
            }
        });