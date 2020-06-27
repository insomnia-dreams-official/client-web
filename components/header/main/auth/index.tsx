import React from "react";
import SvgAuth from '../../../icons/svg-auth'
import Link from "next/link";
import theme from "../../../../styles/theme";

export default function () {
    return (
        <div className="header-main__auth header-main__item_pointer">
            <Link href="/">
                <a className="header-main__link link">
                    <SvgAuth height="20"/>
                    <span className="link__text">Вход</span>
                </a>
            </Link>

            <style jsx>{`
                .link__text {
                  margin-left: ${theme.space[1]}px;
                }
                
                @media (max-width: ${theme.sizes.tablet}) {
                    .link__text {
                        display: none;
                    }
                }
            `}</style>
        </div>
    )
}