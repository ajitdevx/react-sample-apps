
function MenuItem({ title, price, desc }) {
    return (
        <div className="card-body">
            <div className="menu-item d-flex">
                <div className="item-name text-capitalize fw-semibold flex-grow-1">
                    {title}
                </div>
                <div className="item-price text-warning">
                    {price}
                </div>
            </div>
            <hr className="my-2" />
            <p className="card-text">{desc}</p>
        </div>
    )
}

export { MenuItem }