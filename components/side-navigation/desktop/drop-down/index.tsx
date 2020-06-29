import React from "react";
import theme from "../../../../styles/theme";
import Link from "next/link";

export default function (props) {
    const {item} = props
    return (
        <div className="container">
            <div className="header-container">
                <Link href={`/${item.link}`}>
                    <a className="header-link">{item.name}</a>
                </Link>
            </div>

            <div className="sublinks-container">
                {item.items.map(item => (
                    <Link key={item.id} href={`/${item.link}`}>
                        <a className="sublink">{item.name}</a>
                    </Link>
                ))}
            </div>

            <style jsx>{`
                .container {
                    z-index: 2;
                    width: 700px;
                    height: 600px;
                    position: absolute;
                    top: 0;
                    left: ${theme.sideNavigation.width}; // ~ 200px
                    border-radius: ${theme.radii[2]};
                    background: ${theme.colors.white};
                    box-shadow: ${theme.shadow};
                    padding: 20px;
                }
                a {
                    color: ${theme.colors.gray_dark};
                    display: inline-block;
                }
                .header-container {
                    padding-bottom: 20px;
                }
                .header-link {
                    font-size: ${theme.fontSizes[4]}px;
                    font-weight: 200;
                }
                .sublinks-container {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                }
                .sublink {
                    font-size: ${theme.fontSizes[1]}px;
                    font-weight: 400;
                }
                .header-link::first-letter .sub-link::first-letter {
                    text-transform: capitalize;
                }
                .header-link:hover .sub-link:hover {
                    color: ${theme.colors.blue};
                }
            `}</style>
        </div>
    )
}