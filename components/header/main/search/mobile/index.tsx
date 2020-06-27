import React from "react";
import SvgSearch from '../../../../icons/svg-search'
import theme from "../../../../../styles/theme";

export default function () {
    return (
        <div className="header-main__search-mobile header-main__item_pointer">
            <div className="search-mobile-button__container container_flex-center">
                <SvgSearch height="20" />
            </div>

            <style jsx>{`
                .header-main__search-mobile {
                    height: 100%;
                }
                .search-mobile-button__container {
                    height: 100%;
                    padding: 0 ${theme.space[3]}px;
                }
                
                @media (min-width: ${theme.sizes.laptop}) { /* hide Desktop */
                    .container {
                        display: none;
                    }
                }
            `}</style>
        </div>
    )
}