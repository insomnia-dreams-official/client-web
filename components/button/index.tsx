import React from "react";
import theme from "../../styles/theme";

interface Props {
    text?: string;
    className?: string
}

export default function (props: Props) {
    return (
        <>
            <button className={"button " + props.className}>{props.text}</button>
            <style jsx>{`
                .button {
                    border: ${theme.borders[1]};                 
                    border-radius: ${theme.radii[2]};         
                    cursor: pointer;  
                    text-transform: uppercase;
                    font-weight: 600; 
                }
                /* size modifiers */
                .button_sm {
                    height: ${theme.button.size.sm.height};
                    padding: ${theme.button.size.sm.padding};
                    font-size: ${theme.button.size.sm.fontSize};
                }
                /* color modifiers */
                .button_blue-transparent {
                      color: ${theme.button.color.blue_transparent.color};
                      background: ${theme.button.color.blue_transparent.background};
                      border-color: ${theme.button.color.blue_transparent.borderColor};
                }
                .button_blue-transparent:hover {
                      color: ${theme.button.color.blue.hover.color};
                      background: ${theme.button.color.blue.hover.background};
                      border-color: ${theme.button.color.blue.hover.borderColor};
                }
            `}</style>
        </>
    )
}