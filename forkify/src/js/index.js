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
            await state.search.getResults();
            //5) render result on UI
            clearLoader();
           searchView.renderResults(state.search.result);
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

        const r = new Recipe(46956);
        r.getRecipe();
        console.log(r);