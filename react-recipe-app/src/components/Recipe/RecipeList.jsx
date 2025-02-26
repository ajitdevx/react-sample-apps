import PropTypes from "prop-types";
import { RecipeCard } from "./RecipeCard";

const RecipeList = ({ recipes }) => {

    return (
        <>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {recipes && recipes.items && recipes.items.map(recipe => (
                        <RecipeCard key={recipe.idMeal} recipe={recipe} />
                    ))}
                </div>
            </div>
        </>
    )
}

RecipeList.propTypes = {
    recipes: PropTypes.object
}

export default RecipeList;