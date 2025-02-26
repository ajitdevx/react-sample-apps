
import { fetchWrapper } from "../_helpers/fetch-wrapper";
const baseUrl = 'https://www.themealdb.com/api/json/v1/1';

export const CATEGORIES_URL = '/list.php?c=list';
export const MEAL_CATEGORIES_URL = "/filter.php?c=";
export const MEAL_SINGLE_URL  = "/lookup.php?i=";
export const SEARCH_URL = "/search.php?s=";

const getRecipesBySearch = (searchTerm) => {
    const uri = `${baseUrl}${SEARCH_URL}${searchTerm}`;
    return fetchWrapper.get(uri);
}

const getRecipesByCategory = (category) => {
    const uri = `${baseUrl}${MEAL_CATEGORIES_URL}${category}`;
    return fetchWrapper.get(uri);
}

const getRecipeCategories = () => {
    const uri = `${baseUrl}${CATEGORIES_URL}`
    return fetchWrapper.get(uri).then(parseRecipeCategories);
}

const getRecipeById = (id) => {
    const uri = `${baseUrl}${MEAL_SINGLE_URL}${id}`;
    return fetchWrapper.get(uri);
  };

const parseRecipeCategories = (data) => {
    return data.meals.map(item => item.strCategory);
}

export const recipeService = {
    getRecipesBySearch,
    getRecipeCategories,
    getRecipeById,
    getRecipesByCategory
}