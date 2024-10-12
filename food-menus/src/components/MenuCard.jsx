import { MenuItem } from './MenuItem'

function MenuCard({ menuItems }) {
    return (
        <>
            {menuItems && (
                menuItems.map((item) => (
                    <div key={item.id} className="col-6">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <FoodImage imagesrc={item.img} />
                                </div>
                                <div className="col-md-8">
                                    <MenuItem {...item} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}

        </>
    )
}

function FoodImage({ imagesrc }) {
    return (
        <img src={imagesrc} className="img-thumbnail rounded-start" alt="..." />
    )
}

export { MenuCard }