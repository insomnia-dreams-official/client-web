import React from "react"
import DesktopSideNavigation from './desktop'
import theme from "../../styles/theme"

interface SimpleItem {
    id: number
    name: string
    path?: string
    link: string
}

export interface NavigationItem extends SimpleItem {
    items?: Array<SimpleItem>
}

export default class SearchContainer extends React.Component {
    render() {
        return (
            <div className="side-navigation">
                {/*// @ts-ignore*/}
                <DesktopSideNavigation items={this.props.navigation}/>

                <style jsx global>{`
                    @media (max-width: ${theme.sizes.laptop}) { // hide desktop search on small
                        .side-navigation__desktop {
                            display: none;
                        }
                    }
                    @media (min-width: ${theme.sizes.laptop}) { // hide mobile search on big screens
                        .side-navigation__mobile {
                            display: none;
                        }
                    }                
                `}</style>
            </div>
        )
    }
}