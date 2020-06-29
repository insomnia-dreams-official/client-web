import React from "react";
import Link from 'next/link'
import PhoneLink from '../../links/phone'
import Button from '../../button'
import theme from "../../../styles/theme";

export default function HeaderTop() {
    return (
        <div className="header-top header-top__wrapper">
            <div className="header-top__container container_limit_max-width">
                <PhoneLink/>

                <Link href="/request-call">
                    <a>
                        <Button
                            text="заказать звонок"
                            className="
                            header-top__request-call-button
                             button_sm
                              button_blue-transparent"
                        />
                    </a>
                </Link>

                <a href="/files/price.xlsx" download>
                    <Button
                        text="скачать прайс"
                        className="header-top__download-price-button
                         button_sm
                          button_blue-transparent"
                    />
                </a>
            </div>

            <style jsx>{`
                .header-top__wrapper {
                    background-color: ${theme.colors.gray_lightest};
                }
                .header-top__container {
                    display: flex;
                    justify-content: flex-end; 
                    align-items: center;
                    padding: ${theme.space[1]}px ${theme.space[2]}px;
                }  
                :global(.header-top__request-call-button) {
                    margin-left: ${theme.space[3]}px;
                    outline: none; // hide black outline after click event
                }              
                :global(.header-top__download-price-button) {
                    margin-left: ${theme.space[2]}px;
                    outline: none; // hide black outline after click event
                }            
                
                // hide header-top on tablets and phones
                @media (max-width: ${theme.sizes.tablet}) {
                    display: none;
                }  
            `}</style>
        </div>
    )
}
