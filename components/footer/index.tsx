import React from "react";
import LinkSection from "./link-section"
import DeliverySection from "./delivery-section"
import CopyRightSection from "./copy-right-sectoin"
import theme from "../../styles/theme";

export default function () {
    return (
        <footer>
            <LinkSection />
            <DeliverySection />
            <CopyRightSection />

            <style jsx>{`
                footer {
                    margin-left: ${theme.sideNavigation.width}; // space for side-navigation
                }
                @media (max-width: ${theme.sizes.laptop}) { // render content on the full screen for small devices
                    footer {
                        margin-left: 0;
                    }
                }
            `}</style>
        </footer>
    )
}