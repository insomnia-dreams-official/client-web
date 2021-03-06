import React from "react";
import Header from "../header";
import Footer from "../footer";
import SideNavigation from "../side-navigation";
import theme from "../../styles/theme";

export default function Layout(props) {

    return (
        <div onTouchStart={() => {}} className="layout layout__wrapper">
            {/*
            --> onTouchStart={() => {}} <--
            This hack solve issue with :active pseudo selector in safari browser.
            *otherwise after click, background will not be changed
            https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari
            solution -> onTouchStart={} + .layout { -webkit-tap-highlight-color: rgba(0,0,0,0); }
            */}

            <Header/>
            <div className="layout__main container_limit_max-width">
                {/* @ts-ignore*/}
                <SideNavigation navigation={props.navigation}/>
                <div className="layout__content">{props.children}</div>
                <Footer/>
            </div>

           <style jsx>{`
                .layout {}
                .layout__wrapper {
                    background: ${theme.colors.gray_lightest};
                }
                .layout__main {}
                .layout__content {
                    margin-left: ${theme.sideNavigation.width};
                    padding-bottom: ${theme.space[4]}px;
                    border-bottom: ${theme.borders[1]};
                    border-color: ${theme.colors.gray_light};
                }
                
                @media (max-width: ${theme.sizes.laptop}) { // render content on the full screen for small devices
                    .layout__content {
                        margin-left: 0;
                    }
                }
            `}</style>
        </div>
    )
}