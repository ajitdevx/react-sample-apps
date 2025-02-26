
import { fetchWrapper } from "../_helpers/fetch-wrapper";
const baseUrl = 'https://dummyjson.com/recipes';

const get = (limit = 10, skip = 0) => {
    const uri = `${baseUrl}?limit=${limit}&skip=${skip}`
    return fetchWrapper.get(uri);
}

const recipeCategories = [
    'Italian', 'Asian', 
]

const getRecipeCategories = () => {

}

export const recipeService = {
    get,
}