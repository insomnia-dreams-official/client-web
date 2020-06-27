import React from "react";
import Burger from './burger'
import Logo from './logo'
import Search from './search'
import Help from './help'
import Basket from './basket'
import Auth from './auth'
import theme from "../../../styles/theme";

export default function () {
    return (
        <div className="header-main header-main__wrapper">
            <div className="container_limit_max-width container_flex">
                <Burger/>
                <Logo/>
                <Search/>
                <Help/>
                <Basket/>
                <Auth/>
            </div>

            <style jsx>{`
                .header-main__wrapper {
                    background: ${theme.colors.blue};
                }
            `}</style>

            <style jsx global>{`
                // we need this class to control background after click on safari;
                // otherwise pseudo selectors will not work and background will be the same after touch event
                .header-main__item_pointer {
                    cursor: pointer;
                }
                .header-main__item_pointer:visited, .header-main__item_pointer:focus, .header-main__item_pointer:active {
                    background-color: ${theme.colors.blue_dark};
                }
                .header-main__link {
                    display: flex; // ***without svg goes beyond link borders
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    width: 100%;
                    padding-left: ${theme.space[3]}px;
                    padding-right: ${theme.space[3]}px;
                    color: ${theme.colors.white};
                    text-decoration: none;
                }
                
               // disable hover effect for small screens
                @media (min-width: ${theme.sizes.laptop}) {
                    .header-main__link:hover {
                        background: ${theme.colors.blue_dark};
                        transition: ${theme.animation.transition};
                    }
                }
                                
                // rearrange components order (transfer logo to the center)
                // Why I did not used class name - "header-main__item"?
                // For convenient reordering it's better to manipulate with exact class-names; not elem:nth-child(n).
                @media (max-width: ${theme.sizes.laptop}) {
                    .header-main__burger {
                        order: 1;
                    }
                    .header-main__logo { 
                        order: 3;
                        flex-grow: 1;
                    }
                    .header-main__search { 
                        order: 2;
                    }
                    .header-main__help {
                        display: none;      
                    }
                    .header-main__basket {
                        order: 5;
                    }
                    .header-main__auth {
                        order: 6;
                    }
                }  
            `}</style>
        </div>
    )
}