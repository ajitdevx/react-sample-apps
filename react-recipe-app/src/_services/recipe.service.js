
import { fetchWrapper } from "../_helpers/fetch-wrapper";
const baseUrl = 'https://www.themealdb.com/api/json/v1/1';

export const CATEGORIES_PATH = '/list.php?c=list';
export const CATEGORY_SEARCH_PATH = "/filter.php?c=";
export const MEAL_SINGLE_PATH = "/lookup.php?i=";
export const SEARCH_PATH = "/search.php?s=";
export const MEAL_CUISION_PATH = '/list.php?a=list';
export const CUISINE_SEARCH_PATH = '/filter.php?a=';

const getRecipesBySearch = (searchTerm) => {
    const uri = `${baseUrl}${SEARCH_PATH}${searchTerm}`;
    return fetchWrapper.get(uri);
}

const getRecipesByCategory = (category) => {
    const uri = `${baseUrl}${CATEGORY_SEARCH_PATH}${category}`;
    return fetchWrapper.get(uri);
}

const getRecipesByCuisine = (category) => {
    const uri = `${baseUrl}${CUISINE_SEARCH_PATH}${category}`;
    return fetchWrapper.get(uri);
}

const getRecipeCategories = () => {
    const uri = `${baseUrl}${CATEGORIES_PATH}`
    return fetchWrapper.get(uri).then(parseRecipeCategories);
}

const getRecipeCuisines = ( ) => {
    const uri = `${baseUrl}${CATEGORIES_PATH}`
    return fetchWrapper.get(uri).then(parseRecipeCuisines);
}

const getRecipeById = (id) => {
    const uri = `${baseUrl}${MEAL_SINGLE_PATH}${id}`;
    return fetchWrapper.get(uri);
};

const parseRecipeCategories = (data) => {
    return parseRecipeData(data, "strCategory");
}

const parseRecipeCuisines = (data) => {
    return parseRecipeData(data, "strArea");
}

const parseRecipeData = (data, key) => {
    return Array.isArray(data?.meals) ? data.meals.map(item => item[key]) : [];
};

export const recipeService = {
    getRecipesBySearch,
    getRecipeCategories,
    getRecipeById,
    getRecipesByCategory,
    getRecipeCuisines,
    getRecipesByCuisine
}