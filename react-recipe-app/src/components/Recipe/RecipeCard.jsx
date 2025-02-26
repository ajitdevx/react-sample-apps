import PropTypes from "prop-types"
import { NavLink } from "react-router"

const RecipeCard = ({ recipe }) => {
    return (
        <div className="col">
            <div className="card p-2 bg-gray">
                <div className="card-body">
                    <h5 className="card-title">{recipe.strMeal}</h5>
                </div>
                <img
                    src={recipe.strMealThumb}
                    className="card-img-bottom"
                    alt={recipe.strMeal}
                />
                <div className="card-footer d-grid gap-2">
                    <NavLink to={`/recipe/${recipe.idMeal}`} className="btn btn-dark btn-block rounded-pill" type="button">
                        See Complete Recipe
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

RecipeCard.propTypes = {
    recipe: PropTypes.object
}


export { RecipeCard }