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
import Recipe from './models/Recipe';
import {elements, renderLoader, clearLoader} from './views/base';

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