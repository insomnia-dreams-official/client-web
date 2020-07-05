import React from "react";
import classNames from 'classnames'
import theme from "../../../../styles/theme";
import Link from "next/link";

export default function (props) {
    const {item} = props
    const selectedItemArticul = item.id
    const HOUSEHOLD_CHEMISTRY_ARTICUL = "00000374"
    return (
        <div className="container">
            {item && (
                <>
                    <div className="header-container">
                        <Link href={`/${item.link}`}>
                            <a className="header-link">{item.name}</a>
                        </Link>
                    </div>

                    <div className={classNames(
                        'sublinks-container',
                        {'sublinks-container__chemistry': selectedItemArticul === HOUSEHOLD_CHEMISTRY_ARTICUL}
                    )}>
                        {item.items
                            .sort((a, b) => a.name >= b.name ? 1 : -1)
                            .map(item => (
                                <Link key={item.id} href={`/${item.link}`}>
                                    <a className={classNames(
                                        'sublink',
                                        {'sublink__chemistry': selectedItemArticul === HOUSEHOLD_CHEMISTRY_ARTICUL}
                                    )}>{item.name}</a>
                                </Link>
                            ))}
                    </div>
                </>
            )}

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
                // header-link + sublink
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
                    align-content: start; // move columns to the left
                    height: calc(100% - 2*20px); 
                    width: 100%;
                    // without explicitly defined height and property: "flex-direction: column"
                    // .sublink(s) will overflow .sublinks-container 
                }
                .sublinks-container__chemistry { // modifier for household_chemistry (too many items in it)
                    align-content: space-between;
                }
                .sublink {
                    margin-top: 10px;
                    margin-bottom: 10px;
                    font-size: ${theme.fontSizes[1]}px;
                    font-weight: 400;
                }
                .sublink__chemistry { // modifier for household_chemistry (too many items in it)
                    width: calc((100% - 2*20px)/3);
                    height: 35px;
                    margin-bottom: 0;
                    margin-top: 10px;
                }
                .header-link::first-letter .sub-link::first-letter {
                    text-transform: capitalize;
                }
                .header-link:hover {
                    color: ${theme.colors.blue};
                }
                .sublink:hover {
                    color: ${theme.colors.blue};
                }
            `}</style>
        </div>
    )
}