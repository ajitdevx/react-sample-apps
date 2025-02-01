import { useEffect, useState } from "react";
import { recipeService } from "../_services/recipe.service";

const Recipe = () => {
    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        recipeService.get().then(response => {
            console.log('in ui', response);
            setRecipes(response);
        })
    }, [])

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
                    <div className="d-flex justify-content-center px-5 mx-5 categories flex-wrap align-items-center">
                        <button
                            className="btn btn-dark rounded-pill px-3 mx-3 mb-3"
                            type="button"
                        >
                            All Types
                        </button>
                        <button
                            className="btn btn-light rounded-pill px-3 mx-3 mb-3"
                            type="button"
                        >
                            Main Courses
                        </button>
                        <button
                            className="btn btn-light rounded-pill px-3 mx-3 mb-3"
                            type="button"
                        >
                            Salads &amp; Sides
                        </button>
                        <button
                            className="btn btn-light rounded-pill px-3 mx-3 mb-3"
                            type="button"
                        >
                            Vegitaien Delights
                        </button>
                        <button
                            className="btn btn-light rounded-pill px-3 mx-3 mb-3"
                            type="button"
                        >
                            International Flavous
                        </button>
                        <button
                            className="btn btn-light rounded-pill px-3 mx-3 mb-3"
                            type="button"
                        >
                            All Types
                        </button>
                        <button
                            className="btn btn-light rounded-pill px-3 mx-3 mb-3"
                            type="button"
                        >
                            Vegitaien Delights
                        </button>
                        <button
                            className="btn btn-light rounded-pill px-3 mx-3 mb-3"
                            type="button"
                        >
                            International Flavous
                        </button>
                        <button
                            className="btn btn-light rounded-pill px-3 mx-3 mb-3"
                            type="button"
                        >
                            All Types
                        </button>
                        <button
                            className="btn btn-light rounded-pill px-3 mx-3 mb-3"
                            type="button"
                        >
                            Vegitaien Delights
                        </button>
                        <button
                            className="btn btn-light rounded-pill px-3 mx-3 mb-3"
                            type="button"
                        >
                            International Flavous
                        </button>
                        <button
                            className="btn btn-light rounded-pill px-3 mx-3 mb-3"
                            type="button"
                        >
                            All Types
                        </button>
                    </div>
                </div>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        <div className="col">
                            <div className="card p-2 bg-gray">
                                <div className="card-body">
                                    <h5 className="card-title">Classic Margherita Pizza</h5>
                                </div>
                                <img
                                    src="https://cdn.dummyjson.com/recipe-images/1.webp"
                                    className="card-img-bottom"
                                    alt="..."
                                />
                                <div className="card-footer d-grid gap-2">
                                    <button
                                        className="btn btn-dark btn-block rounded-pill"
                                        type="button"
                                    >
                                        See Complete Recipe
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card p-2 bg-gray">
                                <div className="card-body">
                                    <h5 className="card-title">Classic Margherita Pizza</h5>
                                </div>
                                <img
                                    src="https://cdn.dummyjson.com/recipe-images/1.webp"
                                    className="card-img-bottom"
                                    alt="..."
                                />
                                <div className="card-footer d-grid gap-2">
                                    <button
                                        className="btn btn-dark btn-block rounded-pill"
                                        type="button"
                                    >
                                        See Complete Recipe
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card p-2 bg-gray">
                                <div className="card-body">
                                    <h5 className="card-title">Classic Margherita Pizza</h5>
                                </div>
                                <img
                                    src="https://cdn.dummyjson.com/recipe-images/1.webp"
                                    className="card-img-bottom"
                                    alt="..."
                                />
                                <div className="card-footer d-grid gap-2">
                                    <button
                                        className="btn btn-dark btn-block rounded-pill"
                                        type="button"
                                    >
                                        See Complete Recipe
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card p-2 bg-gray">
                                <div className="card-body">
                                    <h5 className="card-title">Classic Margherita Pizza</h5>
                                </div>
                                <img
                                    src="https://cdn.dummyjson.com/recipe-images/2.webp"
                                    className="card-img-bottom"
                                    alt="..."
                                />
                                <div className="card-footer d-grid gap-2">
                                    <button
                                        className="btn btn-dark btn-block rounded-pill"
                                        type="button"
                                    >
                                        See Complete Recipe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Recipe;