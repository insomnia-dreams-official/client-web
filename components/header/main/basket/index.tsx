import React from "react";
import SvgBasket from '../../../icons/svg-basket'
import Link from "next/link";
import theme from "../../../../styles/theme";

export default function () {
    const sum = 0; // todo: get from redux + .toFixed(2)
    return (
        <div className="header-main__basket header-main__item_pointer">
            <Link href="/">
                <a className="header-main__link link">
                    <SvgBasket height="20"/>
                    <span className="link__text">{!sum ? `Корзина` : sum}</span>
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

