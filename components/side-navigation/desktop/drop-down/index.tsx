import React from "react";
import theme from "../../../../styles/theme";

export default function (props) {
    return (
        <div className="container" onMouseEnter={() => {
            props.showDropDownDebounce(props.item)
            //props.cancelShow()
            clearTimeout(props.timer)
        }}>
            {props.item.subItems.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}

            <style jsx>{`
                .container {
                    z-index: 2;
                    width: 700px;
                    height: 600px;
                    border-radius: ${theme.radii[2]};
                    position: absolute;
                    left: ${theme.sideNavigation.width};
                    top: 0;
                    background: ${theme.colors.white};
                    box-shadow: 0 1px 5px rgba(0,0,0,.3);
                }
            `}</style>
        </div>
    )
}