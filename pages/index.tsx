import React from "react";
import { useQuery } from '@apollo/react-hooks';
import Slider from "../components/slider";
import AdvantagesImage from "../components/advantages-image";
import CategoryPiles from "../components/category-piles";
import theme from "../styles/theme";
import {GET_ROOTCATEGORIES} from "../graphql/rootcategory.query";


export default function Home() {
    const { data, loading, error } = useQuery(GET_ROOTCATEGORIES);
    if (loading) {
        return <div>loading...</div>
    }
    if (!loading && !error && data.rootcategories) {
        return (
            <div className="home-container">
                <Slider/>

                <AdvantagesImage/>

                <CategoryPiles categories={data.rootcategories}/>

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
}
