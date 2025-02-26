import { useEffect, useState } from "react";
import { recipeService } from "../_services/recipe.service";
import { RecipeCategory } from "../components/Recipe/RecipeCategory";
import RecipeList from "../components/Recipe/RecipeList";

const defaultCategory = {
    categories: [],
    activeCategoryName: 'Beef'
}

const defaultRecipe = {
    items: [],
    searchTerm: ''
}

const Recipe = () => {
    const [recipes, setRecipes] = useState(defaultRecipe);
    const [category, setCategory] = useState(defaultCategory);

    useEffect(() => {
        recipeService.getRecipeCategories().then(data => {
            setCategory({
                categories: data || [],
                activeCategoryName: data?.[0] || 'Beef'
            });
        });

    }, []);

    useEffect(() => {        
        recipeService.getRecipesByCategory(category.activeCategoryName).then(data => {
            setRecipes({
                items: data.meals || [],
            });
        })
    }, [category.activeCategoryName])

    return (
        <>
            <main className="container">
                <div className="bg-body-secondary p-5 rounded mt-3">
                    <h1>Bottom Navbar example</h1>
                    <p className="lead">
                        This example is a quick exercise to illustrate how the bottom navbar
                        works.
                    </p>
                    <a
                        className="btn btn-lg btn-primary"
                        href="/docs/5.3/components/navbar/"
                        role="button"
                    >
                        View navbar docs »
                    </a>
                </div>
                <div className="container">
                    <div className="d-flex justify-content-center m-3">
                        <h3 className="h2 fw-semibold">
                            What to <span className="text-warning">Cook</span> ?
                        </h3>
                    </div>
                    <RecipeCategory category={category} />
                </div>
                <RecipeList recipes={recipes} />
            </main>

        </>
    )
}

export default Recipe;