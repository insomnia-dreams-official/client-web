import React from "react";
import theme from "../../styles/theme";

export default function (props) {
    const {category} = props
    return (
        <div className="category-pile">
            <div className="blur-mask">
                {category.name}
            </div>

            <style jsx>{`
                .category-pile {
                    height: 300px;
                    flex-basis: 49.5%;
                    margin-bottom: ${theme.space[2]}px;
                    // margin-right: ${theme.space[2]}px;
                    background-image: ${`url(/category-piles/${category.path}.png)`};
                    background-size: cover;
                    background-repeat: no-repeat;
                    border-radius: ${theme.radii[2]};
                    position: relative;
                    box-shadow: ${theme.shadow};
                }    
                .blur-mask{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 25%;    
                    background-color: rgba(255,255,255, 0.9);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-transform: uppercase;
                    border-bottom-right-radius: ${theme.radii[2]};
                    border-bottom-left-radius: ${theme.radii[2]};
                    font-size: ${theme.fontSizes[2]}px;
                    font-weight: 600;
                    color: rgb(85, 85, 85);
                }
                
                @media (max-width: ${theme.sizes.tablet}) { 
                    .category-pile {
                        flex-basis: 100%;
                    }
                }
            `}</style>
        </div>
    )
}