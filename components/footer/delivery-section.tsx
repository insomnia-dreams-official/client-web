import theme from "../../styles/theme";
import React from "react";

export default function () {
    return(
        <div className="delivery-section">
            delivery-section

            <style jsx>{`
                .delivery-section {
                    border-bottom: ${theme.borders[1]};
                    border-color: ${theme.colors.gray_light};
                    padding: ${theme.space[4]}px 0;                
                }
            `}</style>
        </div>
    )
}
