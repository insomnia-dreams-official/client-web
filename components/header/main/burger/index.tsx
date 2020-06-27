import React from "react";
import theme from "../../../../styles/theme";

export default function () {
    let isToggled = false
    return (
        <div className="header-main__burger header-main__item_pointer container_flex-center">
            <div className="burger-icon">
                <div className="burger-icon__line"/>
                <div className="burger-icon__line"/>
                <div className="burger-icon__line"/>
            </div>

            <style jsx>{`
                .header-main__burger {
                    padding: 0 ${theme.space[3]}px;
                }
                .burger-icon {
                    width: 20px;                
                }
                .burger-icon__line {
                    content: '';
                    display: block;
                    height: 3px;
                    margin: 3px 0;
                    border-radius: ${theme.radii[2]};
                    background-color: ${theme.colors.white};
                    transition: all .2s ease-in-out;
                }
                // animate burger to cross -> "X"
                .burger-icon__line:nth-child(1) {
                    transform: ${isToggled ? `translateY(6px) rotate(135deg)` : `none`};
                }
                .burger-icon__line:nth-child(2) {
                    transform: ${isToggled ? 'scale(0)' : 'none'};
                }
                .burger-icon__line:nth-child(3) {
                    transform: ${isToggled ? "translateY(-6px) rotate(-135deg)" : "none"};
                }
                // hide on big screens
                @media (min-width: ${theme.sizes.laptop}) { 
                    .header-main__burger {
                        display: none;        
                    }          
                }  
            `}</style>
        </div>
    )
}