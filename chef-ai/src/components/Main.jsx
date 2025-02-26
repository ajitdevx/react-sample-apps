import { useState } from "react";
import { getRecipeFromChefClaude } from "../ai";
import ClaudeRecipe from "./ClaudeRecipe";


export default function Main() {

    const defaultIngredients = ["Chicken breasts", "Most of the main spices", "Olive oil", "Heavy cream", "Chicken broth", "Parmesan cheese", "Spinach"]
    const [ingredients, setIngredients] = useState(defaultIngredients);
    const [recipe, setRecipe] = useState(false);

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    const addIngredient = (formData) => {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    const getRecipe = async () => {
        const response = await getRecipeFromChefClaude(ingredients)
        console.log(response)
        setRecipe(response.content[0].text)
    }

    return (
        <main>
            <section>
                <form className="add-ingredient-form" action={addIngredient}>
                    <input type="text" name="ingredient" aria-label="Add ingredient" placeholder="eg: orange" />
                    <button>Add ingredient</button>
                </form>
            </section>

            {ingredients.length > 0 &&
                <Ingredients
                    ingredientsListItems={ingredientsListItems} getRecipe={getRecipe} />
            }
            {recipe && <ClaudeRecipe recipe={recipe} />}

        </main>
    )
}

function Ingredients({ ingredientsListItems, getRecipe }) {
    return (
        <>
            <section className="ingredients">
                <h1>Ingredients on hand:</h1>
                <ul className="ingredients-list" aria-live="polite">
                    {ingredientsListItems}
                </ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={getRecipe}>Get a recipe</button>
                </div>
            </section>
        </>
    )
}

