import { useEffect, useState } from "react";
import { recipeService } from "../../_services/recipe.service";
import { useParams } from "react-router";

const defaultRecipe = {
    item: null,
    searchTerm: '',
    isLoading: false
}

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(defaultRecipe);

    useEffect(() => {
        recipeService.getRecipeById(id).then(d => setRecipe({
            item: d.meals?.[0],
            searchTerm: '',
            isLoading: false
        }));
    }, [id]);

    const { item } = recipe;
    return (
        <>
            {
                !item ? null : (
                    <div className="container mt-5">
                        {/* Recipe Header */}
                        <div className="text-center mb-4">
                            <h1 className="fw-bold">{item.strMeal}</h1>
                            <span className="badge bg-primary">Category: {item.strCategory}</span>
                            <span className="badge bg-warning text-dark ms-2">Cuisine: {item.strArea}</span>
                        </div>
                        {/* Recipe Image & Video */}
                        <div className="row">
                            <div className="col-md-6">
                                <img
                                    src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"
                                    className="img-fluid rounded shadow-sm"
                                    alt="Teriyaki Chicken Casserole"
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="ratio ratio-16x9">
                                    <iframe
                                        src="https://www.youtube.com/embed/4aZr5hZXP_s"
                                        title="Recipe Video"
                                        allowFullScreen=""
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Ingredients */}
                        <div className="mt-5">
                            <h3 className="fw-semibold">Ingredients</h3>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <strong>{item.strMeasure1}</strong> - {item.strIngredient1}
                                </li>
                                <li className="list-group-item">
                                    <strong>{item.strMeasure2}</strong> - {item.strIngredient2}
                                </li>
                                <li className="list-group-item">
                                    <strong>{item.strMeasure3}</strong> - {item.strIngredient3}
                                </li>
                                <li className="list-group-item">
                                    <strong>{item.strMeasure4}</strong> - {item.strIngredient4}
                                </li>
                                <li className="list-group-item">
                                    <strong>{item.strMeasure5}</strong> - {item.strIngredient5}
                                </li>
                                <li className="list-group-item">
                                    <strong>{item.strMeasure6}</strong> - {item.strIngredient6}
                                </li>
                                <li className="list-group-item">
                                    <strong>{item.strMeasure7}</strong> - {item.strIngredient7}
                                </li>
                                <li className="list-group-item">
                                    <strong>{item.strMeasure8}</strong> - {item.strIngredient8}
                                </li>
                                <li className="list-group-item">
                                    <strong>{item.strMeasure9}</strong> - {item.strIngredient9}
                                </li>
                            </ul>
                        </div>
                        {/* Instructions */}
                        <div className="mt-5">
                            <h3 className="fw-semibold">Instructions</h3>
                            <p className="lead">
                                Follow these steps to make a delicious {item.strMeal}:
                            </p>
                            <div className="border p-3 bg-white shadow-sm rounded">
                                <p>
                                    {item.strInstructions}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default RecipeDetail;;