import PropTypes from "prop-types"


const RecipeCategory = ({ category }) => {
    return (
        <div className="d-flex justify-content-center px-5 mx-5 categories flex-wrap align-items-center">
            {
                category && category.categories && category.categories.map((cat, index) => (
                    <button key={index}
                        className={"btn rounded-pill px-3 mx-3 mb-3 "
                            + (category.activeCategoryName === cat ? "btn-dark" : "btn-light")}
                        type="button"
                    >
                        {cat}
                    </button>
                ))
            }
        </div>
    )
}

RecipeCategory.propTypes = {
    category: PropTypes.object
}

export { RecipeCategory }