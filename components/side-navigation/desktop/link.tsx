import React from "react";
import classNames from "classnames";
import theme from "../../../styles/theme";
import Link from "next/link";
import {NavigationItem} from "../container";

interface Props {
    item: NavigationItem
    selectItem: Function
    selectedItemId: number
}

export default class extends React.Component<any, any> {
    private itemRef: HTMLDivElement;

    constructor(props) {
        super(props)
        this.state = {
            isHovered: false,
        }
    }

    handleMouseEnter = (selectedItem: NavigationItem) => {
        this.setState(prevState => ({isHovered: !prevState.isHovered})) // todo: use just true/false
        this.props.showDropDownDebounce(selectedItem)
    }

    handleMouseLeave = e => {
        this.setState(prevState => ({isHovered: !prevState.isHovered}))
        this.props.cancelShow(e)
    }

    //onMouseMove = e => {
    //    this.setState({x: e.screenX, y: e.screenY});
    //}

    render() {
        const {item, hideDropDown} = this.props
        return (
            <div
                className="container container_flex"
                ref={component => this.itemRef = component}
                onClick={() => hideDropDown()}
                onMouseEnter={() => this.handleMouseEnter(item)}
                onMouseLeave={e => this.handleMouseLeave(e)}
            >
                <Link href={`/${item.link}`}>
                    <a className={classNames('link', {
                        'link_active': this.state.isHovered
                    })}>{item.name}</a>
                </Link>
                {item.subItems && item.subItems.length &&
                <div
                    className={classNames('arrow', {
                        'arrow_active': this.state.isHovered
                    })}
                />}

                <style jsx>{`  
                    .container {
                        width: ${theme.sideNavigation.width};
                        padding-top: 5px;
                        padding-bottom: 5px;
                        padding-left: ${theme.space[1]}px; // to separate link's text from screen border
                        padding-right: 10px;
                        cursor: pointer;
                        align-items: center;
                        justify-content: space-between;
                    }
                    .link {
                        color: #555;
                        text-decoration: none;
                    }
                    .link:first-letter {
                        text-transform: capitalize;
                    }
                    .link_active {
                        color: ${theme.colors.blue};
                        transition: ${theme.animation.transition};
                    }
                    .arrow {
                        margin-top: 5px;
                        width: 7px;
                        height: 7px;
                        border: solid #ccc;
                        border-width: 0 1px 1px 0;
                        transform: rotate(-45deg);
                    }
                    .arrow_active {
                        border-color: ${theme.colors.blue};
                        transition: ${theme.animation.transition};
                    }
                `}</style>
            </div>
        )
    }
}