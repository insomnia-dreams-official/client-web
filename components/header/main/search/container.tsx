import React from "react";
import DesktopSearch from './desktop'
import MobileSearch from './mobile'
import theme from "../../../../styles/theme";

export default class SearchContainer extends React.Component {
    render() {
        return (
            <div className="header-main__search">
                <DesktopSearch/>
                <MobileSearch/>

                <style jsx global>{`
                    @media (max-width: ${theme.sizes.laptop}) { // hide desktop search on small
                        .header-main__search {
                            flex-grow: 0;
                        }
                        .header-main__search .header-main__search-desktop {
                            display: none;
                        }
                    }
                    @media (min-width: ${theme.sizes.laptop}) { // hide mobile search on big screens
                        .header-main__search {
                            flex-grow: 1;
                        }
                        .header-main__search .header-main__search-mobile {
                            display: none;
                        }
                    }                
                `}</style>
            </div>
        )
    }
}