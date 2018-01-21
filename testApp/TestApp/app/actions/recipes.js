import * as types from './types';
import { searchedRecipes } from '../reducers/recipers';


export function addRecipe(){
    return {
        type: types.ADD_RECIPE,
    }
}

export function fetchRecipes(ingredients){
    return (dispatch,getState) => {
        console.log(getState());
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
            //return responseJson.movies;

            console.log(responseJson.movies)
            dispatch(setSearchedRecipes({recipes:responseJson.movies}))
            })
            .catch((error) => {
            console.error(error);
            });
    }
}

export function setSearchedRecipes({recipes}){
        return{
            type:types.SET_SEARCHED_RECIPES,
            recipes
        }
}