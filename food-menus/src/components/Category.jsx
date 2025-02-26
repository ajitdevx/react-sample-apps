
function Category({ categories, activeCategory, handleCategoryClick }) {
    return (
        <div className="row">
            <div className="col-12 text-center">
                {categories && (
                    <button type="button" onClick={() => handleCategoryClick('all')} className={activeCategory === 'all' ? "btn btn-outline-warning active btn-sm mx-2" : "btn btn-outline-warning btn-sm mx-2"}>All</button>
                )}
                {categories && categories.map((item, index) => (
                    <button key={index} type="button" onClick={() => handleCategoryClick(item)}
                        className={activeCategory === item ? "btn btn-outline-warning active btn-sm mx-2" : "btn btn-outline-warning btn-sm mx-2"}>{item}</button>
                ))}
            </div>
        </div>
    )
}
export { Category }