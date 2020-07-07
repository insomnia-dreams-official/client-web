import React from "react";
import CategoryPile from './category-pile'

export default function (props) {
    const {categories} = props
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