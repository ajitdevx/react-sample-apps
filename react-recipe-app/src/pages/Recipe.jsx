import { useEffect, useState } from "react";
import { recipeService } from "../_services/recipe.service";
import { RecipeCategory } from "../components/Recipe/RecipeCategory";
import RecipeList from "../components/Recipe/RecipeList";
import banner from '../_assets/slide1-1.jpg';

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
    }, [category.activeCategoryName]);

    const handleCategoryClick = (item) => {
        setCategory({ ...category, activeCategoryName: item })
    }

    return (
        <>
            <main className="container">
                <div className="bg-body-secondary p-5 rounded mt-3">
                    <div className="row">
                        <div className="col-12">
                            <img src={banner} alt="" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="d-flex justify-content-center m-3">
                        <h3 className="h2 fw-semibold">
                            What to <span className="text-warning">Cook</span> ?
                        </h3>
                    </div>
                    <RecipeCategory category={category} handleCategoryClick={handleCategoryClick} />
                </div>
                <RecipeList recipes={recipes} />
            </main>

        </>
    )
}

export default Recipe;