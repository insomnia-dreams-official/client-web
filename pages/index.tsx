import React from "react";
import Slider from "../components/slider";
import AdvantagesImage from "../components/advantages-image";
import CategoryPiles from "../components/category-piles";

import theme from "../styles/theme";

export default function Home() {

    return (
        <div className="home-container">
            <Slider/>

           <AdvantagesImage />

           <CategoryPiles />

            <style jsx global>{`
                // Create space for every container on the page
                .home-container > div {
                    margin-top: ${theme.space[2]}px;
                }
            `}</style>

            <style jsx>{`
                    
            `}</style>
        </div>
    )
}
