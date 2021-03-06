import React from "react";
import theme from "../../../styles/theme";
import Link from "next/link";
import {NavigationItem} from "../container";

interface Props {
    item: NavigationItem
    hideDropDown: Function
    showDropDownDebounce: Function
    cancelShow: Function
}

export default class extends React.Component<Props, null> {
    render() {
        const {item, hideDropDown, showDropDownDebounce, cancelShow} = this.props
        return (
            <div
                className="container container_flex"
                onClick={() => hideDropDown}
                onMouseEnter={() => showDropDownDebounce(item)}
                onMouseLeave={() => cancelShow()}
            >
                <Link href={`/${item.link}`}>
                    <a className="link">{item.name}</a>
                </Link>
                {item.items && !!item.items.length && <div className="arrow"/>}

                <style jsx>{`  
                    .container {
                        width: ${theme.sideNavigation.width};
                        padding-top: 10px;
                        padding-bottom: 10px;
                        padding-left: ${theme.space[1]}px; // to separate link's text from screen border
                        padding-right: 10px;
                        cursor: pointer;
                        align-items: center;
                        justify-content: space-between;
                    }
                    .link {
                        color: ${theme.colors.gray};
                        text-decoration: none;
                    }
                    .link:first-letter {
                        text-transform: capitalize;
                    }
                    .arrow {
                        margin-top: 5px;
                        width: 7px;
                        height: 7px;
                        border: solid ${theme.colors.gray_light};
                        border-width: 0 1px 1px 0;
                        transform: rotate(-45deg);
                    }
                    .container:hover > .link {
                        color: ${theme.colors.blue};
                     }
                    .container:hover > .arrow {
                        border-color: ${theme.colors.blue};
                        transform: translateX(${theme.space[1]}px) rotate(-45deg);
                        transition: ${theme.animation.transition};
                    }
                `}</style>
            </div>
        )
    }
}