import { MenuCard } from './MenuCard'
import { Category } from './Category'
import menuItems from '../food-menus.json'
import { useState, useEffect } from 'react'

function MenuContainer() {
    const [filterdMenuItem, setFilterdMenuItem] = useState(menuItems);
    const [activeCategory, setActiveCategory] = useState('all');
    const [allCategories, SetAllCategories] = useState(null);

    useEffect(() => {
        const categories = [...new Set(menuItems.map(item => item.category))];
        console.log(categories)

        SetAllCategories(categories)
    }, [])

    const handleCategoryClick = (category) => {
        setActiveCategory(category);

        if (category == 'all')
            return setFilterdMenuItem(menuItems);
        else {
            const newFilterdMenuItem = menuItems.filter(item => item.category == category);
            return setFilterdMenuItem(newFilterdMenuItem);
        }
    }

    return (
        <>
            <div className="container mt-3">
                <MenuHeader />
                <Category categories={allCategories} activeCategory={activeCategory} handleCategoryClick={handleCategoryClick} />
                <div className="row mt-4">
                    <MenuCard menuItems={filterdMenuItem} />
                </div>
            </div>
        </>
    )
}

function MenuHeader() {
    return (
        <>
            <h3 className="text-center">Our Menu</h3>
            <div
                style={{ width: 80 }}
                className="text-center my-2 mx-auto border border-warning"
            ></div>
        </>
    )
}

export { MenuContainer }