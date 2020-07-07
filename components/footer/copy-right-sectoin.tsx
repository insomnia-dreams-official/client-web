import theme from "../../styles/theme";
import React from "react";

export default function () {
    return (
        <div className="copyright-section">
            2000-2020 © marinus-tk.ru — интернет-магазин бытовой химии, одноразовой посуды
            и упаковки. Все права защищены. Доставка по всей России!

            <style jsx>{`
                .copyright-section {
                    border-bottom: ${theme.borders[1]};
                    border-color: ${theme.colors.gray_light};
                    padding: ${theme.space[4]}px 0;                
                }
            `}</style>
        </div>
    )
}