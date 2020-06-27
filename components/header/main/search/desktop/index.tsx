import React from "react";
import theme from "../../../../../styles/theme";

export default function () {
    return(
        <div className="header-main__search-desktop container">
            <input type="text"/>

            <style jsx>{`
               .container {
                  display: flex;
                  align-items: center;
                  width: 100%;
                  padding: ${theme.space[1]}px ${theme.space[3]}px;
               }
               input {
                  width: 100%;
                  padding: ${theme.space[1]}px;
                  font-size: ${theme.fontSizes[3]}px;
                  color: ${theme.colors.black};
                  outline: none;
                  border: none;
                  border-radius: ${theme.radii[4]};
                  text-indent: ${theme.space[3]}px;
               }
            `}</style>
        </div>
    )
}