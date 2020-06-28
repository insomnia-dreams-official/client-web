import React from "react";
import SvgLogo from '../../../icons/svg-logo'
import Link from "next/link";
import theme from "../../../../styles/theme";

export default function () {
    return (
        <div className="header-main__logo header-main__item_pointer logo__container">
            <Link href="/">
                <a className="header-main__link">
                    <SvgLogo
                        height="35"
                        className="logo-icon__header-main"
                    />
                </a>
            </Link>

            <style jsx>{`
                .logo__container {
                    //width: ${theme.sideNavigation.width};
                }

                @media (max-width: ${theme.sizes.laptop}) {
                    :global(.logo-icon__header-main) {
                        height: 25px;
                        margin: ${theme.space[2]}px 0;
                    }   
                } 
            `}</style>
        </div>
    )
}