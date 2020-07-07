import React from "react";
import CategoryPile from './category-pile'

const categories = [
    {
        articul: '0001',
        name: 'бытовая химия',
        path: '1'
    },
    {
        id: '0002',
        name: 'бумажная продукция',
        path: '2'
    }
]

export default function () {
    return (
        <div className="category-piles">
            {categories.map(category => (
                <CategoryPile
                    key={category.articul}
                    category={category}
                />
            ))}

            <style jsx>{`
                .category-piles {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }    
            `}</style>
        </div>
    )
}